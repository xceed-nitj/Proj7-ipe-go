import { useEffect, useState, useRef } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import getEnvironment from "../getenvironment";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const sliderData = [
  {
    image: "/new_slider7.jpg",
    label:
      "NITJ has been ranked in the 2025 THE (Times Higher Education) Asia University Rankings in the ranking band of 351-400",
  },
  {
    image: "/new_slider2.jpg",
    label:
      "NITJ Ranked 58th in Engineering Category and Rank-Band: 101-150 in Overall Ranking of NIRF Ranking, 2024",
  },
  {
    image: "/new_slider1.jpg",
    label:
      "NITJ Placed in ranking band of 661-680 amongst Asian Universities",
  },
];

const COLOR_BG_NEWS = "#f9f6f2";
const COLOR_BORDER_R = "#713F12";
// const COLOR_CARD_BG = "#f5eee6";
// const COLOR_CARD_BORDER = "#bfa77a";
// const COLOR_CARD_TITLE = "#6b4f2c";
// const COLOR_CARD_ACCENT = "#bfa77a";
// const COLOR_CARD_NEW_BG = "#f6e7c1";
// const COLOR_CARD_NEW_TEXT = "#bfa77a";
// const COLOR_CARD_DESC = "#6b4f2c";
// const COLOR_CARD_LINK = "#bfa77a";
// const COLOR_CARD_LINK_HOVER = "#6b4f2c";
const COLOR_LOGO_BG = "#1a1307";

function Slider(props) {
  const confid = props.confid;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [apiUrl, setApiUrl] = useState(null);
  const [newsData, setNewsData] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    getEnvironment().then((url) => setApiUrl(url));
  }, []);

  useEffect(() => {
    if (!confid || !apiUrl) {
      console.warn("Missing confid or apiUrl", { confid, apiUrl });
      return;
    }
    console.log("Sending GET request to:", `${apiUrl}/conferencemodule/announcements/conf/${confid}`);
    axios
      .get(`${apiUrl}/conferencemodule/announcements/conf/${confid}`, {
        withCredentials: true,
      })
      .then((res) => {
        const sortedData = res.data.sort((a, b) => a.sequence - b.sequence);
        setNewsData(sortedData);
        console.log("Fetched news data:");
        console.log("Fetched news data:", sortedData);
      })
      .catch((err) => {
        console.error("API error:", err);
        setNewsData([]); // Optionally clear on error
      });
  }, [apiUrl, confid]);
  console.log("apiUrl:", apiUrl);
  

  useEffect(() => {
    if (!newsData.length) return;
    const container = scrollRef.current;
    let reqId;
    const scrollAmount = 0.5;

    function animate() {
      if (container) {
        container.scrollLeft += scrollAmount;
        if (
          container.scrollLeft + container.offsetWidth >=
          container.scrollWidth
        ) {
          container.scrollLeft = 0;
        }
      }
      reqId = requestAnimationFrame(animate);
    }

    reqId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(reqId);
  }, [newsData]);

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Top Slider */}
      <div
        className="relative w-full h-[70vh]"
        style={{ position: "relative" }}
      >
        <div className="absolute inset-0 z-0">
  {sliderData.map((slide, index) => (
    <div
      key={index}
      className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
        index === currentSlide ? "opacity-100 z-10" : "opacity-0"
      }`}
      style={{
        backgroundImage: `url('${slide.image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transition: "opacity 1s ease-in-out",
      }}
    />
  ))}
</div>
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black/60 to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black/60 to-transparent"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/20 to-transparent z-10"></div>
        <div
          className="absolute top-1/2 left-0 transform -translate-y-1/2"
          style={{
            width: "100%",
            display: "flex",
            alignItems: "flex-start",
            pointerEvents: "none",
            zIndex: 20,
          }}
        >
          <div className="pl-8 sm:pl-16 md:pl-24 lg:pl-32 max-w-4xl pointer-events-auto text-left">
            <div className="mb-2">
              <span
                className="text-white text-3xl sm:text-4xl md:text-4xl lg:text-5xl px-4 py-2 rounded shadow-lg block"
                style={{
                  fontFamily: "Playfair",
                  fontWeight: 300,
                  lineHeight: 1.2,
                }}
              >
                International Conference on Intelligent Processing, Hardware,
                Electronics, and Radio Systems
              </span>
            </div>
            <div>
              <span
                className="text-white text-lg sm:text-xl md:text-2xl lg:text-2xl px-4 py-1 rounded block"
                style={{
                  fontFamily: "sans-serif",
                  fontWeight: 300,
                  letterSpacing: "0.01em",
                }}
              >
                February 13-15, 2026 &nbsp;|&nbsp; NIT Jalandhar
              </span>
            </div>
            <div className="mt-6 flex items-center pl-4">
              <a
                href=  "/6863b4da7b0acf10390f6b41"
                className="inline-block bg-white hover:bg-amber-100 text-amber-900 text-base font-semibold px-8 py-2 rounded-sm shadow-md transition duration-200 border border-black-700"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                  textDecoration: "none",
                }}
              >
                Register
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* News & Logo Section */}
      <div className="grid grid-cols-1 lg:grid-cols-5 w-full h-[10vh]">
        {/* News */}
        <div
          className="lg:col-span-3 p-6 border-r"
          style={{
            background: COLOR_BG_NEWS,
            borderRightColor: COLOR_BORDER_R,
            borderRightWidth: "1px",
          }}
        >
          {/* News card buttons, small and in a single row */}
         {/* News card buttons – now an auto-fitting grid */}
<div
  className="grid gap-3 items-center"
  style={{
    /* creates as many columns as fit:
       - can shrink to 90 px on tiny phones
       - prefers 200 px
       - never grows past 260 px                         */
    gridTemplateColumns:
      "repeat(auto-fit, minmax(clamp(90px, 200px, 260px), 1fr))",
    height: "calc(20vh - 48px)",
    maxHeight: "20vh",
  }}
>
  {(newsData.length ? newsData : [1, 2, 3, 4, 5]).map((item, idx) =>
    newsData.length ? (
      !item.hidden && (
        <a
          key={item._id}
          href={item.link || `/news/${item._id}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <button
            type="button"
            className="relative w-full px-4 py-1 rounded-full font-semibold text-sm transition-all duration-300 bg-[#854D0E] hover:shadow-xl hover:-translate-y-1 whitespace-nowrap border-2"
            style={{ borderColor: "COLOR_BORDER_R", color: "#fff" }}
          >
            <span className="block overflow-hidden text-ellipsis leading-relaxed">
              {item.title.length > 35 ? `${item.title.slice(0, 32)}…` : item.title}
            </span>

            {/* external-link icon */}
            <img
              src="/external-link.png"
              alt=""
              style={{
                position: "absolute",
                top: 12,
                right: 14,
                width: 14,
                height: 14,
                opacity: 0.85,
                filter: "brightness(0) invert(1)",
              }}
            />
          </button>
        </a>
      )
    ) : (
      /* grey ghost while loading / empty */
      <div
        key={`ph-${idx}`}
        className="w-full px-4 py-1 rounded-full animate-pulse bg-[#3d2b1f] border-2"
        style={{ borderColor: "rgb(231,166,45)", opacity: 0.15, minHeight: 32 }}
      />
    )
  )}
</div>

        </div>

        {/* Logo */}
        <div
  className="lg:col-span-2 p-4 flex items-center justify-center"
  style={{ background: COLOR_LOGO_BG }}
>
<div
  className="lg:col-span-2  flex items-center justify-center"
  style={{ background: COLOR_LOGO_BG }}
>
  <div className="grid grid-cols-5 gap-4 items-center w-full max-w-5xl">
    {/* Logo Column */}
    <div className="flex justify-center col-span-1">
      <img
        src="/nitjlogo.png"
        alt="NITJ Logo"
        className="max-w-20 max-h-16 object-contain"
      />
    </div>

    {/* Text Column spanning columns 2 to 5 */}
    <div className="col-span-4 flex items-center">
      <p
        className="text-white text-sm sm:text-base font-light leading-snug text-left"
        style={{
          fontFamily: "'Montserrat', sans-serif",
          letterSpacing: "0.01em",
        }}
      >
        Organised by the Department of Electronics and Communication Engineering, NIT Jalandhar
      </p>
    </div>
  </div>
</div>

</div>

      </div>
    </div>
  );
}

export default Slider;
