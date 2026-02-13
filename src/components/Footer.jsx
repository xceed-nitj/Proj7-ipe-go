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
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-10 py-10 flex flex-col gap-10">
        
        {/* ---- Centered Cards (Equal Height Container) ---- */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 md:gap-8">
          
          {/* ---- Contact Info Card ---- */}
          <div className="flex-1 max-w-xl bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-white/10 flex flex-col">
            <h2 className="text-center text-xl sm:text-2xl font-semibold bg-gradient-to-r from-green-400 to-green-300 text-transparent bg-clip-text mb-6">
              Contact Us
            </h2>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="text-yellow-400 shrink-0 mt-1" size={20} />
                <span className="text-sm sm:text-base">
                  <strong className="text-green-300">Email:</strong> glogift2026@nitj.ac.in
                </span>
              </li>
              {[
                { name: "Prof. Rajiv Kumar Garg", role: "Organizing Chairman", mob: "+91 9417549528" },
                { name: "Dr Narendra Kumar", role: "Organizing Secretary", mob: "+91 8982612225" },
                { name: "Dr Bikash Kumar", role: "Organizing Secretary", mob: "+91 6001181672" },
                { name: "Dr Varun Sharma", role: "Organizing Secretary", mob: "+91 8591113750" },
                { name: "Dr Rajeev Verma", role: "Organizing Secretary", mob: "+91 9464740847" },
              ].map((contact, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <User className="text-yellow-400 shrink-0 mt-1" size={20} />
                  <span className="text-sm sm:text-base leading-tight">
                    <strong className="block md:inline">{contact.name}</strong> 
                    <span className="text-gray-300 block text-xs mb-1">({contact.role})</span>
                    <span className="text-yellow-100/80">Mob: {contact.mob}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ---- Flag Counter Card ---- */}
          <div className="flex-1 max-w-xl bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/10 shadow-lg hover:shadow-xl transition-all duration-500 flex flex-col items-center justify-center text-center">
            <h3 className="text-xl font-semibold text-green-300 mb-6">
              Global Visitors
            </h3>

            <div className="flex flex-col items-center justify-center flex-1 w-full">
                <a
                href="https://info.flagcounter.com/ApT8"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300 block"
                >
                <img
                    /* Increased columns to 3 and maxflags to 15 to make the widget naturally larger */
                    src="https://s01.flagcounter.com/count2/ApT8/bg_FFFFFF/txt_000000/border_CCCCCC/columns_3/maxflags_15/viewers_0/labels_1/pageviews_1/flags_0/percent_0/"
                    alt="Flag Counter"
                    className="rounded-lg shadow-2xl border border-white/20 w-full max-w-[300px] md:max-w-[350px]"
                />
                </a>
                <p className="mt-6 text-xs text-gray-400 italic">Tracking international participation</p>
            </div>
          </div>
        </div>

        {/* ---- Credits ---- */}
        <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row justify-center items-center text-center gap-2">
          <p className="text-xs sm:text-sm text-gray-400">
            © {new Date().getFullYear()} Dr B R Ambedkar National Institute of
            Technology, Jalandhar
          </p>
          <span className="hidden sm:inline text-gray-600">|</span>
          <p className="text-xs sm:text-sm text-gray-400">
            Developed & Maintained by{" "}
            <a
              href="https://xceed.nitj.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 underline underline-offset-4"
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