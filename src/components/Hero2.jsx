import { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar/index";
import TopNavbar from "./Navbar/TopNavInfo";
import { FileText, Tag, Mic } from "lucide-react";
import axios from "axios";
import getEnvironment from "../getenvironment";

export default function Hero2({ confid = "glogift2026" }) {
  const [apiUrl, setApiUrl] = useState(null);
  const [announcements, setAnnouncements] = useState([]);
  const videoRef = useRef(null);

  /* ---------------- ENV ---------------- */
  useEffect(() => {
    getEnvironment().then((url) => setApiUrl(url));
  }, []);

  /* ---------------- ANNOUNCEMENTS ---------------- */
  useEffect(() => {
    if (!apiUrl) return;

    axios
      .get(`${apiUrl}/conferencemodule/announcements/conf/${confid}`, {
        withCredentials: true,
      })
      .then((res) => {
        const sorted = res.data
          .filter((item) => !item.hidden)
          .sort((a, b) => a.sequence - b.sequence);
        setAnnouncements(sorted);
      })
      .catch((err) => console.log(err));
  }, [apiUrl, confid]);

  /* ---------------- VIDEO SPEED CONTROL ---------------- */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const setSpeed = () => {
      video.playbackRate = 0.6; // 🎬 cinematic slow
    };

    video.addEventListener("loadedmetadata", setSpeed);
    video.addEventListener("play", setSpeed);

    return () => {
      video.removeEventListener("loadedmetadata", setSpeed);
      video.removeEventListener("play", setSpeed);
    };
  }, []);

  return (
    <>
      {/* Top Navbar (desktop only) */}
      <div className="hidden xl:block">
        <TopNavbar />
      </div>

      <Navbar />

      {/* ---------------- PAGE ---------------- */}
      <div className="bg-[#f8faf9] flex flex-col min-h-screen">
        <section
          className="relative rounded-3xl overflow-hidden flex-1 border border-[#E2EAE7]
                     shadow-[0_4px_30px_rgba(0,0,0,0.05)] flex items-center justify-center 
                     transition-all duration-500 m-2 bg-[url('/bgnew.png')] bg-cover"
        >
          {/* ---------------- BACKGROUND ---------------- */}
          <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl">
            {/* Mobile image fallback */}
            <img
              src="/bg.jpg"
              alt="Mobile Background"
              className="absolute inset-0 w-full h-full object-cover block xl:hidden"
              draggable="false"
            />

          <video
  ref={videoRef}
  className="absolute inset-y-0 left-1/2 -translate-x-0.5
             w-[50%] h-full object-cover hidden xl:block
             mask-image-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
  autoPlay
  loop
  muted
  playsInline
>
  <source src="/glow.mp4" type="video/mp4" />
</video>


            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b xl:bg-gradient-to-br from-white/70 via-white/40 to-[#E7F2EE]/40" />
          </div>

          {/* ---------------- CONTENT ---------------- */}
          <main className="relative z-10 h-full flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 py-6">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12 max-w-9xl w-full items-center">
              {/* LEFT */}
              <div className="flex flex-col items-start gap-4">
                <div className="flex items-center gap-4 flex-wrap">
                  <img src="/nitjlogo.png" className="h-10" alt="NITJ" />
                  <img src="/glo.png" className="h-9" alt="GLOGIFT" />
                  <img src="/graphic.png" className="h-9" alt="GLOGIFT" />
                  <span className="text-[#007A5E] font-bold text-xl">
                    GLOGIFT 2026
                  </span>
                </div>

              <h1 className="leading-tight">
  <span className="block text-md sm:text-xl xl:text-2xl font-semibold text-[#1D2A26] mb-2">
    26<sup>th</sup> Global Conference on
  </span>

  <span className="block text-3xl sm:text-3xl xl:text-4xl font-bold text-[#007A5E] mb-2">
    Flexible Systems Management
  </span>

  <span className="block text-lg text-[#4E605A]">
    Sustainable Innovation through Flexible Strategies in the Era of
    Industry 4.0 and Industry 5.0
  </span>
</h1>

                {/* DATE */}
                <p className="bg-white border border-[#007A5E] text-[#007A5E] font-semibold px-5 py-2.5 rounded-lg">
                  December 16 – 18, 2026
                </p>

                {/* INSTITUTE */}
                <div className="flex items-start gap-2 text-[#2C3E50] text-sm sm:text-base max-w-md">
                  <svg
                    className="w-5 h-5 text-[#007A5E] flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 11a3 3 0 100-6 3 3 0 000 6z" />
                    <path d="M19.5 10.5c0 7.5-7.5 11.25-7.5 11.25S4.5 18 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span>
                    Dr. B. R. Ambedkar National Institute of Technology,
                    Jalandhar, Punjab, India
                  </span>
                </div>

                {/* CTA */}
                <a
                  href="https://cmt3.research.microsoft.com/GLOGIFT2026"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="mt-3 bg-[#007A5E] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#00624C] transition-all flex items-center gap-2 group">
                    Submit Paper
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </main>
        </section>

        {/* ---------------- ANNOUNCEMENTS ---------------- */}
        <section className="py-10 px-6 bg-[#F8FAF9]">
          <div className="grid gap-6 max-w-6xl mx-auto sm:grid-cols-2 lg:grid-cols-3">
            {announcements.length ? (
              announcements.map((item) => (
                <div
                  key={item._id}
                  className="bg-white rounded-2xl shadow-md border p-6 flex flex-col gap-3"
                >
                  <div className="flex items-center gap-3">
                    {item.icon === "file" ? (
                      <FileText className="text-[#007A5E]" />
                    ) : item.icon === "tag" ? (
                      <Tag className="text-[#007A5E]" />
                    ) : (
                      <Mic className="text-[#007A5E]" />
                    )}
                    <h2 className="font-semibold text-[#007A5E]">
                      {item.title}
                    </h2>
                  </div>
                  <p className="text-[#4E605A]">{item.metaDescription}</p>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-full">
                
              </p>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
