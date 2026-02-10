import axios from "axios";
import getEnvironment from "../getenvironment";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sliderData = [
  { image: "/ipe4.jpg", label: "" },
  { image: "/ipe2.jpg", label: "" },
  { image: "/ipe3.jpg", label: "" },
  { image: "/ipe1.jpg", label: "" },

];

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[250px] sm:h-[350px] lg:h-[400px] w-full rounded-3xl overflow-hidden shadow-xl border border-white/20 transition-transform duration-700 hover:scale-[1.03]">
      {sliderData.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-center bg-cover transition-all duration-[1500ms] ease-in-out ${
            index === currentSlide
              ? "opacity-100 scale-100 z-10"
              : "opacity-0 scale-105 z-0"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
    </div>
  );
}

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
    <motion.section
      initial={{ opacity: 0, x: -120 }} // <-- changed to negative for left
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-full flex flex-col justify-center items-center py-1 px-1 overflow-hidden rounded-xl "
    >
      <motion.div
        initial={{ opacity: 0, x: -80 }} // <-- changed to negative
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center mb-8 relative z-10"
      >
         <h2 className="text-[#1B4332] text-2xl sm:text-3xl  font-bold font-oswald tracking-wide leading-tight drop-shadow-md">
          <span className="block"></span>
          <span className="block text-[#2D6A4F] mt-2">
            Department of Industrial and Production Engineering
          </span>
          <span className="block text-[#081C15]">Jalandhar</span>
        </h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="w-28 h-[4px] bg-gradient-to-r from-[#2D6A4F] to-[#1B4332] mx-auto mt-4 rounded-full origin-left"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }} // <-- changed to negative
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
        className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-7xl bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl p-6 sm:p-8 lg:p-12 transition-all duration-700 ease-out"
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4 }}
          viewport={{ once: true }}
          className="lg:col-span-2 order-1 lg:order-2 flex items-center justify-center"
        >
          <Slider />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="lg:col-span-3 order-2 lg:order-1 text-[#1B4332] text-base sm:text-lg leading-relaxed text-justify"
        >
          {isLoading ? (
            <div className="animate-pulse space-y-4">
              <div className="h-4 bg-[#95D5B2] rounded w-3/4"></div>
              <div className="h-4 bg-[#95D5B2] rounded w-5/6"></div>
              <div className="h-4 bg-[#95D5B2] rounded w-2/3"></div>
              <div className="h-4 bg-[#95D5B2] rounded w-4/5"></div>
            </div>
          ) : (
            data && (
              <div
                className="about-content space-y-3 leading-7"
                dangerouslySetInnerHTML={{
                  __html:
                    data.about[2]?.description ||
                    "The Department of Electronics and Communication Engineering at NIT Jalandhar focuses on excellence in education, research, and innovation. It offers undergraduate, postgraduate, and doctoral programs with state-of-the-art facilities, experienced faculty, and industry collaborations. The department aims to develop skilled engineers and researchers who can contribute to technological advancements at national and global levels.",
                }}
              />
            )
          )}
        </motion.div>
      </motion.div>

      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[70%] h-64 bg-gradient-to-t from-[#52B788]/40 to-transparent blur-3xl pointer-events-none"></div>
    </motion.section>
  );
}

export default AboutDept;
