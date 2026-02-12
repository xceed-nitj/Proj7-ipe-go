import { Mail, User } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-green-950 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 text-white">
      {/* ===== Animated Wave Background ===== */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L0,320Z"
            fill="#1A1307"
            fillOpacity="0.08"
          />
          <path
            d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,149.3C672,149,768,171,864,176C960,181,1056,171,1152,149.3C1248,128,1344,96,1392,80L1440,64L1440,320L0,320Z"
            fill="#1A1307"
            fillOpacity="0.06"
          />
        </svg>
      </div>

      {/* ===== Footer Content ===== */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-10 py-6 flex flex-col gap-6">
        {/* ---- Centered Cards (Equal Height) ---- */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 md:gap-12">
          
          {/* ---- Contact Info ---- */}
          <div className="relative w-full max-w-md h-full bg-white/10 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-white/10 flex flex-col">
            <h2 className="text-center text-xl sm:text-2xl font-semibold bg-gradient-to-r from-green-400 to-green-300 text-transparent bg-clip-text mb-4">
              Contact Us
            </h2>

            <ul className="space-y-4 flex-1">
              <li className="flex items-start gap-3">
                <Mail className="text-yellow-400 shrink-0" />
                <span className="text-sm sm:text-base">
                  <strong>Email:</strong> glogift2026@nitj.ac.in
                </span>
              </li>
              <li className="flex items-start gap-3">
                <User className="text-yellow-400 shrink-0" />
                <span className="text-sm sm:text-base">
                  <strong>Prof. Rajiv Kumar Garg (Organizing Chairman)</strong> Mob: +91&nbsp;9417549528
                </span>
              </li>

              <li className="flex items-start gap-3">
                <User className="text-yellow-400 shrink-0" />
                <span className="text-sm sm:text-base">
                  <strong>Dr Narendra Kumar (Organizing Secretary)</strong> Mob: +91&nbsp;8982612225
                </span>
              </li>

              <li className="flex items-start gap-3">
                <User className="text-yellow-400 shrink-0" />
                <span className="text-sm sm:text-base">
                  <strong>Dr Bikash Kumar (Organizing Secretary)</strong> Mob: +91&nbsp;6001181672
                </span>
              </li>

              <li className="flex items-start gap-3">
                <User className="text-yellow-400 shrink-0" />
                <span className="text-sm sm:text-base">
                  <strong>Dr Varun Sharma (Organizing Secretary)</strong> Mob: +91&nbsp;8591113750
                </span>
              </li>

              <li className="flex items-start gap-3">
                <User className="text-yellow-400 shrink-0" />
                <span className="text-sm sm:text-base">
                  <strong>Dr Rajeev Verma (Organizing Secretary)</strong> Mob: +91&nbsp;9464740847
                </span>
              </li>

              {/* <li className="flex items-start gap-3">
                <User className="text-yellow-400 shrink-0" />
                <span className="text-sm sm:text-base">
                  <strong>Dr Rajeev Verma</strong> (+91&nbsp;9464740847)
                </span>
              </li> */}
            </ul>
          </div>

          {/* ---- Flag Counter ---- */}
          <div className="relative w-full max-w-md h-full flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm rounded-3xl border border-white/10 p-6 shadow-lg hover:shadow-xl transition-all duration-500">
            <h3 className="text-lg font-semibold text-green-300 mb-2">
              Global Visitors
            </h3>

            <a
              href="https://info.flagcounter.com/ApT8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://s01.flagcounter.com/count2/ApT8/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_10/viewers_0/labels_1/pageviews_1/flags_0/percent_0/"
                alt="Flag Counter"
                className="rounded-lg shadow-md border border-gray-300"
              />
            </a>
          </div>
        </div>

        {/* ---- Divider ---- */}
        {/* <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent my-4" /> */}

        {/* ---- Credits ---- */}
        <div className="flex flex-col sm:flex-row justify-center items-center text-center gap-2">
          <p className="text-xs sm:text-sm text-gray-300">
            © {new Date().getFullYear()} Dr B R Ambedkar National Institute of
            Technology, Jalandhar
          </p>
          <span className="hidden sm:inline text-gray-500">|</span>
          <p className="text-xs sm:text-sm text-gray-300">
            Developed & Maintained by{" "}
            <a
              href="https://xceed.nitj.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-300 hover:text-green-200 underline underline-offset-4"
            >
              XCEED NITJ
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
