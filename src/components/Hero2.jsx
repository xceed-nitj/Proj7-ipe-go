import Navbar from "./Navbar/index";
import TopNavbar from "./Navbar/TopNavInfo";

export default function Hero2() {
  return (
    <>
      {/* Show TopNavbar only on tablet and desktop */}
      <div className="hidden sm:block">
        <TopNavbar />
      </div>

      <Navbar />

      {/* --- Hero Section --- */}
      <div className="bg-[#f8faf9] p-4 sm:p-8 md:p-4">
        <section className="relative rounded-3xl overflow-hidden min-h-[80vh] bg-gradient-to-br from-[#F0F7F4] via-[#FAFDFB] to-[#E7F2EE] border border-[#E2EAE7] shadow-[0_4px_30px_rgba(0,0,0,0.05)] flex items-center justify-center transition-all duration-500">
          
          {/* --- Background Image --- */}
          <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl">
            <img
              src="/bg.jpg"
              alt="Mobile Background"
              className="absolute inset-0 w-full h-full object-cover sm:hidden"
              draggable="false"
            />
            <img
              src="/Backgroundcanva.jpg"
              alt="Background Canvas"
              className="absolute inset-0 w-full h-full object-cover hidden sm:block"
              draggable="false"
            />
            <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-br from-white/70 via-white/40 to-[#E7F2EE]/40 md:from-white/20 md:via-white/10 md:to-[#E7F2EE]/20" />
          </div>

          {/* --- Main Content --- */}
          <main className="relative z-10 h-full flex flex-col justify-center items-center px-4 sm:px-10 py-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full items-center">
              
              {/* ---------- LEFT SIDE ---------- */}
              <div className="flex flex-col items-start text-left gap-5 font-sans">
                {/* Logos and Title */}
                <div className="flex items-center gap-4">
                  <img
                    src="/nitjlogo.png"
                    alt="NIT Jalandhar"
                    className="h-12 sm:h-16 w-auto object-contain"
                    loading="lazy"
                  />
                  <img
                    src="/glo.png"
                    alt="GLOGIFT"
                    className="h-10 sm:h-14 w-auto object-contain"
                    loading="lazy"
                  />
                  <span className="text-[#007A5E] font-bold text-lg sm:text-2xl">
                    GLOGIFT&nbsp;2026
                  </span>
                </div>

                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1D2A26] leading-snug">
                  26<sup>th</sup> Global Conference on{" "}
                  <span className="text-[#007A5E]">Flexible Systems Management</span>
                </h1>

                <p className="text-lg sm:text-xl text-[#4E605A] font-medium">
                  Theme:{" "}
                  <span className="text-[#007A5E] font-semibold">
                    Sustainable Innovation through Flexible Strategies in the Era of Industry 4.0 and Industry 5.0
                  </span>
                </p>

                <div className="flex flex-col gap-1 text-[#2C3E50] text-sm sm:text-base">
                  <p>
                    <strong>December 16 – 18, 2026</strong> 
                  </p>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-[#007A5E]"
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
                    <span>
                      Dr. B. R. Ambedkar National Institute of Technology, Jalandhar, Punjab, India
                    </span>
                  </div>
                </div>

                <button className="mt-3 bg-[#007A5E] text-white px-6 sm:px-8 py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-[#00624C] shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2 group">
                  Submit Paper
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
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

              {/* ---------- RIGHT SIDE (removed hosted by) ---------- */}
              <div className="hidden md:flex flex-col items-center justify-center"></div>
            </div>
          </main>
        </section>
      </div>
    </>
  );
}
