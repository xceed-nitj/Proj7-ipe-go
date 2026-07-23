import axios from "axios";
import getEnvironment from "../getenvironment";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// --- Publication Opportunities Component ---
function PublicationOpportunities({ confid }) {
  const [apiUrl, setApiUrl] = useState(null);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer
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
      initial={{ opacity: 0, x: 150 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full flex flex-col items-center justify-center py-1 px-1 md:px-12 rounded-xl overflow-hidden"
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.15, duration: 0.4, ease: "easeOut" }}
        className="text-center mb-10 relative w-full"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#2D6A4F] relative pb-3">
          Publication <span className="text-[#1B4332]">Opportunities</span>
          <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-20 h-[3px] bg-[#95D5B2] rounded-full"></span>
        </h2>
      </motion.div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-4xl bg-white rounded-3xl shadow-lg border border-[#E0EDE4] overflow-hidden p-6 md:p-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-[#1B4332] leading-relaxed text-left sm:text-justify"
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
                  // change this index to the publications entry
                  __html: data.about[3]?.description || "",
                }}
              />
            )
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default PublicationOpportunities;