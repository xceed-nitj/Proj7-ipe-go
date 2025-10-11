import axios from "axios";
import getEnvironment from "../getenvironment";
import { useState, useEffect, useRef } from "react";

const sliderData = [
  { image: "/img1.jpg", label: " " },
  { image: "/slider4.jpg", label: " " },
  { image: "/img3.jpg", label: " " },
  { image: "/slider2.jpg", label: " " },
];

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
    <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-md">
      {sliderData.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-center bg-cover transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            transform: `translateY(${offsetY * 0.1}px)`, // subtle parallax shift
            willChange: "transform",
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-[#2D6A4F]/70 to-transparent" />
    </div>
  );
}

function AboutConf({ confid }) {
  const [apiUrl, setApiUrl] = useState(null);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Scroll animation trigger
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

  // Fetch environment + data
  useEffect(() => {
    getEnvironment().then((url) => setApiUrl(url));
  }, []);

  useEffect(() => {
    if (apiUrl) {
      setIsLoading(true);
      axios
        .get(`${apiUrl}/conferencemodule/home/conf/${confid}`, {
          withCredentials: true,
        })
        .then((res) => {
          console.log("API response:", res.data);
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
    <div
      ref={sectionRef}
      className={`min-h-screen w-full bg-[#D9E0DE] flex flex-col items-center justify-center py-6 px-6 md:px-12 rounded-xl transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2D6A4F] relative pb-3">
          About <span className="text-[#1B4332]">GLOGIFT 2026</span>
          <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-20 h-[3px] bg-[#95D5B2] rounded-full"></span>
        </h2>
      </div>

      {/* Card Container */}
      <div className="w-full max-w-7xl bg-white rounded-3xl shadow-lg border border-[#E0EDE4] overflow-hidden p-6 md:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          {/* Image Slider */}
          <div className="lg:col-span-2">
            <Slider />
          </div>

          {/* About Text */}
          <div className="lg:col-span-3 text-[#1B4332] leading-relaxed text-justify">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutConf;
