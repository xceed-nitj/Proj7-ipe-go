import axios from "axios";
import getEnvironment from "../getenvironment";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sliderData = [
  { image: "/ece1.jpeg", label: "" },
  { image: "/ece2.png", label: "" },
  { image: "/ece3.png", label: "" },
];

// --- Image Slider Component ---
function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, rotateY: 15, scale: 0.9 }}
      whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative h-[350px] w-full rounded-3xl overflow-hidden shadow-lg border border-[#E5E9E7] hover:scale-[1.03] transition-transform duration-700 ease-in-out"
    >
      {sliderData.map((slide, index) => (
        <motion.div
          key={index}
          animate={{
            opacity: index === currentSlide ? 1 : 0,
            scale: index === currentSlide ? 1 : 1.05,
          }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
    </motion.div>
  );
}

// --- About Department Component ---
function AboutDept({ confid }) {
  const [apiUrl, setApiUrl] = useState(null);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
    <section className="relative w-full h-screen bg-[#DEE3E1] flex flex-col justify-center items-center py-12 px-6 sm:px-12 overflow-hidden rounded-xl">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-10 relative z-10"
      >
        <h2 className="text-[#315C4D] text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide">
          About the Department of Industrial and Production Engineering
        </h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-24 h-[3px] bg-[#4CAF80] mx-auto mt-3 rounded-full origin-left"
        ></motion.div>
      </motion.div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-7xl bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] p-8 lg:p-12 h-[75vh] overflow-hidden"
      >
        {/* Left: Slider */}
        <div className="lg:col-span-2 flex items-center justify-center">
          <Slider />
        </div>

        {/* Right: Scrollable Text */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="lg:col-span-3 text-[#1E2B23] text-base sm:text-lg leading-relaxed text-justify overflow-auto pr-2 scrollbar-thin scrollbar-thumb-[#A9CBB7] scrollbar-track-transparent"
        >
          {isLoading ? (
            <div className="animate-pulse space-y-4">
              <div className="h-4 bg-[#C9D7D0] rounded w-3/4"></div>
              <div className="h-4 bg-[#C9D7D0] rounded w-5/6"></div>
              <div className="h-4 bg-[#C9D7D0] rounded w-2/3"></div>
              <div className="h-4 bg-[#C9D7D0] rounded w-4/5"></div>
            </div>
          ) : (
            data && (
              <div
                className="about-content space-y-4 leading-8 text-justify"
                dangerouslySetInnerHTML={{
                  __html: (data.about[2]?.description || "")
                    .replace(/\n/g, "<br />")
                    .replace(/\s{2,}/g, " "),
                }}
              />
            )
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default AboutDept;
