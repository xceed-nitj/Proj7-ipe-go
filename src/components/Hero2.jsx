import Navbar from "./Navbar/index";
import TopNavbar from "./Navbar/TopNavInfo";

export default function Hero2() {
  return (
    <>
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
              src="/Backgroundcanva.jpg"
              alt="Background Canvas"
              className="absolute inset-0 w-full h-full object-cover"
              draggable="false"
            />

            {/* Gradient Overlay (lighter on desktop, stronger on mobile for readability) */}
            <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-br from-white/70 via-white/40 to-[#E7F2EE]/40 md:from-white/20 md:via-white/10 md:to-[#E7F2EE]/20" />
          </div>

          {/* --- Main Content --- */}
          <main className="relative z-10 h-full flex flex-col justify-center items-center px-4 sm:px-10 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full items-center">

              {/* ---------- LEFT SIDE ---------- */}
              <div className="flex flex-col items-start text-left gap-5 font-sans">
                {/* Logo */}
                <img
                  src="/nitjlogo.png"
                  alt="NIT Jalandhar"
                  className="h-12 sm:h-16 w-auto object-contain"
                  loading="lazy"
                />

                {/* Heading */}
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1D2A26] leading-snug">
                  International Conference on{" "}
                  <span className="text-[#007A5E]">
                    VLSI, Intelligent Systems, Signal Processing,
                    <br className="hidden sm:block" /> Telecommunication and AI
                  </span>
                </h1>

                {/* Tagline */}
                <p className="text-sm sm:text-lg text-[#4E605A] leading-relaxed max-w-md">
                  Innovating for a Sustainable and Connected Future
                </p>

                {/* Location */}
                <div className="flex items-center gap-2 text-[#2C3E50]">
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
                  <span className="text-sm sm:text-base font-medium">
                    Dr B R Ambedkar National Institute of Technology, Jalandhar
                  </span>
                </div>

                {/* CTA Button */}
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

              {/* ---------- RIGHT SIDE (hidden on mobile) ---------- */}
              <div className="hidden md:flex flex-col items-center justify-center"></div>
            </div>
          </main>
        </section>
      </div>
    </>
  );
}
