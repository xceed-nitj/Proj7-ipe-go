import { useState, useEffect } from "react";
import getEnvironment from "../getenvironment";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const CommonTemplate = ({ confid }) => {
  const [data, setData] = useState(null);
  const { templateid } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const apiUrl = await getEnvironment();
        const res = await fetch(
          `${apiUrl}/conferencemodule/commontemplate/${confid}/${templateid}`,
          {
            method: "GET",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
          }
        );
        if (!res.ok) throw new Error("Network response was not ok");
        setData(await res.json());
      } catch (err) {
        console.error(err);
      }
    })();
  }, [confid, templateid]);

  return (
    <div className="bg-green-950 min-h-screen flex flex-col relative overflow-hidden">
      {/* ===== Navbar ===== */}
      <Navbar />

      {/* ===== Decorative Background Layers ===== */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-950 to-black opacity-80" />
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] sm:w-[60%] h-[40vh] bg-green-600/20 blur-[90px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[60%] sm:w-[40%] h-[30vh] bg-yellow-400/10 blur-[100px] rounded-full" />

      {/* ===== Content Section ===== */}
      <main className="relative z-10 flex-grow flex items-center justify-center px-3 sm:px-6 md:px-10 lg:px-16 py-10 sm:py-14 md:py-16">
        <div className="w-full max-w-6xl">
          {/* Outer Glow Border */}
          <div className="bg-gradient-to-br from-green-700/40 via-yellow-300/30 to-white/10 p-[1.5px] rounded-3xl shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:shadow-[0_0_50px_rgba(255,255,255,0.1)] transition-all duration-500 ease-in-out">
            
            {/* Inner Glassy Card */}
            <div className="relative bg-white/95 backdrop-blur-lg rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 overflow-hidden">
              
              {/* Floating Ornaments */}
              <div className="absolute -top-20 left-10 w-32 h-32 bg-green-300/30 blur-3xl rounded-full" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-yellow-200/25 blur-2xl rounded-full" />

              {/* ===== Title ===== */}
              <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2D6A4F] mb-5 sm:mb-6 md:mb-8 leading-snug">
                {data ? (
                  <span dangerouslySetInnerHTML={{ __html: data.pageTitle }} />
                ) : (
                  <div className="animate-pulse space-y-2 mx-auto w-3/4">
                    <div className="h-6 bg-gray-300 rounded w-full" />
                    <div className="h-6 bg-gray-300 rounded w-2/3 mx-auto" />
                  </div>
                )}
              </h1>

              {/* Divider Line */}
          

              {/* ===== Description Section ===== */}
              {data ? (
                <div className="overflow-x-auto w-full">
                  <div
                    className="min-w-full prose prose-lg max-w-none text-gray-800 leading-relaxed sm:leading-loose prose-green prose-headings:text-green-700 prose-a:text-green-600 hover:prose-a:text-green-700"
                    dangerouslySetInnerHTML={{ __html: data.description }}
                  />
                </div>
              ) : (
                <div className="animate-pulse space-y-3">
                  <div className="h-4 bg-gray-300 rounded w-5/6" />
                  <div className="h-4 bg-gray-300 rounded w-2/3" />
                  <div className="h-4 bg-gray-300 rounded w-3/4" />
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* ===== Footer ===== */}
      <Footer />
    </div>
  );
};

export default CommonTemplate;
