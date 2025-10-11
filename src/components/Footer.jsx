const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/bg.jpg')",
      }}
    >
      {/* Footer Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 w-full text-black font-poppins">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Contact Section */}
          <div className="lg:w-1/2">
            <div>
              <h2 className="mt-3 bg-[#007A5E] text-white px-6 sm:px-8 py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-[#00624C] shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2 group font-poppins">
                Contact us
              </h2>
            </div>

            <ul className="space-y-5 mt-7">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#007A5E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>
                <span className="ml-2 text-base">E-mail: vista@nitj.ac.in</span>
              </li>

              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#007A5E"
                  stroke="#007A5E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span className="ml-2 text-base">
                  Dr Nitesh Kashyap (Organizing Secretary): +91 9753301930
                </span>
              </li>

              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#007A5E"
                  stroke="#007A5E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span className="ml-2 text-base">
                  Dr Rohit Singh (Organizing Chairman): +91 7087513174
                </span>
              </li>

              <li className="mt-20 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#007A5E"
                  stroke="#007A5E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span className="ml-2 text-base">
                  Dr. Aijaz Mehdi Zaidi (Organising Chairman): +91 01815032621
                </span>
              </li>
            </ul>
          </div>

          {/* Flag Counter */}
          <a href="https://info.flagcounter.com/8LP0">
            <img
              src="https://s01.flagcounter.com/count2/8LP0/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_10/viewers_0/labels_0/pageviews_0/flags_0/percent_0/"
              alt="Flag Counter"
              border="0"
            />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-400/30 text-center">
          <p className="text-xs">
            Developed and Maintained by{" "}
            <a
              href="https://xceed.nitj.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <span className="text-xs text-[#007A5E]">XCEED NITJ</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
