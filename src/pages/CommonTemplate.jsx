




// import { useState, useEffect } from "react";
// import getEnvironment from "../getenvironment";
// import { useParams } from "react-router-dom";
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';

// const CommonTemplate = ({ confid }) => {
//   const [data, setData] = useState(null);
//   const { templateid } = useParams();

//   useEffect(() => {
//     const fetchData = async () => {
//       const apiUrl = await getEnvironment();
//       try {
//         const response = await fetch(
//           `${apiUrl}/conferencemodule/commontemplate/${confid}/${templateid}`,
//           {
//             method: "GET",
//             credentials: "include",
//             headers: { "Content-Type": "application/json" },
//           }
//         );
//         if (!response.ok) throw new Error("Network response was not ok");
//         setData(await response.json());
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     fetchData();
//   }, [confid, templateid]);

//   return (
//     <div className="bg-[#3b2f2f] min-h-screen relative overflow-hidden">
//       {/* decorative dots */}
//       <div className="absolute inset-0 pointer-events-none opacity-10">
//         <div className="absolute w-[600px] h-[600px] border border-[#8b5e3c]/20 rounded-full -right-1/4 top-1/3" />
//         <div className="absolute w-2 h-2 bg-[#d97706] rounded-full left-[15%] top-[25%] animate-pulse" />
//       </div>

//       <Navbar />

//       <div className="pt-24 container mx-auto px-6 lg:px-8 pb-16 relative z-10">
//         <div className="bg-white border border-[#8b5e3c]/30 rounded-xl p-8 shadow-lg">
//           <h1 className="text-3xl font-bold text-[#5c3a21] mb-4">
//             {data ? (
//               <span dangerouslySetInnerHTML={{ __html: data.pageTitle }} />
//             ) : (
//               <div className="animate-pulse space-y-2">
//                 <div className="h-6 bg-gray-300 rounded w-3/4" />
//                 <div className="h-6 bg-gray-300 rounded w-1/2" />
//               </div>
//             )}
//           </h1>
//           <div className="w-24 h-1 bg-[#d97706] mb-6" />

//           {data ? (
//             <div className="prose prose-[#5c3a21] max-w-none">
//               <div dangerouslySetInnerHTML={{ __html: data.description }} />
//             </div>
//           ) : (
//             <div className="animate-pulse space-y-2">
//               <div className="h-4 bg-gray-300 rounded w-5/6" />
//               <div className="h-4 bg-gray-300 rounded w-2/3" />
//               <div className="h-4 bg-gray-300 rounded w-3/4" />
//             </div>
//           )}
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default CommonTemplate;


import { useState, useEffect } from "react";
import getEnvironment from "../getenvironment";
import { useParams } from "react-router-dom";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const CommonTemplate = ({ confid }) => {
  const [data, setData] = useState(null);
  const { templateid } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const apiUrl = await getEnvironment();
        const res = await fetch(
          `${apiUrl}/conferencemodule/commontemplate/${confid}/${templateid}`,
          { method: "GET", credentials: "include", headers: { "Content-Type": "application/json" } }
        );
        if (!res.ok) throw new Error("Network response was not ok");
        setData(await res.json());
      } catch (err) {
        console.error(err);
      }
    })();
  }, [confid, templateid]);

  return (
    <div className="bg-blue-950 min-h-screen relative overflow-hidden">
      {/* GLOBAL BACKDROP GLOW */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-yellow-800 via-transparent to-yellow-900 opacity-20 pointer-events-none" /> */}

      <Navbar />

      <div className="pt-5 mx-auto px-2 lg:px-8 pb-10 relative z-10">
        {/* 🌟 Gradient Rounded Border Wrapper */}
        <div className="relative p-[1px] rounded-xl bg-gradient-to-br from-blue-800 to-white-600 ">
          {/* Card Content */}
          <div className="bg-white rounded-xl p-4">
            
            {/* Decorative Ornaments */}
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-yellow-200/20 rounded-full filter blur-xl" />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-yellow-200/10 rounded-full filter blur-2xl" />

            {/* Title */}
            <h1 className=" flex bg-gradient-to-r from-pink-500 to-pink-400 text-white text-xl font-semibold rounded-3xl p-3 justify-center mb-5 inline-block">
              {data ? (
                <span dangerouslySetInnerHTML={{ __html: data.pageTitle }} />
              ) : (
                <div className="animate-pulse space-y-2">
                  <div className="h-6 bg-gray-300 rounded w-3/4" />
                  <div className="h-6 bg-gray-300 rounded w-1/2" />
                </div>
              )}
            </h1>

            {/* Divider */}
            {/*     <div className="w-24 h-1 bg-gradient-to-r from-pink-900 to-pink-800 mb-6 rounded" /> */}

            {/* Description */}
            {data ? (
              <div className="prose prose-[#5c3a21] max-w-none overflow-x-auto">
                <div dangerouslySetInnerHTML={{ __html: data.description }} />
              </div>
            ) : (
              <div className="animate-pulse space-y-2">
                <div className="h-4 bg-gray-300 rounded w-5/6" />
                <div className="h-4 bg-gray-300 rounded w-2/3" />
                <div className="h-4 bg-gray-300 rounded w-3/4" />
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CommonTemplate;





