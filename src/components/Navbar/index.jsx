import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Upload, Globe, Users, FileText, DollarSign, ChevronDown } from "lucide-react";

export default function NavbarGreenTheme() {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);
  const [hoveredGroup, setHoveredGroup] = useState(null);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Tracks", href: "/68adcce8e8f579b7ff663394" },
    { label: "Organising Heads", href: "/68adcccfe8f579b7ff66329a" },
    {
      label: "Committees",
      subItems: [
        { label: "International Advisory Committee", href: "/68adccd5e8f579b7ff6632b6", icon: <Globe className="w-4 h-4" /> },
        { label: "National Advisory Committee", href: "/68adccd9e8f579b7ff6632d8", icon: <Users className="w-4 h-4" /> },
        { label: "Technical Committee", href: "/68adccdee8f579b7ff6632fe", icon: <FileText className="w-4 h-4" /> },
        { label: "Other Committees", href: "/68adcce3e8f579b7ff66332a", icon: <Users className="w-4 h-4" /> },
      ],
    },
    { label: "Paper Submission", href: "/68875b0d959ec9c788fac137" },
    {
      label: "Registration",
      subItems: [
        { label: "Registration Fee", href: "/68adcd02e8f579b7ff663404", icon: <DollarSign className="w-4 h-4" /> },
        { label: "Registration Link", href: "/68adccfce8f579b7ff6633e8", icon: <FileText className="w-4 h-4" /> },
      ],
    },
    { label: "Location", href: "/68adccc0e8f579b7ff66327d" },
  ];

  const isActive = (to) => to && (pathname === to || pathname.endsWith(to));

  const linkBaseDesktop =
    "group relative inline-flex items-center px-3 py-1 text-sm font-medium text-[#1B4332] transition-all hover:text-[#2D6A4F] focus:outline-none";

  return (
    <header className="sticky top-0 z-50 font-jost backdrop-blur-md bg-[#F6F8F5]/95 border-b border-[#D8E3DD] shadow-sm">
      <div className="max-w-[1300px] mx-auto flex items-center justify-between h-16 px-6">
        {/* LEFT SECTION - LOGO + NAV */}
        <div className="flex items-center space-x-10">
          {/* LOGO */}
          <Link to="/" className="text-xl font-bold tracking-wide text-[#1B4332] flex-shrink-0">
            VISTA <span className="text-[#2D6A4F]">2026</span>
          </Link>

          {/* NAV ITEMS */}
          <nav className="hidden md:flex items-center gap-6">
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
                    <ChevronDown className="w-4 h-4 ml-1 text-[#2D6A4F]" />
                    <span className="absolute left-3 right-3 -bottom-1 h-0.5 bg-[#95D5B2] origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
                  </button>

                  {/* Dropdown */}
                  <div
                    className={`absolute left-0 top-full mt-0 w-56 rounded-lg bg-white border border-[#D8E3DD] shadow-md p-2 transition-all duration-200 ${
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
                          isActive(s.href) ? "bg-[#E9F5EF] text-[#2D6A4F]" : ""
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

        {/* RIGHT SECTION - BUTTON */}
        <Link
          to="/68adccc0e8f579b7ff66327d"
          className="hidden md:inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-jost text-white bg-[#2D6A4F] rounded-lg hover:bg-[#40916C] transition-all duration-300"
        >
          <Upload className="w-4 h-4" />
          Submit Paper
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-[#1B4332] hover:bg-[#E9F5EF] rounded-md"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#D8E3DD] bg-[#F6F8F5]/95">
          <nav className="mx-4 my-3 rounded-2xl border border-[#D8E3DD] p-2 space-y-1 shadow-sm">
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
                            isActive(s.href) ? "bg-[#E9F5EF] text-[#2D6A4F]" : ""
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
                    isActive(it.href) ? "bg-[#E9F5EF] text-[#2D6A4F]" : ""
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
        </div>
      )}
    </header>
  );
}
