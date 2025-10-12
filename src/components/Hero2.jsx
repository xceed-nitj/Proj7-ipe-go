// src/components/Hero2.jsx

import Navbar from "./Navbar/index";
import TopNavbar from "./Navbar/TopNavInfo";
import { FileText, Tag, Mic } from "lucide-react";

export default function Hero2() {
  return (
    <>
      {/* Show TopNavbar only on tablet and desktop */}
      <div className="hidden xl:block">
        <TopNavbar />
      </div>

      <Navbar />

      {/* --- Full Page (100vh) --- */}
      <div className="bg-[#f8faf9] flex flex-col min-h-screen">
        {/* --- Hero Section --- */}
        <section
          className="relative rounded-3xl overflow-hidden flex-1 border border-[#E2EAE7]
                     shadow-[0_4px_30px_rgba(0,0,0,0.05)] flex items-center justify-center 
                     transition-all duration-500 m-2"
        >
          {/* --- Background Image --- */}
          <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl">
            {/* Mobile background below 1187px */}
            <img
              src="/bg.jpg"
              alt="Mobile Background"
              className="absolute inset-0 w-full h-full object-cover block xl:hidden"
              draggable="false"
            />
            {/* Desktop background */}
            <img
              src="/Backgroundcanva.jpg"
              alt="Desktop Background"
              className="absolute inset-0 w-full h-full object-cover hidden xl:block"
              draggable="false"
            />
            <div className="absolute inset-0 bg-gradient-to-b xl:bg-gradient-to-br from-white/70 via-white/40 to-[#E7F2EE]/40" />
          </div>

          {/* --- Main Content --- */}
          <main className="relative z-10 h-full flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 py-6">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12 max-w-7xl w-full items-center">
              {/* ---------- LEFT SIDE ---------- */}
              <div className="flex flex-col items-start text-left gap-4 font-sans">
                {/* Logos */}
                <div className="flex items-center gap-3 sm:gap-5 flex-wrap">
                  <img
                    src="/nitjlogo.png"
                    alt="NIT Jalandhar"
                    className="h-8 sm:h-10 md:h-14 w-auto object-contain"
                    loading="lazy"
                  />
                  <img
                    src="/glo.png"
                    alt="GLOGIFT"
                    className="h-7 sm:h-9 md:h-12 w-auto object-contain"
                    loading="lazy"
                  />
                  <span className="text-[#007A5E] font-bold text-lg sm:text-xl md:text-2xl">
                    GLOGIFT&nbsp;2026
                  </span>
                </div>

                {/* Heading */}
                <h1
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1D2A26]
                             leading-snug max-w-3xl"
                >
                  26<sup>th</sup> Global Conference on{" "}
                  <span className="text-[#007A5E]">Flexible Systems Management</span>
                </h1>

                {/* Theme */}
                <p className="text-base sm:text-lg md:text-xl text-[#4E605A] font-medium">
                  Theme:{" "}
                  <span className="text-[#007A5E] font-semibold">
                    Sustainable Innovation through Flexible Strategies in the Era
                    of Industry 4.0 and Industry 5.0
                  </span>
                </p>

                {/* Date & Location */}
                <div className="flex flex-col gap-1 text-[#2C3E50] text-sm sm:text-base">
                  <p>
                    <strong>December 16 – 18, 2026</strong>
                  </p>
                  <div className="flex items-start sm:items-center gap-2 max-w-md">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-[#007A5E] flex-shrink-0 mt-0.5 sm:mt-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 11a3 3 0 100-6 3 3 0 000 6z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.5-7.5 11.25-7.5 11.25S4.5 18 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                    <span className="leading-snug">
                      Dr. B. R. Ambedkar National Institute of Technology,
                      Jalandhar, Punjab, India
                    </span>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  className="mt-4 bg-[#007A5E] text-white px-5 sm:px-7 py-2.5 rounded-lg font-semibold 
                             text-sm sm:text-base hover:bg-[#00624C] shadow-sm hover:shadow-md 
                             transition-all duration-300 flex items-center gap-2 group"
                >
                  Submit Paper
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>

              {/* ---------- RIGHT SIDE ---------- */}
             
            </div>
          </main>
        </section>

        {/* --- Announcement Section --- */}
        <section className="py-10 px-6 sm:px-10 bg-[#F8FAF9] text-center">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* --- Card 1 --- */}
            <div className="bg-white rounded-2xl shadow-md border border-[#E2EAE7] p-6 hover:shadow-lg transition-shadow duration-300 text-left flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <FileText className="text-[#007A5E] w-6 h-6" />
                <h2 className="text-lg sm:text-xl font-semibold text-[#007A5E]">
                  Paper Submission Open
                </h2>
              </div>
              <p className="text-[#4E605A] text-sm sm:text-base">
                Submissions for research papers and case studies are now open.
                Submit your work by <strong>August 31, 2026</strong>.
              </p>
            </div>

            {/* --- Card 2 --- */}
            <div className="bg-white rounded-2xl shadow-md border border-[#E2EAE7] p-6 hover:shadow-lg transition-shadow duration-300 text-left flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Tag className="text-[#007A5E] w-6 h-6" />
                <h2 className="text-lg sm:text-xl font-semibold text-[#007A5E]">
                  Early Bird Registration
                </h2>
              </div>
              <p className="text-[#4E605A] text-sm sm:text-base">
                Avail early bird discounts on registration fees until{" "}
                <strong>October 15, 2026</strong>.
              </p>
            </div>

            {/* --- Card 3 --- */}
            <div className="bg-white rounded-2xl shadow-md border border-[#E2EAE7] p-6 hover:shadow-lg transition-shadow duration-300 text-left flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Mic className="text-[#007A5E] w-6 h-6" />
                <h2 className="text-lg sm:text-xl font-semibold text-[#007A5E]">
                  Keynote Speakers Announced
                </h2>
              </div>
              <p className="text-[#4E605A] text-sm sm:text-base">
                Stay tuned for sessions from renowned experts in sustainability
                and Industry 5.0.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
