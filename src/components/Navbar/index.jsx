import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Upload,
  Globe,
  FileText,
  DollarSign,
  ChevronDown,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredGroup, setHoveredGroup] = useState(null);
  const [openGroup, setOpenGroup] = useState(null);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Tracks", href: "/68e9f44c413c437a3acccdad" },
    { label: "Important Dates", href: "/dates" },
    { label: "Organising Heads", href: "/68e9f2ca413c437a3acccceb" },
    {
      label: "Committees",
      subItems: [
        {
          label: "Advisory Committee",
          href: "/68e9f2c0413c437a3accccb6",
          icon: <Globe className="w-4 h-4" />,
        },
        {
          label: "Technical Committee",
          href: "/68e9f498413c437a3accce4d",
          icon: <FileText className="w-4 h-4" />,
        },
      ],
    },
    { label: "Paper Submission", href: "/68e9f4cf413c437a3accce8f" },
    {
      label: "Registration",
      subItems: [
        {
          label: "Registration Fee",
          href: "/68e9f4e9413c437a3accceb0",
          icon: <DollarSign className="w-4 h-4" />,
        },
        {
          label: "Registration Link",
          href: "/68e9f4fa413c437a3accced1",
          icon: <FileText className="w-4 h-4" />,
        },
      ],
    },
    { label: "How to Reach NITJ?", href: "/68e9f507413c437a3acccef3" },
  ];

  const isActive = (to) => to && (pathname === to || pathname.endsWith(to));

  const linkBase =
    "group relative inline-flex items-center px-2 md:px-3 py-1 text-[13px] md:text-sm font-medium text-[#1B4332] transition-all hover:text-[#2D6A4F]";

  return (
    <header className="sticky top-0 z-50 bg-[#F8FAF9] border-b border-[#D8E3DD] shadow-sm font-jost backdrop-blur-md">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between h-[60px] px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 whitespace-nowrap">
        {/* LEFT: LOGO */}
        <Link
          to="/"
          className="text-lg sm:text-xl md:text-2xl font-bold text-[#1B4332] whitespace-nowrap"
        >
          GLOGIFT <span className="text-[#2D6A4F]">2026</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center justify-center gap-3 md:gap-4 lg:gap-5 xl:gap-6 flex-grow ml-6">
          {navItems.map((item, index) =>
            item.subItems ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setHoveredGroup(index)}
                onMouseLeave={() => setHoveredGroup(null)}
              >
                <button type="button" className={linkBase}>
                  {item.label}
                  <ChevronDown className="w-3.5 h-3.5 ml-1 text-[#2D6A4F]" />
                  <span
                    className={`absolute left-2 right-2 -bottom-[2px] h-0.5 bg-[#74C69D] transition-transform origin-left duration-200 ${
                      hoveredGroup === index ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </button>

                {/* Dropdown */}
                <div
                  className={`absolute left-0 top-full mt-2 w-80 bg-white border border-[#D8E3DD] rounded-lg shadow-md p-2 transition-all duration-200 ${
                    hoveredGroup === index
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 translate-y-1 pointer-events-none"
                  }`}
                >
                  {item.subItems.map((sub) => (
                    <Link
                      key={sub.label}
                      to={sub.href}
                      className={`flex items-center gap-2 px-3 py-2 rounded-md text-[#1B4332] hover:bg-[#E9F5EF] hover:text-[#2D6A4F] ${
                        isActive(sub.href) ? "bg-[#E9F5EF] text-[#2D6A4F]" : ""
                      }`}
                    >
                      {sub.icon}
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.label} to={item.href} className={linkBase}>
                {item.label}
                <span
                  className={`absolute left-2 right-2 -bottom-[2px] h-0.5 bg-[#74C69D] transition-transform origin-left duration-200 ${
                    isActive(item.href)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            )
          )}
        </nav>

        {/* RIGHT: BUTTON */}
        <Link
          to="https://cmt3.research.microsoft.com/GLOGIFT2026"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-1.5 bg-[#2D6A4F] text-white px-4 py-1.5 rounded-md text-[13px] md:text-sm font-semibold hover:bg-[#40916C] transition-all whitespace-nowrap"
        >
          <Upload className="w-3.5 h-3.5" />
          Submit Paper
        </Link>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-[#1B4332] hover:bg-[#E9F5EF] rounded-md"
        >
          {mobileOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          mobileOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3 }}
        className="lg:hidden overflow-hidden border-t border-[#D8E3DD] bg-[#F8FAF9]"
      >
        <nav className="p-3 space-y-1">
          {navItems.map((item, i) =>
            item.subItems ? (
              <div key={item.label}>
                <button
                  onClick={() => setOpenGroup(openGroup === i ? null : i)}
                  className="w-full flex justify-between items-center px-3 py-2 text-[#1B4332] font-semibold rounded-md hover:bg-[#E9F5EF]"
                >
                  {item.label}
                  <ChevronDown
                    className={`w-4 h-4 text-[#2D6A4F] transition-transform ${
                      openGroup === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openGroup === i && (
                  <div className="ml-3 mt-1 space-y-1">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm text-[#1B4332] hover:bg-[#E9F5EF] ${
                          isActive(sub.href) ? "bg-[#E9F5EF] text-[#2D6A4F]" : ""
                        }`}
                      >
                        {sub.icon}
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2 rounded-md text-[#1B4332] font-semibold hover:bg-[#E9F5EF] ${
                  isActive(item.href) ? "bg-[#E9F5EF] text-[#2D6A4F]" : ""
                }`}
              >
                {item.label}
              </Link>
            )
          )}

          <Link
            to="https://cmt3.research.microsoft.com/GLOGIFT2026"
            onClick={() => setMobileOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 bg-[#2D6A4F] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#40916C]"
          >
            <Upload className="w-4 h-4" />
            Submit Paper
          </Link>
        </nav>
      </motion.div>
    </header>
  );
}
