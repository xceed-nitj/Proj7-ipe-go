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
          <div  > <h2 className="bg-gradient-to-r from-pink-500 to-pink-400 text-white text-xl font-semibold rounded-3xl p-3 justify-center mb-5 inline-block">Contact us</h2></div>
            {/* <h3 className="text-3xl font-bold text-black mb-4">
              Contact Us
            </h3>
            <div className="w-20 h-1 bg-[#1A1307] mb-4"></div> */}
            <ul className="space-y-3 text-white">
              <li className="flex items-center">
                {/* <Phone /> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ba6e1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
                <span className="text-base"> E-mail: vista@nitj.ac.in</span>
              </li>

              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ba6e1a" stroke="#ba6e1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <span className="text-base">Dr Nitesh Kashyap (Organizing Secretary): +91 9753301930</span>
              </li>

              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ba6e1a" stroke="#ba6e1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <span className="text-base">Dr Rohit Singh (Organizing Chairman): +91 7087513174</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ba6e1a" stroke="#ba6e1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <span className="text-base">Dr. Aijaz Mehdi Zaidi (Organising Chairman): +91 01815032621</span>
              </li>
            </ul>
        </div>
          <a href="https://info.flagcounter.com/8LP0">
            <img src="https://s01.flagcounter.com/count2/8LP0/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_10/viewers_0/labels_0/pageviews_0/flags_0/percent_0/" alt="Flag Counter" border="0"/>
          </a>
        </div>
{/* <a href="https://info.flagcounter.com/8LP0"><img src="https://s01.flagcounter.com/count2/8LP0/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_10/viewers_0/labels_0/pageviews_0/flags_0/percent_0/" alt="Flag Counter" border="0"></a> */}
        <div className=" mt-12 pt-8 border-t border-white">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-xs text-white mb-0 pb-0">
              Developed and Maintained by <a href="https://xceed.nitj.ac.in" target="_blank" rel="noopener noreferrer" className="hover:underline "><span className="text-xs text-white">XCEED NITJ</span></a>
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-400/30 text-center">
          <p className="text-xs">
            © 2025 Dr B R Ambedkar National Institute of Technology, Jalandhar |{" "}
            Developed & Maintained by{" "}
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
