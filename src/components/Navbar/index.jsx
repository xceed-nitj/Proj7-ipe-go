import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Upload,
  Globe,
  Users,
  FileText,
  DollarSign,
  ChevronDown,
} from "lucide-react";
import { motion } from "framer-motion";

export default function NavbarGreenTheme() {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);
  const [hoveredGroup, setHoveredGroup] = useState(null);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Tracks", href: "/68e9f44c413c437a3acccdad" },
    { label: "Organising Heads", href: "/68e9f2ca413c437a3acccceb" },
    {
      label: "Committees",
      subItems: [
        {
          label: "International Advisory Committee",
          href: "/68e9f2c0413c437a3accccb6",
          icon: <Globe className="w-4 h-4" />,
        },
        {
          label: "National Advisory Committee",
          href: "/68e9f481413c437a3accce2b",
          icon: <Users className="w-4 h-4" />,
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
    { label: "Location", href: "/68e9f507413c437a3acccef3" },
  ];

  const isActive = (to) => to && (pathname === to || pathname.endsWith(to));

  const linkBaseDesktop =
    "group relative inline-flex items-center px-3 py-1 text-sm font-medium text-[#1B4332] transition-all hover:text-[#2D6A4F] focus:outline-none";

  return (
    <header className="sticky top-0 z-50 font-jost backdrop-blur-md bg-[#F6F8F5]/95 border-b border-[#D8E3DD] shadow-sm">
      <div className="max-w-[1300px] mx-auto flex items-center justify-between h-14 px-3 sm:px-6 md:px-8">
        {/* LEFT SECTION - LOGO + NAV */}
        <div className="flex items-center space-x-3 sm:space-x-6">
          {/* LOGO */}
          <Link
            to="/"
            className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide text-[#1B4332] flex-shrink-0 whitespace-nowrap"
          >
            GLOGIFT <span className="text-[#2D6A4F]">2026</span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden mobile:hidden lg:flex items-center gap-2 sm:gap-4 flex-wrap">
            {navItems.map((it, index) =>
              it.subItems ? (
                <div
                  key={it.label}
                  className="relative"
                  onMouseEnter={() => setHoveredGroup(index)}
                  onMouseLeave={() => setHoveredGroup(null)}
                >
                  <button className={linkBaseDesktop} type="button">
                    {it.label}
                    <ChevronDown className="w-4 h-2 ml-1 text-[#2D6A4F]" />
                    <span className="absolute left-3 right-3 -bottom-1 h-0.5 bg-[#95D5B2] origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
                  </button>

                  {/* Dropdown */}
                  <div
                    className={`absolute left-0 top-full mt-2 w-56 rounded-lg bg-white border border-[#D8E3DD] shadow-md p-2 transition-all duration-200 ${
                      hoveredGroup === index
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 translate-y-1 pointer-events-none"
                    }`}
                  >
                    {it.subItems.map((s) => (
                      <Link
                        key={s.label}
                        to={s.href}
                        className={`flex items-center gap-2 px-3 py-2 rounded-md text-[#1B4332] hover:bg-[#E9F5EF] hover:text-[#2D6A4F] ${
                          isActive(s.href)
                            ? "bg-[#E9F5EF] text-[#2D6A4F]"
                            : ""
                        }`}
                      >
                        {s.icon}
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={it.label} to={it.href || "/"} className={linkBaseDesktop}>
                  {it.label}
                  <span
                    className={`absolute left-3 right-3 -bottom-1 h-0.5 bg-[#95D5B2] rounded-full origin-left transition-transform duration-200 ${
                      isActive(it.href)
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              )
            )}
          </nav>
        </div>

        {/* RIGHT SECTION - DESKTOP BUTTON */}
        <Link
          to="/68adccc0e8f579b7ff66327d"
          className="hidden mobile:hidden lg:inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-jost text-white bg-[#2D6A4F] rounded-lg hover:bg-[#40916C] transition-all duration-300"
        >
          <Upload className="w-4 h-4" />
          Submit Paper
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="mobile:inline-flex lg:hidden p-2 text-[#1B4332] hover:bg-[#E9F5EF] rounded-md"
        >
          {mobileOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
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
        animate={mobileOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="lg:hidden overflow-hidden border-t border-[#D8E3DD] bg-[#F6F8F5]/95"
      >
        <nav className="mx-3 my-3 rounded-2xl border border-[#D8E3DD] p-2 space-y-1 shadow-sm">
          {navItems.map((it, i) =>
            it.subItems ? (
              <div key={it.label} className="rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenGroup(openGroup === i ? null : i)}
                  className="w-full flex items-center justify-between px-3 py-2 text-left rounded-xl text-[#1B4332] hover:bg-[#E9F5EF]"
                >
                  <span className="text-sm font-semibold">{it.label}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-[#2D6A4F] transition-transform ${
                      openGroup === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openGroup === i && (
                  <div className="pb-1">
                    {it.subItems.map((s) => (
                      <Link
                        key={s.label}
                        to={s.href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center gap-2 mx-2 my-1 px-3 py-2 rounded-lg text-sm text-[#1B4332] hover:bg-[#E9F5EF] hover:text-[#2D6A4F] ${
                          isActive(s.href)
                            ? "bg-[#E9F5EF] text-[#2D6A4F]"
                            : ""
                        }`}
                      >
                        {s.icon}
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={it.label}
                to={it.href || "/"}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2 rounded-xl text-sm font-semibold text-[#1B4332] hover:bg-[#E9F5EF] hover:text-[#2D6A4F] ${
                  isActive(it.href)
                    ? "bg-[#E9F5EF] text-[#2D6A4F]"
                    : ""
                }`}
              >
                {it.label}
              </Link>
            )
          )}

          <Link
            to="/68adccc0e8f579b7ff66327d"
            onClick={() => setMobileOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#2D6A4F] rounded-full hover:bg-[#40916C] transition-all duration-300"
          >
            <Upload className="w-4 h-4" />
            Submit Paper
          </Link>
        </nav>
      </motion.div>
    </header>
  );
}
