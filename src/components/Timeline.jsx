// src/components/Timeline.jsx

import axios from "axios";
import getEnvironment from "../getenvironment";
import { useState, useEffect, forwardRef } from "react";
import formatDate from "../utility/formatDate";
import { motion } from "framer-motion";
import { Lightbulb, FileText, BarChart3, Users, Handshake } from "lucide-react";

const Timeline = forwardRef((props, ref) => {
  const { confid } = props;
  const [datesData, setDatesData] = useState([]);
  const [apiUrl, setApiUrl] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    getEnvironment().then((url) => setApiUrl(url));
  }, []);

  useEffect(() => {
    if (!apiUrl) return;
    axios
      .get(`${apiUrl}/conferencemodule/eventDates/conference/${confid}`, {
        withCredentials: true,
      })
      .then((res) => setDatesData(res.data || []))
      .catch((err) => console.error(err));
  }, [apiUrl, confid]);

  const icons = [Lightbulb, FileText, BarChart3, Users, Handshake];

  return (
    <motion.section
      ref={ref}
      className="relative py-20 md:py-28 w-full bg-gradient-to-br from-emerald-50 via-white to-emerald-100 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Soft background glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-200/30 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-300/20 blur-3xl rounded-full animate-pulse delay-500" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: -24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-800 relative inline-block">
            Conference Timeline
            <motion.span
              className="absolute -bottom-3 left-0 w-full h-1 rounded-full bg-gradient-to-r from-emerald-400 to-green-400"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.25 }}
            />
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Stay aligned with the important dates and milestones of the conference.
          </p>
        </motion.div>

        {/* Center Line */}
        <motion.div
          className="absolute left-1/2 my-10 top-20 bottom-0 w-[2px] bg-emerald-300 rounded-full"
          initial={{ height: 0 }}
          whileInView={{ height: "95%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        />

        {/* Timeline Items */}
        <div className="relative space-y-20">
          {datesData.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            const isLeft = idx % 2 === 0;

            return (
              <motion.div
                key={idx}
                className={`relative flex flex-col md:flex-row items-center ${
                  isLeft ? "md:justify-end" : "md:justify-start"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                {/* ICON at center line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20 bg-white rounded-full shadow-md border border-emerald-100 w-16 h-16 flex items-center justify-center">
                  <div className="bg-emerald-500 w-12 h-12 rounded-full flex items-center justify-center shadow-md">
                    <Icon className="text-white" size={26} strokeWidth={2} />
                  </div>
                </div>

                {/* CARD */}
                <motion.div
                  className={`relative mt-20 md:mt-0 md:w-[46%] rounded-2xl backdrop-blur-lg bg-white shadow-md border border-emerald-100 px-6 py-6 md:px-8 transition-all duration-300 ${
                    isLeft ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"
                  }`}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                  style={{
                    boxShadow:
                      hoveredIndex === idx
                        ? "0 20px 40px rgba(16,185,129,0.15)"
                        : "0 8px 24px rgba(2,6,23,0.06)",
                  }}
                >
                  <h3 className="font-semibold text-lg md:text-xl text-emerald-700 uppercase">
                    {item.title || ""}
                  </h3>

                  {item.description && (
                    <p className="text-gray-600 mt-2 text-sm md:text-base leading-relaxed">
                      {item.description}
                    </p>
                  )}

                  {/* DATE */}
                  {!item.extended ? (
                    <div className="mt-4">
                      <span className="inline-block bg-emerald-500 text-white px-4 py-1.5 rounded-full text-xs md:text-sm shadow-sm">
                        {formatDate(item.date)}
                      </span>
                    </div>
                  ) : (
                    <div className="mt-4 space-y-2">
                      <div
                        className={`flex ${
                          isLeft ? "justify-end" : "justify-start"
                        } items-center`}
                      >
                        <span className="inline-block bg-emerald-500 text-white px-4 py-1.5 rounded-full text-xs md:text-sm shadow-sm mr-2">
                          {formatDate(item.newDate)}
                        </span>
                        <span className="text-emerald-600 text-xs font-medium">
                          Extended
                        </span>
                      </div>
                      <div
                        className={`flex ${
                          isLeft ? "justify-end" : "justify-start"
                        }`}
                      >
                        <span className="inline-block text-gray-400 line-through text-xs md:text-sm">
                          {formatDate(item.date)}
                        </span>
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
});

Timeline.displayName = "Timeline";
export default Timeline;
