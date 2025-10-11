// src/components/Timeline.jsx
import axios from "axios";
import getEnvironment from "../getenvironment";
import { useState, useEffect, forwardRef, useMemo } from "react";
import formatDate from "../utility/formatDate";

const THEME = {
  primary: "#007A5E",        // conference green
  primaryDark: "#00624C",
  accent: "#1D2A26",         // deep ink
  softMint: "#E7F2EE",
  softWhite: "#FAFDFB",
  gold: "#b08900",
};

const Timeline = forwardRef((props, ref) => {
  const { confid } = props;

  const [datesData, setDatesData] = useState([]);
  const [apiUrl, setApiUrl] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  useEffect(() => {
    setStatus("loading");
    getEnvironment().then((url) => setApiUrl(url));
  }, []);

  useEffect(() => {
    if (!apiUrl) return;
    setStatus("loading");
    axios
      .get(`${apiUrl}/conferencemodule/eventDates/conference/${confid}`, {
        withCredentials: true,
      })
      .then((res) => {
        setDatesData(res.data || []);
        setStatus("success");
      })
      .catch((err) => {
        console.error(err);
        setStatus("error");
      });
  }, [apiUrl, confid]);

  // Choose which date to display (newDate when extended)
  const normalized = useMemo(() => {
    return (datesData || []).map((d) => {
      const displayDate = d.extended && d.newDate ? d.newDate : d.date;
      return { ...d, displayDate };
    });
  }, [datesData]);

  // Sort by display date ascending
  const sorted = useMemo(() => {
    return [...normalized].sort(
      (a, b) => new Date(a.displayDate) - new Date(b.displayDate)
    );
  }, [normalized]);

  // simple “today/upcoming/past” helper
  const now = new Date();
  const getPhase = (iso) => {
    const when = new Date(iso);
    if (when.toDateString() === now.toDateString()) return "today";
    return when > now ? "upcoming" : "past";
  };

  // UI helpers
  const Dot = ({ idx }) => (
    <div
      className={`w-6 h-6 rounded-full border-4 border-white shadow-lg z-20
        ${idx % 2 === 0 ? "bg-[#0A8A6F]" : "bg-[#0E5F4E]"}`}
      aria-hidden="true"
    />
  );

  return (
    <div
      ref={ref}
      className="bg-white container w-full flex-col items-center mx-auto px-2 sm:px-20 py-12"
      style={{ backgroundImage: `linear-gradient(180deg, ${THEME.softWhite}, ${THEME.softMint})` }}
    >
      <div className="w-full max-w-6xl">
        {/* Title */}
        <div className="text-center mb-20">
          <button
            className="rounded-3xl px-6 py-3 text-white font-semibold text-xl sm:text-2xl shadow-sm"
            style={{
              backgroundImage: `linear-gradient(135deg, ${THEME.primary}, ${THEME.primaryDark})`,
            }}
            aria-label="Timeline"
          >
            Important Dates
          </button>
        </div>

        {/* Loading / Error / Empty */}
        {status === "loading" && (
          <div className="w-full flex flex-col items-center gap-4 py-12">
            <div className="w-12 h-12 rounded-full border-4 border-gray-200 border-t-[4px]" style={{ borderTopColor: THEME.primary }} />
            <p className="text-gray-600">Loading important dates…</p>
          </div>
        )}

        {status === "error" && (
          <div className="w-full text-center py-10">
            <p className="text-red-600 font-medium">Couldn’t load the timeline right now.</p>
            <p className="text-gray-600 text-sm">Please refresh or check your connection.</p>
          </div>
        )}

        {status === "success" && sorted.length === 0 && (
          <div className="w-full text-center py-10">
            <p className="text-gray-700">No timeline items are available yet.</p>
          </div>
        )}

        {status === "success" && sorted.length > 0 && (
          <>
            {/* Mobile: Vertical timeline (left-aligned spine, right cards) */}
            <div className="md:hidden relative py-8 pl-4">
              {/* Spine */}
              <div
                className="absolute left-8 top-0 bottom-0 w-1.5 z-0 rounded-full"
                style={{
                  backgroundImage: `linear-gradient(180deg, ${THEME.primary}, ${THEME.accent})`,
                }}
                aria-hidden="true"
              />

              <div className="relative space-y-10">
                {sorted.map((item, idx) => {
                  const phase = getPhase(item.displayDate);
                  return (
                    <div key={idx} className="relative z-10 pl-16">
                      {/* Dot – centered on spine */}
                      <div
                        className="absolute w-6 h-6 rounded-full border-4 border-white shadow-lg z-20"
                        style={{
                          left: 32,
                          top: "1.25rem",
                          transform: "translate(-50%, -50%)",
                          background:
                            idx % 2 === 0
                              ? "linear-gradient(135deg, #0A8A6F, #0E5F4E)"
                              : "linear-gradient(135deg, #0E5F4E, #0A8A6F)",
                        }}
                        aria-hidden="true"
                      />

                      {/* Event Title */}
                      <div
                        className="px-4 py-3 rounded-lg shadow-md mb-2 text-white"
                        style={{
                          backgroundImage: `linear-gradient(135deg, ${THEME.primary}, ${THEME.primaryDark})`,
                        }}
                      >
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-sm leading-tight flex-1">
                            {item.title}
                          </h4>
                          {item.extended && (
                            <span
                              className="text-[10px] px-2 py-0.5 rounded-full font-semibold"
                              style={{ backgroundColor: THEME.softWhite, color: THEME.primary }}
                            >
                              Extended
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Date Card */}
                      <div
                        className="px-4 py-2 rounded-lg shadow-sm border"
                        style={{
                          backgroundColor: "#F5FBF9",
                          borderColor: THEME.softMint,
                          color: THEME.accent,
                        }}
                      >
                        {!item.extended ? (
                          <p className="font-bold text-sm">{formatDate(item.displayDate)}</p>
                        ) : (
                          <>
                            <p className="font-bold text-sm">{formatDate(item.displayDate)}</p>
                            <p className="text-sm line-through opacity-70">{formatDate(item.date)}</p>
                          </>
                        )}
                        {/* Phase chip */}
                        <div className="mt-1">
                          <span
                            className="inline-block text-[10px] px-2 py-0.5 rounded-full"
                            style={{
                              backgroundColor:
                                phase === "upcoming"
                                  ? THEME.softMint
                                  : phase === "today"
                                  ? "#fff7cc"
                                  : "#f3f4f6",
                              color:
                                phase === "upcoming"
                                  ? THEME.primary
                                  : phase === "today"
                                  ? THEME.gold
                                  : "#6b7280",
                              border: "1px solid rgba(0,0,0,0.05)",
                            }}
                          >
                            {phase === "today" ? "Today" : phase.charAt(0).toUpperCase() + phase.slice(1)}
                          </span>
                        </div>
                      </div>

                      {/* Connector from card back to spine */}
                      <div
                        className="absolute left-0 top-5 h-0.5"
                        style={{
                          width: 16,
                          transform: "translateY(-50%)",
                          backgroundColor: THEME.primary,
                          opacity: 0.2,
                        }}
                        aria-hidden="true"
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Desktop/Tablet: Horizontal alternating timeline */}
          {/* Desktop/Tablet: Horizontal alternating timeline */}
            <div className="hidden md:block relative pb-36 pt-28">
              <div className="flex items-center justify-between relative h-24">   {/* Bar */}
                <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 z-0 px-2">
                  <div
                    className="w-full h-2 rounded-full"
                    style={{
                      backgroundImage: `linear-gradient(90deg, ${THEME.primary}, ${THEME.primaryDark})`,
                    }}
                    aria-hidden="true"
                  />
                </div>

                {/* Events */}
                {sorted.map((item, idx) => {
                  const phase = getPhase(item.displayDate);
                  return (
                    <div key={idx} className="relative flex-1 flex flex-col items-center z-10">
                      {/* Card container alternating above/below the bar */}
                      <div
                        className={`absolute ${idx % 2 === 0 ? "bottom-16" : "top-16"} w-56 transition-transform duration-300 hover:-translate-y-1`}
                      >
                        {/* Title */}
                        <div
                          className="px-4 py-3 rounded-lg shadow-md text-center mb-2 text-white"
                          style={{
                            backgroundImage: `linear-gradient(135deg, ${THEME.primary}, ${THEME.primaryDark})`,
                          }}
                        >
                          <div className="flex items-center justify-center gap-2">
                            <h4 className="font-semibold text-sm leading-tight">{item.title}</h4>
                            {item.extended && (
                              <span
                                className="text-[10px] px-2 py-0.5 rounded-full font-semibold"
                                style={{ backgroundColor: THEME.softWhite, color: THEME.primary }}
                              >
                                Extended
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Date */}
                        <div
                          className="px-4 py-2 rounded-lg shadow-sm text-center border"
                          style={{ backgroundColor: "#F5FBF9", borderColor: THEME.softMint }}
                        >
                          {!item.extended ? (
                            <p className="font-bold text-sm">{formatDate(item.displayDate)}</p>
                          ) : (
                            <>
                              <p className="font-bold text-sm">{formatDate(item.displayDate)}</p>
                              <p className="text-sm line-through opacity-70">{formatDate(item.date)}</p>
                            </>
                          )}

                          {/* Phase chip */}
                          <div className="mt-1">
                            <span
                              className="inline-block text-[10px] px-2 py-0.5 rounded-full"
                              style={{
                                backgroundColor:
                                  phase === "upcoming"
                                    ? THEME.softMint
                                    : phase === "today"
                                    ? "#fff7cc"
                                    : "#f3f4f6",
                                color:
                                  phase === "upcoming"
                                    ? THEME.primary
                                    : phase === "today"
                                    ? THEME.gold
                                    : "#6b7280",
                                border: "1px solid rgba(0,0,0,0.05)",
                              }}
                            >
                              {phase === "today" ? "Today" : phase.charAt(0).toUpperCase() + phase.slice(1)}
                            </span>
                          </div>
                        </div>

                        {/* Connector */}
                        <div
                          className={`absolute left-1/2 -translate-x-1/2 w-0.5 ${idx % 2 === 0 ? "top-full h-6" : "bottom-full h-6"}`}
                          style={{ backgroundColor: "rgba(0,0,0,0.12)" }}
                          aria-hidden="true"
                        />
                      </div>

                      {/* Dot on the bar */}
                      <Dot idx={idx} />

                      {/* Small triangle pointer (kept subtle to match theme) */}
                      <div
                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 z-30 ${
                          idx % 2 === 0
                            ? "border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px]"
                            : "border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[8px]"
                        }`}
                        style={{
                          borderTopColor: idx % 2 === 0 ? "#0A8A6F" : "transparent",
                          borderBottomColor: idx % 2 !== 0 ? "#0E5F4E" : "transparent",
                        }}
                        aria-hidden="true"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
});

Timeline.displayName = "Timeline";
export default Timeline;

