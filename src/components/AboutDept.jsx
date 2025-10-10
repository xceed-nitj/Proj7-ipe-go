import axios from "axios";
import getEnvironment from "../getenvironment";
import { useState, useEffect } from "react";

const sliderData = [
  { image: "/ece1.jpeg", label: " " },
  { image: "/ece2.png", label: " " },
  { image: "/ece3.png", label: " " },
  // { image: "/slider2.jpg", label: " " },
];

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full w-full rounded-l-3xl overflow-hidden">
      {sliderData.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-center bg-cover transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}
    </div>
  );
}

function AboutDept(props) {
  const confid = props.confid;
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
          console.log(res.data);
          setData(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }
  }, [apiUrl, confid]);

  return (
    // <div className="bg-white text-white container max-w-8xl mx-auto px-4 sm:px-20 lg:px-8 ">
      <div className="w-full bg-white text-white mt-40 mb-10">

<div className="flex justify-center">
  <h2 className="bg-gradient-to-r from-pink-500 to-pink-400 text-white text-xl font-bold rounded-3xl p-4 text-center">
    About The Department of Electronics and Communication Engineering
  </h2>
</div>      
      
      <div className="grid grid-rows-1 md:grid-rows-1 gap-8">
        <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-3xl shadow-md hover:shadow-lg hover:shadow-grey-400 transition-all duration-300 grid grid-cols-1 lg:grid-cols-5 gap-0 m-6">
          <div className="lg:col-span-2 flex items-center justify-center">
            <Slider />
          </div>
          {isLoading ? (
            <div className="animate-pulse space-y-3 p-5">
              <div className="h-4 bg-white rounded w-3/4"></div>
              <div className="h-4 bg-white rounded"></div>
              <div className="h-4 bg-white rounded w-5/6"></div>
              <div className="h-4 bg-white rounded w-2/3"></div>
            </div>
          ) : (
            <div className="text-base text-justify text-white lg:col-span-3 p-5 mt-6 mb-6">
              {data ? (
                <div
                  className="about-content"
                  dangerouslySetInnerHTML={{
                    __html: data.about[2]?.description || "",
                  }}
                />
              ) : null}
            </div>
          )}

          
        </div>
      </div>
    </div>
  );
}

export default AboutDept;