import axios from "axios";
import getEnvironment from "../getenvironment";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const sliderData = [
  { image: "/glo1.jpg", label: " " },
  { image: "/glo2.jpg", label: " " },
  { image: "/glo3.jpg", label: " " },
  { image: "/glo4.jpg", label: " " },
];

// --- Slider Component ---
function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY * 0.3);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 1 }}
      className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-2xl overflow-hidden shadow-md"
    >
      {sliderData.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-center bg-cover transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            transform: `translateY(${offsetY * 0.1}px)`,
            willChange: "transform",
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-[#2D6A4F]/70 to-transparent" />
    </motion.div>
  );
}

// --- About Conference Component ---
function AboutConf({ confid }) {
  const [apiUrl, setApiUrl] = useState(null);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer to trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Fetch environment URL
  useEffect(() => {
    getEnvironment().then((url) => setApiUrl(url));
  }, []);

  // Fetch conference data
  useEffect(() => {
    if (apiUrl) {
      setIsLoading(true);
      axios
        .get(`${apiUrl}/conferencemodule/home/conf/${confid}`, {
          withCredentials: true,
        })
        .then((res) => {
          setData(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setIsLoading(false);
        });
    }
  }, [apiUrl, confid]);

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, x: 200 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="w-full bg- flex flex-col items-center justify-center py-1 px-1 md:px-12 rounded-xl overflow-hidden"
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        className="text-center mb-12 relative w-full"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#2D6A4F] relative pb-3">
          About <span className="text-[#1B4332]">GLOGIFT 2026</span>
          <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-20 h-[3px] bg-[#95D5B2] rounded-full"></span>
        </h2>
      </motion.div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
        className="w-full max-w-7xl bg-white rounded-3xl shadow-lg border border-[#E0EDE4] overflow-hidden p-1 md:p-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10 items-center">
          {/* Slider */}
          <div className="order-1 lg:order-1 lg:col-span-2 w-full mb-6 lg:mb-0">
            <Slider />
          </div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 1 }}
            className="order-2 lg:order-2 lg:col-span-3 text-[#1B4332] leading-relaxed text-justify"
          >
            {isLoading ? (
              <div className="animate-pulse space-y-4">
                <div className="h-4 bg-[#E0EDE4] rounded w-3/4"></div>
                <div className="h-4 bg-[#E0EDE4] rounded w-5/6"></div>
                <div className="h-4 bg-[#E0EDE4] rounded w-2/3"></div>
                <div className="h-4 bg-[#E0EDE4] rounded w-3/5"></div>
              </div>
            ) : (
              data && (
                <div
                  className="about-content text-base md:text-lg font-normal"
                  dangerouslySetInnerHTML={{
                    __html: data.about[0]?.description || "",
                  }}
                />
              )
            )}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default AboutConf;
