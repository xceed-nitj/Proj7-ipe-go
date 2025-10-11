// import { SocialIcon } from "react-social-icons";

// const socialLinks = [
//   {
//     id: 1,
//     url: "https://www.facebook.com/",
//   },
//   {
//     id: 2,
//     url: "https://www.instagram.com/",
//   },
//   {
//     id: 3,
//     url: "https://www.x.com/",
//   },
//   {
//     id: 4,
//     url: "https://www.linkedin.com/",
//   },
//   {
//     id: 5,
//     url: "https://www.github.com/",
//   },
// ];
// const footerLinks = [
//   {
//     id: 1,
//     title: "Services",
//     links: [
//       {
//         id: 1,
//         title: "1on1 Coaching",
//         url: "#",
//       },
//       {
//         id: 2,
//         title: "Company Review",
//         url: "#",
//       },
//       {
//         id: 3,
//         title: "Accounts Review",
//         url: "#",
//       },
//       {
//         id: 4,
//         title: "HR Consulting",
//         url: "#",
//       },
//       {
//         id: 5,
//         title: "SEO Optimisation",
//         url: "#",
//       },
//     ],
//   },
//   {
//     id: 2,
//     title: "Company",
//     links: [
//       {
//         id: 1,
//         title: "About",
//         url: "#",
//       },
//       {
//         id: 2,
//         title: "Meet the Team",
//         url: "#",
//       },
//       {
//         id: 3,
//         title: "Accounts Review",
//         url: "#",
//       },
//     ],
//   },
// ];

// import { FaFlag } from 'react-icons/fa';
// import { 
//   FaFlagUsa, 
//   FaCanada, 
//   FaFlagCheckered 
// } from 'react-icons/fa6';
// import { 
//   SiIndia, 
//   SiGermany, 
//   SiJapan, 
//   SiFrance, 
//   SiUnitedkingdom, 
//   SiChina, 
//   SiRussia 
// } from 'react-icons/si';
// import { Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden border-t border-blue-950">
      {/* Enhanced Wave background pattern */}
      
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 absolute inset-0 opacity-20 pointer-events-none ">
        <svg width="100%" height="100%" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" 
            fill="#1A1307" 
            fillOpacity="0.1"
          />
          <path 
            d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,149.3C672,149,768,171,864,176C960,181,1056,171,1152,149.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" 
            fill="#1A1307" 
            fillOpacity="0.05"
          />
          <path 
            d="M0,32L48,53.3C96,75,192,117,288,122.7C384,128,480,96,576,85.3C672,75,768,85,864,112C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" 
            fill="#1A1307" 
            fillOpacity="0.03"
          />
          <path 
            d="M0,224L48,229.3C96,235,192,245,288,240C384,235,480,213,576,202.7C672,192,768,192,864,208C960,224,1056,256,1152,261.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" 
            fill="#1A1307" 
            fillOpacity="0.07"
          />
        </svg>
      </div>
{/*  Temp change to reopen PR */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 container mx-auto relative z-10 px-4 py-16 w-full">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Contact Information */}
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
      </div>
    </footer>
  );
};

export default Footer;
