import { useState, useRef, useCallback, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// Globe / DollarSign were only used by the hardcoded menu below — re-import if you uncomment it.
import { Upload, FileText, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import axios from "axios";
import getEnvironment from "../../getenvironment";

// ─── Hardcoded nav (commented out — menu is now fetched from the backend) ─────
/*
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
  { label: "Accomodation", href: "/698c0b48b709cb421cb31421" },
  { label: "How to Reach NITJ?", href: "/698c0b54b709cb421cb3144c" },
];
*/

// ─── Backend item mapping ─────────────────────────────────────────────────────
// Backend item shape: { section, label, linkType, templateId, url, isButton,
//                       order, subItems: [{ label, linkType, templateId, url, order }] }

function resolveHref(item) {
  if (item.linkType === "template") return `/${item.templateId || ""}`;
  return item.url || "#";
}

function mapNavItem(item) {
  return {
    label: item.label,
    href: resolveHref(item),
    isExternal: item.linkType === "external",
    subItems: item.subItems?.length
      ? [...item.subItems]
          .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
          .map((s) => ({
            label: s.label,
            href: resolveHref(s),
            isExternal: s.linkType === "external",
            icon: <FileText className="w-4 h-4" />,
          }))
      : undefined,
  };
}

// ─── Loading skeleton (shown while the menu is fetched) ───────────────────────

function NavSkeleton() {
  return (
    <div className="flex items-center gap-3 animate-pulse" aria-hidden="true">
      {[56, 88, 72, 64, 96, 60, 80].map((w, i) => (
        <span
          key={i}
          className="h-3 rounded-full bg-[#D8E3DD]"
          style={{ width: `${w}px` }}
        />
      ))}
    </div>
  );
}

// ─── Desktop nav font auto-fit ────────────────────────────────────────────────
// Max = the size the nav used before (text-sm = 14px); shrinks until one line.
const NAV_FONT_MAX = 14;
const NAV_FONT_MIN = 9;

export default function Navbar({ confid = "68e9f184413c437a3acccc05" }) {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredGroup, setHoveredGroup] = useState(null);
  const [openGroup, setOpenGroup] = useState(null);
  const closeTimeout = useRef(null);
  const navRef = useRef(null);

  // Backend-driven menu state
  const [loadingNav, setLoadingNav] = useState(true);
  const [navItems, setNavItems] = useState([]);
  const [registerItem, setRegisterItem] = useState(null);
  const [apiUrl, setApiUrl] = useState(null);

  // Delayed close so cursor can travel from trigger to dropdown
  const handleMouseEnter = useCallback((index) => {
    clearTimeout(closeTimeout.current);
    setHoveredGroup(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    closeTimeout.current = setTimeout(() => setHoveredGroup(null), 150);
  }, []);

  // Shrink the desktop nav font (from NAV_FONT_MAX down) until all items fit
  // on a single line. Children are summed instead of using scrollWidth so the
  // absolutely-positioned dropdowns don't skew the measurement.
  const fitNavFont = useCallback(() => {
    const el = navRef.current;
    if (!el) return;
    const fits = () => {
      const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
      const kids = Array.from(el.children);
      const content =
        kids.reduce((sum, k) => sum + k.offsetWidth, 0) +
        gap * Math.max(0, kids.length - 1);
      return content <= el.clientWidth + 1;
    };
    let size = NAV_FONT_MAX;
    el.style.fontSize = `${size}px`;
    while (size > NAV_FONT_MIN && !fits()) {
      size -= 0.5;
      el.style.fontSize = `${size}px`;
    }
  }, []);

  useEffect(() => {
    if (loadingNav) return;
    fitNavFont();
    window.addEventListener("resize", fitNavFont);
    // Re-measure once webfonts (font-jost) have loaded — widths change.
    document.fonts?.ready?.then(fitNavFont);
    return () => window.removeEventListener("resize", fitNavFont);
  }, [loadingNav, navItems, registerItem, fitNavFont]);

  useEffect(() => {
    getEnvironment().then((url) => setApiUrl(url));
  }, []);

  // Fetch the menu from the admin backend.
  useEffect(() => {
    if (!confid || !apiUrl) {
      if (!confid) setLoadingNav(false);
      return;
    }
    let cancelled = false;
    (async () => {
      try {
        const res = await axios.get(
          `${apiUrl}/conferencemodule/navitem/public/${confid}`,
          { withCredentials: true }
        );
        if (cancelled) return;
        const data = res.data;

        const items = data.items || [];
        if (data.navbarMode === "dynamic" && items.length > 0) {
          const regular = items.filter((i) => !i.isButton);
          const buttons = items.filter((i) => i.isButton);
          setNavItems(
            [...regular]
              .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
              .map(mapNavItem)
          );
          if (buttons.length > 0) {
            setRegisterItem({
              label: buttons[0].label,
              href: resolveHref(buttons[0]),
            });
          }
        }
      } catch (err) {
        console.error("Navbar fetch failed:", err);
      } finally {
        if (!cancelled) setLoadingNav(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [confid, apiUrl]);

  const isActive = (to) => to && (pathname === to || pathname.endsWith(to));

  // Font size is inherited from the <nav> element (auto-fit, max 14px).
  const linkBase =
    "group relative inline-flex items-center px-2 py-1 font-medium text-[#1B4332] transition-all hover:text-[#2D6A4F]";

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

        {/* DESKTOP NAV — reduced gap (skeleton while loading) */}
        <nav
          ref={navRef}
          className="hidden lg:flex items-center justify-center gap-1 lg:gap-2 xl:gap-3 flex-grow min-w-0 flex-nowrap ml-6"
          style={{ fontSize: `${NAV_FONT_MAX}px` }}
        >
          {loadingNav ? (
            <NavSkeleton />
          ) : (
            navItems.map((item, index) =>
              item.subItems ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
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

                  {/* Dropdown — pt-2 creates invisible hover bridge instead of mt-2 gap */}
                  <div
                    className={`absolute left-0 top-full pt-2 w-80 transition-all duration-200 ${
                      hoveredGroup === index
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 translate-y-1 pointer-events-none"
                    }`}
                  >
                    <div className="bg-white border border-[#D8E3DD] rounded-lg shadow-md p-2 text-base">
                      {item.subItems.map((sub) => {
                        const subClass = `flex items-center gap-2 px-3 py-2 rounded-md text-[#1B4332] hover:bg-[#E9F5EF] hover:text-[#2D6A4F] ${
                          isActive(sub.href) ? "bg-[#E9F5EF] text-[#2D6A4F]" : ""
                        }`;
                        return sub.isExternal ? (
                          <a
                            key={sub.label}
                            href={sub.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={subClass}
                          >
                            {sub.icon}
                            {sub.label}
                          </a>
                        ) : (
                          <Link key={sub.label} to={sub.href} className={subClass}>
                            {sub.icon}
                            {sub.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : item.isExternal ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkBase}
                >
                  {item.label}
                  <span className="absolute left-2 right-2 -bottom-[2px] h-0.5 bg-[#74C69D] transition-transform origin-left duration-200 scale-x-0 group-hover:scale-x-100" />
                </a>
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
            )
          )}
        </nav>

        {/* RIGHT: BUTTON (only when the backend provides one) */}
        {loadingNav ? (
          <span className="hidden lg:inline-flex h-8 w-28 rounded-md bg-[#D8E3DD] animate-pulse" />
        ) : registerItem ? (
          <a
            href={registerItem.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-1.5 bg-[#2D6A4F] text-white px-4 py-1.5 rounded-md text-[13px] md:text-sm font-semibold hover:bg-[#40916C] transition-all whitespace-nowrap"
          >
            <Upload className="w-3.5 h-3.5" />
            {registerItem.label}
          </a>
        ) : null}

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
          mobileOpen
            ? { height: "auto", opacity: 1 }
            : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3 }}
        className="lg:hidden overflow-hidden border-t border-[#D8E3DD] bg-[#F8FAF9]"
      >
        <nav className="p-3 space-y-1">
          {loadingNav && (
            <div className="space-y-1 animate-pulse" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className="h-9 rounded-md bg-[#D8E3DD]" />
              ))}
            </div>
          )}

          {!loadingNav &&
            navItems.map((item, i) =>
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
                      {item.subItems.map((sub) => {
                        const subClass = `flex items-center gap-2 px-3 py-2 rounded-md text-sm text-[#1B4332] hover:bg-[#E9F5EF] ${
                          isActive(sub.href) ? "bg-[#E9F5EF] text-[#2D6A4F]" : ""
                        }`;
                        return sub.isExternal ? (
                          <a
                            key={sub.label}
                            href={sub.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMobileOpen(false)}
                            className={subClass}
                          >
                            {sub.icon}
                            {sub.label}
                          </a>
                        ) : (
                          <Link
                            key={sub.label}
                            to={sub.href}
                            onClick={() => setMobileOpen(false)}
                            className={subClass}
                          >
                            {sub.icon}
                            {sub.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              ) : item.isExternal ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 rounded-md text-[#1B4332] font-semibold hover:bg-[#E9F5EF]"
                >
                  {item.label}
                </a>
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

          {/* Mobile register/submit button (only when the backend provides one) */}
          {!loadingNav && registerItem && (
            <a
              href={registerItem.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 bg-[#2D6A4F] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#40916C]"
            >
              <Upload className="w-4 h-4" />
              {registerItem.label}
            </a>
          )}
        </nav>
      </motion.div>
    </header>
  );
}
