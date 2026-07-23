import axios from "axios";
import getEnvironment from "../getenvironment";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const FALLBACK_HTML =
  "<p>Publication details for this conference will be announced shortly. Please check back for the list of partner journals, submission guidelines and important dates.</p>";

function PublicationOpportunities({ confid, sectionIndex = 4 }) {
  const [apiUrl, setApiUrl] = useState(null);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getEnvironment().then((url) => setApiUrl(url));
  }, []);

  useEffect(() => {
    if (!apiUrl) return undefined;

    let cancelled = false;
    setIsLoading(true);

    axios
      .get(`${apiUrl}/conferencemodule/home/conf/${confid}`, {
        withCredentials: true,
      })
      .then((res) => {
        if (!cancelled) setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [apiUrl, confid]);

  const description = data?.about?.[sectionIndex]?.description;

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-full flex flex-col justify-center items-center py-1 px-1 overflow-hidden rounded-xl"
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15 }}
        viewport={{ once: true }}
        className="text-center mb-8 relative z-10"
      >
        <h2 className="text-[#1B4332] text-2xl sm:text-3xl font-bold font-oswald tracking-wide leading-tight drop-shadow-md">
          Publication Opportunities
        </h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="w-28 h-[4px] bg-gradient-to-r from-[#2D6A4F] to-[#1B4332] mx-auto mt-4 rounded-full origin-left"
        />
      </motion.div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.25 }}
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-4xl bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl p-6 sm:p-8 lg:p-12 transition-all duration-700 ease-out"
      >
        <div className="text-[#1B4332] text-base sm:text-lg leading-relaxed text-left sm:text-justify">
          {isLoading ? (
            <div className="animate-pulse space-y-4">
              <div className="h-4 bg-[#95D5B2] rounded w-3/4"></div>
              <div className="h-4 bg-[#95D5B2] rounded w-5/6"></div>
              <div className="h-4 bg-[#95D5B2] rounded w-2/3"></div>
              <div className="h-4 bg-[#95D5B2] rounded w-4/5"></div>
            </div>
          ) : (
            <div
              className="about-content space-y-3 leading-7"
              dangerouslySetInnerHTML={{
                __html: description || FALLBACK_HTML,
              }}
            />
          )}
        </div>
      </motion.div>

      {/* Subtle Bottom Glow */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[70%] h-64 bg-gradient-to-t from-[#52B788]/40 to-transparent blur-3xl pointer-events-none"></div>
    </motion.section>
  );
}

export default PublicationOpportunities;