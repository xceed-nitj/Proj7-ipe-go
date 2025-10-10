// src/components/Timeline.jsx

import axios from "axios";
import getEnvironment from "../getenvironment";
import { useState, useEffect, forwardRef } from "react";
import formatDate from "../utility/formatDate";
import { motion } from "framer-motion";

const Timeline = forwardRef((props, ref) => {
  const { confid } = props;
  const [datesData, setDatesData] = useState([]);
  const [apiUrl, setApiUrl] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    getEnvironment().then((url) => setApiUrl(url));
  }, []);

  useEffect(() => {
    if (!apiUrl) return;

    axios
      .get(`${apiUrl}/conferencemodule/eventDates/conference/${confid}`, {
        withCredentials: true,
      })
      .then((res) => setDatesData(res.data))
      .catch((err) => console.error(err));
  }, [apiUrl, confid]);

  // Color scheme for timeline items
  const colorSchemes = [
    { bg: 'bg-cyan-400', icon: 'text-white', gradient: 'from-cyan-400 to-cyan-500' },
    { bg: 'bg-yellow-400', icon: 'text-gray-800', gradient: 'from-yellow-400 to-yellow-500' },
    { bg: 'bg-green-400', icon: 'text-white', gradient: 'from-green-400 to-green-500' },
    { bg: 'bg-orange-400', icon: 'text-white', gradient: 'from-orange-400 to-orange-500' },
    { bg: 'bg-blue-400', icon: 'text-white', gradient: 'from-blue-400 to-blue-500' },
  ];

  // Icon components for different timeline items
  const getIcon = (index) => {
    const icons = [
      // Lightbulb for IDEAS
      <svg key="lightbulb" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/>
      </svg>,
      // Document for STRATEGY
      <svg key="document" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
        <path d="M8 12h8v2H8zm0 3h8v2H8zm0-6h5v2H8z"/>
      </svg>,
      // Chart for PITCH
      <svg key="chart" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-5h2v3h5v2zm3-4h-2V7h-2v2h-2V7H9v6H7V7c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v6z"/>
      </svg>,
      // People for CONTACT
      <svg key="people" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.5 7h-5A1.5 1.5 0 0 0 12.04 8.37L9.5 16H12v6h8zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-6H10l-2.54-7.63A1.5 1.5 0 0 0 6 7H1a1.5 1.5 0 0 0-1.46 1.37L-3 16h2.5v6h8z"/>
      </svg>,
      // Handshake for NEGOTIATE
      <svg key="handshake" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.5 12c0-.28-.22-.5-.5-.5s-.5.22-.5.5.22.5.5.5.5-.22.5-.5zm-3-4c0-.28-.22-.5-.5-.5s-.5.22-.5.5.22.5.5.5.5-.22.5-.5zM23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-10 2.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    ];
    
    return icons[index % icons.length];
  };

  return (
    <motion.div
      ref={ref}
      className="relative section-spacing py-10  sm:py-16 md:py-24 w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="w-full mx-auto px-4 sm:px-6 relative z-10">
        {/* Title Section */}
        <motion.div 
          className="text-center mb-8 sm:mb-12 md:mb-20"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2 sm:mb-3 relative inline-block">
              Conference Timeline
              <motion.div 
                className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-1 sm:h-1.5 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              ></motion.div>
            </h2>
          </motion.div>
          <p className="text-sm sm:text-base text-gray-300 mt-4 max-w-xl mx-auto">
            Mark your calendar for these key dates to stay on track with the conference timeline
          </p>
          <motion.div
            className="mt-6 inline-block bg-gradient-to-r from-pink-500 to-pink-400 text-white px-6 py-2 rounded-full text-medium font-large h-2xl"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 400, delay: 0.5 }}
          >
            IMPORTANT DATES
          </motion.div>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Timeline Line - Desktop: Tube, Mobile: Left line */}
          <motion.div 
            className="absolute md:left-1/2 left-6 top-0 bottom-0 md:w-12 md:sm:w-16 w-1 md:bg-gradient-to-b md:from-gray-200 md:via-gray-100 md:to-gray-200 bg-gray-300 md:rounded-full md:transform md:-translate-x-1/2 z-10 md:shadow-inner"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <div className="absolute inset-0 md:bg-gradient-to-b md:from-transparent md:via-white/20 md:to-transparent md:rounded-full"></div>
          </motion.div>

          {/* Timeline Items */}
          {datesData.map((item, idx) => {
            const colorScheme = colorSchemes[idx % colorSchemes.length];
            const isLeft = idx % 2 === 0;
            const titleColors = [
              'text-cyan-300',
              'text-yellow-300',
              'text-green-300',
              'text-orange-300',
              'text-blue-300',
            ];
            const titleColor = titleColors[idx % titleColors.length];
            
            return (
              <motion.div
                key={idx}
                className="relative flex items-center mb-12 sm:mb-20 group min-h-[140px]"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Timeline Circle Icon */}
                <motion.div
                  className="absolute top-1/2 transform -translate-y-1/2 z-20 md:left-[calc(47.6%-1px)] left-3"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 15,
                    delay: 0.3 + idx * 0.15 
                  }}
                >
                  <div 
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${colorScheme.bg} shadow-2xl flex items-center justify-center transition-all duration-300 ${
                      hoveredIndex === idx ? "scale-110" : "scale-100"
                    } border-2 border-white`}
                  >
                    <div className={`${colorScheme.icon} transform transition-transform duration-300 ${
                      hoveredIndex === idx ? "scale-110" : "scale-100"
                    }`}>
                      {getIcon(idx)}
                    </div>
                  </div>
                </motion.div>

                {/* Desktop Layout - Alternating sides */}
                <div className="hidden md:flex w-full">
                  {/* Content Block - Left Side */}
                  {isLeft && (
                    <motion.div
                      className="w-[calc(50%-60px)] pr-8 text-right"
                      whileHover={{ x: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className={`font-extrabold text-lg sm:text-xl tracking-wide ${titleColor}`}>
                        {(item.title || '').toUpperCase()}
                      </h3>
                      {item.description && (
                        <p className="text-gray-300 text-sm sm:text-base mt-2">
                          {item.description}
                        </p>
                      )}
                      {!item.extended ? (
                        <div className="mt-3 flex justify-end">
                          <span className="inline-block bg-pink-500 text-white px-4 py-1.5 rounded-full text-xs sm:text-sm shadow">
                            {formatDate(item.date)}
                          </span>
                        </div>
                      ) : (
                        <div className="mt-3 space-y-2">
                          <div className="flex justify-end items-center">
                            <span className="inline-block bg-pink-500 text-white px-4 py-1.5 rounded-full text-xs sm:text-sm shadow mr-2">
                              {formatDate(item.newDate)}
                            </span>
                            <span className="text-pink-300 text-xs">Extended</span>
                          </div>
                          <div className="flex justify-end">
                            <span className="inline-block text-gray-400 line-through text-xs sm:text-sm">
                              {formatDate(item.date)}
                            </span>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {/* Content Block - Right Side */}
                  {!isLeft && (
                    <motion.div
                      className="w-[calc(50%-60px)] pl-8 ml-auto text-left"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className={`font-extrabold text-lg sm:text-xl tracking-wide ${titleColor}`}>
                        {(item.title || '').toUpperCase()}
                      </h3>
                      {item.description && (
                        <p className="text-gray-300 text-sm sm:text-base mt-2">
                          {item.description}
                        </p>
                      )}
                      {!item.extended ? (
                        <div className="mt-3">
                          <span className="inline-block bg-pink-500 text-white px-4 py-1.5 rounded-full text-xs sm:text-sm shadow">
                            {formatDate(item.date)}
                          </span>
                        </div>
                      ) : (
                        <div className="mt-3 space-y-2">
                          <div className="flex items-center">
                            <span className="inline-block bg-pink-500 text-white px-4 py-1.5 rounded-full text-xs sm:text-sm shadow mr-2">
                              {formatDate(item.newDate)}
                            </span>
                            <span className="text-pink-300 text-xs">Extended</span>
                          </div>
                          <span className="inline-block text-gray-400 line-through text-xs sm:text-sm">
                            {formatDate(item.date)}
                          </span>
                        </div>
                      )}
                    </motion.div>
                  )}
                </div>

                {/* Mobile Layout - All content on right side */}
                <div className="md:hidden w-full pl-16">
                  <motion.div
                    className="text-left"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className={`font-extrabold text-lg tracking-wide ${titleColor}`}>
                      {(item.title || '').toUpperCase()}
                    </h3>
                    {item.description && (
                      <p className="text-gray-300 text-sm mt-2">
                        {item.description}
                      </p>
                    )}
                    {!item.extended ? (
                      <div className="mt-3">
                        <span className="inline-block bg-pink-500 text-white px-4 py-1.5 rounded-full text-xs shadow">
                          {formatDate(item.date)}
                        </span>
                      </div>
                    ) : (
                      <div className="mt-3 space-y-2">
                        <div className="flex items-center">
                          <span className="inline-block bg-pink-500 text-white px-4 py-1.5 rounded-full text-xs shadow mr-2">
                            {formatDate(item.newDate)}
                          </span>
                          <span className="text-pink-300 text-xs">Extended</span>
                        </div>
                        <span className="inline-block text-gray-400 line-through text-xs">
                          {formatDate(item.date)}
                        </span>
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
});

Timeline.displayName = "Timeline";
export default Timeline;