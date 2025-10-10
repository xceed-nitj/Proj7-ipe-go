// import Timeline from "../components/Timeline";
// // import OurEvents from "../components/OurEvents";
// // import HeroSection from "../components/HeroSection";
// // import Speakers from "../components/SpeakerSection/Speakers";
// import Footer from "../components/Footer";
// import AboutNITJ from "../components/AboutNITJ";
// // import AboutNews from "../components/AboutNews";
// import CountdownBox from "../components/timer.jsx";
// import AboutDept  from "../components/AboutDept.jsx"
// // import SponsorShip from "../components/Sponsorship";
// import { useEffect} from "react";
// // import Hero2 from "../components/Hero2";
// import Slider from "../components/Slider";

// // import SecNavbar from "../components/SecNavbar";
// import Navbar from "../components/Navbar";
// // import Speaker from "../components/Speaker";
// // import InvitedSpeaker from "../components/InvitedSpeaker";
// // import VideoGallery from "../components/VideoGallery";
// // import DriveLinks from "../components/Drivelink";
// import OrganizingHeads from "../components/OrganizingHeads";
// import AboutConf from "../components/Aboutconf.jsx";
// // import AboutNews from "./components/Dummy";
// function Home(props) {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   // const ourspeakersRef = useRef(null);
//   // const invitedspeakersRef = useRef(null);

//   // Step 2: Define the scroll function
//   // const scrollToSection = (section) => {
    
//   //   if(section=='ourspeakers'){
//   //     ourspeakersRef.current?.scrollIntoView({
//   //       behavior: 'smooth',
//   //       block: 'start',
//   //     });
//   //   }else if(section=='invitedspeakers'){
//   //     invitedspeakersRef.current?.scrollIntoView({
//   //       behavior: 'smooth',
//   //       block: 'start',
//   //     });
//   //   }
    
//   // };
//   return (
//     <div className="bg-white overflow-x-hidden">
//     <div className="sticky top-0 w-screen z-40 bg-blue-700">
//         <Navbar />
//       </div>
//       {/* <SecNavbar onClickScroll={scrollToSection}/> */}
    
      
//       {/* <Hero2 confid={props.confId}  /> */}
//       {/* <Slider  /> */}
//       {/* <DriveLinks/>
//       <VideoGallery/>
      
      
//       {/* <Speaker confid={props.confId}  ref={ourspeakersRef}   />
//       <InvitedSpeaker confid={props.confId}  ref={invitedspeakersRef}   /> */}
//       <Slider confid={props.confId}/>
//       <AboutConf confid={props.confId}/>
      
//       {/* <Speakers /> */}
//       {/* <OurEvents confid={props.confId}  /> */}
//       {/* <AboutNews confid={props.confId} /> */}
//       <Timeline confid={props.confId}  />
//       <AboutNITJ confid={props.confId} />
//       <div className="w-full flex justify-center mt-8">
//         <CountdownBox />
//       </div>
//       <AboutDept confid={props.confId} />
//       <OrganizingHeads />

//       {/* <SponsorShip confid={props.confId} /> */}
//       <Footer />
      
//     </div>
//   );
// }

// export default Home;
import Timeline from "../components/Timeline";
// import OurEvents from "../components/OurEvents";
// import HeroSection from "../components/HeroSection";
// import Speakers from "../components/SpeakerSection/Speakers";
import Footer from "../components/Footer";
import AboutNITJ from "../components/AboutNITJ";
// import AboutNews from "../components/AboutNews";
// import CountdownBox from "../components/timer.jsx";
import AboutDept from "../components/AboutDept.jsx";
// import SponsorShip from "../components/Sponsorship";
import { useEffect } from "react";
import Hero2 from "../components/Hero2";
// import Slider from "../components/Slider";
// import Hero2 from "../components/Hero2";
// import SecNavbar from "../components/SecNavbar";
// import Navbar from "../components/Navbar";
// import Speaker from "../components/Speaker";
// import InvitedSpeaker from "../components/InvitedSpeaker";
// import VideoGallery from "../components/VideoGallery";
// import DriveLinks from "../components/Drivelink";
import OrganizingHeads from "../components/OrganizingHeads";
import AboutConf from "../components/Aboutconf.jsx";
// import NavbarBluePink from "../components/Navbar/index.jsx";
// import AboutNews from "./components/Dummy";
import PinkWaveBanner from "../components/wave.jsx";

function Home(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // const ourspeakersRef = useRef(null);
  // const invitedspeakersRef = useRef(null);

  // Step 2: Define the scroll function
  // const scrollToSection = (section) => {
    
  //   if(section=='ourspeakers'){
  //     ourspeakersRef.current?.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'start',
  //     });
  //   }else if(section=='invitedspeakers'){
  //     invitedspeakersRef.current?.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'start',
  //     });
  //   }
    
  // };
  return (
    <div className="bg-white overflow-x-hidden">

      {/* <Navbar /> */}

      {/* Main Hero Section */}
      <section className="relative">
        <Hero2 />
      </section>
      
      {/* About Conference */}
      <section className="px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <AboutConf confid={props.confId} />
        </div>
      </section>
      <PinkWaveBanner speed={5}/>
      <PinkWaveBanner flip/>

      {/* Timeline */}
      <section className="px-3 md:px-6 lg:px-8 py-2 md:py-10 lg:py-14">
        <div className="max-w-7xl mx-auto">
          <Timeline confid={props.confId} />
        </div>
      </section>
       <PinkWaveBanner speed={5}/>
      <PinkWaveBanner flip/>
      {/* About NITJ */}
      <section className="px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AboutNITJ confid={props.confId} />
        </div>
      </section>
       <PinkWaveBanner speed={5}/>
      <PinkWaveBanner flip/>
      {/* Countdown Timers - Removed as Hero2 now includes countdown */}
      
      {/* About Department */}
      <section className="px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AboutDept confid={props.confId} />
        </div>
      </section>
       <PinkWaveBanner speed={5}/>
      <PinkWaveBanner flip/>
      {/* Organizing Committee */}
      <section className="px-3 md:px-6 lg:px-8 py-6 md:py-10 lg:py-14">
        <div className="max-w-7xl mx-auto">
          <OrganizingHeads />
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;