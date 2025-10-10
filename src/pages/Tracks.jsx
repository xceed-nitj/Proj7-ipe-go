// import { useEffect } from 'react';
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';

// function Tracks() {
//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);

//      const confid = props.confid;
//     const [apiUrl, setApiUrl] = useState(null);
//     const [data, setData] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         // Fetch the environment URL
//         getEnvironment().then(url => setApiUrl(url));
//     }, []);

//     useEffect(() => {
//         if (apiUrl) {
//             setIsLoading(true);
//             axios.get(`${apiUrl}/conferencemodule/commontemplate/conference/${confid}`, {
//                 withCredentials: true
//             })
//                 .then(res => {
//                     setData(res.data);
//                     setIsLoading(false);
//                     console.log(res.data);
//                 })
//                 .catch(err => {
//                     console.log(err);
//                     setIsLoading(false);
//                 });
//         }
//     }, [apiUrl, confid]);


//     const tracks = [
//         {
//             id: 1,
//             name: "Track 1",
//             topics: [
//                 "Nano Materials and Devices",
//                 "Smart and Functional Materials",
//                 "Batteries and Supercapacitors",
//                 "Energy Materials",
//                 "Liquid Crystals and Polymeric Materials",
//                 "Thin films and Solar cells",
//                 "Advanced Composites",
//                 "Biomaterials and Sensors",
//                 "Surface and Interface",
//                 "Functional oxides"
//             ]
//         },
//         {
//             id: 2,
//             name: "Track 2",
//             topics: [
//                 "Multi-ferrorics",
//                 "Magnetic Materials",
//                 "Semiconductor Physics and Devices",
//                 "Superconductors",
//                 "Ferroelectrics and Dielectrics",
//                 "Glasses and Ceramics"
//             ]
//         },
//         {
//             id: 3,
//             name: "Track 3",
//             topics: [
//                 "Optics and Photonics",
//                 "Quantum computing",
//                 "Laser and Plasma Physics",
//                 "Computational Physics and Materials Science",
//                 "Condensed Matter Theory"
//             ]
//         },
//         {
//             id: 4,
//             name: "Track 4",
//             topics: [
//                 "Nuclear and Radiation Physics",
//                 "High-Energy Physics",
//                 "Atmospheric Physics for Sustainable Climate & Environment",
//                 "Sustainable Materials Drug Delivery for Environment",
//                 "Interdisciplinary Research for Sustainability",
//                 "Swift heavy ion irradiation"
//             ]
//         }
//     ];

//     return (
//         <div className="bg-white min-h-screen relative overflow-hidden">
//             {/* Background decorative elements */}
//             <div className="absolute inset-0 pointer-events-none opacity-10">
//                 <div className="absolute w-[800px] h-[800px] border border-[#2563eb]/10 rounded-full -right-1/4 top-1/4 transform -translate-y-1/2"></div>
//                 <div className="absolute w-[500px] h-[500px] border border-[#2563eb]/15 rounded-full -left-1/4 bottom-1/4"></div>
//                 <div className="absolute w-3 h-3 bg-[#2563eb] rounded-full left-[10%] top-[20%] animate-pulse"></div>
//                 <div className="absolute w-2 h-2 bg-[#2563eb] rounded-full right-[15%] bottom-[30%] animate-pulse"></div>
//             </div>
            
//             <div className="fixed top-0 w-screen z-40"> 
//                 <Navbar />      
//             </div>
            
//             <div className="container max-w-7xl mx-auto px-5 sm:px-10 lg:px-8 pt-[80px] lg:pt-[100px] pb-16 relative z-10">
//                 <div className="bg-[white] border border-[#2563eb]/30 rounded-xl p-6 md:p-8 shadow-lg shadow-[#2563eb]/10 backdrop-blur-sm">
//                     <h1 className="text-4xl font-bold text-[#2563eb] mb-4">
//                         Conference Tracks
//                     </h1>
//                     <div className="w-32 h-1 bg-gradient-to-r from-[#2563eb] to-transparent mb-8"></div>
                    
//                     <div className="text-gray-700 mb-8">
//                         <p className="leading-relaxed">
//                             AMSDT-2025 features four specialized tracks covering a wide range of topics in advanced materials science and device technology. 
//                             Authors are encouraged to submit their research papers aligned with these tracks.
//                         </p>
//                     </div>
                    
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         {tracks.map((track) => (
//                             <div key={track.id} className="bg-white border border-[#2563eb]/30 rounded-lg p-5 hover:shadow-[0_0_15px_rgba(0,255,76,0.15)] transition-shadow duration-300">
//                                 <h2 className="text-2xl font-bold text-[#2563eb] mb-4 flex items-center">
//                                     <span className="flex items-center justify-center w-8 h-8 bg-[#2563eb]/10 rounded-full mr-3 text-lg">
//                                         {track.id}
//                                     </span>
//                                     {track.name}
//                                 </h2>
                                
//                                 <ul className="space-y-2">
//                                     {track.topics.map((topic, index) => (
//                                         <li key={index} className="flex items-start">
//                                             <span className="text-[#2563eb] mr-2 mt-1">•</span>
//                                             <span className='text-gray-100'>{topic}</span>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
                
//             </div>
            
//             <Footer />
//         </div>
//     );
// }


import { useEffect, useState } from 'react';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import axios from "axios";
import getEnvironment from "../getenvironment";

function Tracks(props) {
    const confid = props.confid;
    const [data, setData] = useState(null)
    const [apiUrl, setApiUrl] = useState(null);
    
    useEffect(() => {
        // Fetch the environment URL
        getEnvironment().then(url => setApiUrl(url));
    }, []);
    
    useEffect(() => {
        window.scrollTo(0, 0);
        if (apiUrl) {
            axios.get(`${apiUrl}/conferencemodule/commontemplate/conference/${confid}`, {
                withCredentials: true
            })
                .then(res => {
                    setData(res.data);
                    console.log(res.data);
                })
                .catch(err => console.log(err))
        }
    }, [apiUrl, confid]);
   
    return (
        
        <div className="bg-white min-h-screen relative overflow-hidden ">
            <div className="top-0 w-screen z-40"> 
                <Navbar />      
            </div>
            {/* Background decorative elements */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
                <div className="absolute w-[800px] h-[800px] border border-[#2563eb]/10 rounded-full -right-1/4 top-1/4 transform -translate-y-1/2"></div>
                <div className="absolute w-[500px] h-[500px] border border-[#2563eb]/15 rounded-full -left-1/4 bottom-1/4"></div>
                <div className="absolute w-3 h-3 bg-[#2563eb] rounded-full left-[10%] top-[20%] animate-pulse"></div>
                <div className="absolute w-2 h-2 bg-[#2563eb] rounded-full right-[15%] bottom-[30%] animate-pulse"></div>
            </div>
            
            
            <div className="pt-[166px] container max-w-7xl mx-auto px-5 sm:px-10 lg:px-8 pt-[80px] lg:pt-[100px] pb-16 relative z-10">
                <div className="bg-[white] border border-[#2563eb]/30 rounded-xl p-6 md:p-8 shadow-lg shadow-[#2563eb]/10 backdrop-blur-sm">
                    <h1 className="text-4xl font-bold text-[#2563eb] mb-4">
                          {data ?( 
                        <div className="text-gray-700 prose prose-invert max-w-none">
                            <div dangerouslySetInnerHTML={{__html:data[1].pageTitle}}/>
                        </div>):(
                        <div className="animate-pulse">
                            <div className="h-4 bg-gray-700 rounded w-3/4 mb-4"></div>
                            <div className="h-4 bg-gray-700 rounded w-1/2 mb-4"></div>
                            <div className="h-4 bg-gray-700 rounded w-5/6 mb-4"></div>
                            <div className="h-4 bg-gray-700 rounded w-2/3 mb-4"></div>
                        </div>
                    )}
                    
                    </h1>
                    
                    <div className="w-40 h-1 bg-blue-600 mb-4"></div>
                    {data ? (
                        <div className="text-gray-700 prose prose-invert max-w-none">
                            <div dangerouslySetInnerHTML={{__html:data[1].description}}/>
                        </div>
                    ) : (
                        <div className="animate-pulse">
                            <div className="h-4 bg-gray-700 rounded w-3/4 mb-4"></div>
                            <div className="h-4 bg-gray-700 rounded w-1/2 mb-4"></div>
                            <div className="h-4 bg-gray-700 rounded w-5/6 mb-4"></div>
                            <div className="h-4 bg-gray-700 rounded w-2/3 mb-4"></div>
                        </div>
                    )}
                    
                    {/* Map container */}
                                   </div>
            </div>
            
            <Footer />
        </div>
    )
}


export default Tracks;