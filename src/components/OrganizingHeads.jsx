import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProfileCard = ({ person, onClick }) => (
  <motion.div
    whileHover={{
      scale: 1.05,
      y: -6,
      boxShadow: "0 10px 25px rgba(22, 101, 52, 0.25)",
    }}
    whileTap={{ scale: 0.97 }}
    onClick={() => onClick(person)}
    transition={{ type: "spring", stiffness: 300, damping: 15 }}
    className="relative bg-white/90 border border-green-900/10 hover:border-green-700/60
               transition-all duration-300 rounded-2xl p-6 shadow-md hover:shadow-xl
               backdrop-blur-sm w-72 flex flex-col items-center cursor-pointer"
  >
    <div className="relative mb-4">
      <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-green-700 shadow-sm">
        <img
          src={person.image}
          alt={person.name}
          className="w-full h-full object-cover object-top rounded-full"
        />
      </div>
    </div>
    <h3 className="text-xl font-semibold text-green-900 mb-2 text-center">
      {person.name}
    </h3>
    <p className="text-gray-600 text-center text-sm">{person.position}</p>
  </motion.div>
);

const OrganizingHeads = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const patrons = [
    {
      name: "Prof. Bhim Singh",
      position: "Chairman, NIT Jalandhar",
      image: "bs.jpg",
      about:
        "Prof. Bhim Singh has been instrumental in advancing NIT Jalandhar’s academic and research excellence.",
    },
  ];

  const coPatrons = [
    {
      name: "Prof. Binod Kumar Kanaujia",
      position: "Director, NIT Jalandhar",
      image: "director.jpg",
      about:
        "Prof. Kanaujia is committed to innovation and collaboration in higher education and research.",
    },
  ];

  const chairman = [
    {
      name: "Dr. Ashish Raman",
      position: "Electronics and Communication Engineering, NIT Jalandhar",
      image: "ashish_raman.jpg",
      about:
        "Dr. Raman specializes in signal processing and has guided numerous research scholars.",
    },
    {
      name: "Dr. Sukwinder Singh",
      position: "Electronics and Communication Engineering, NIT Jalandhar",
      image: "sukhwinder.jpg",
      about:
        "Dr. Singh’s research focuses on embedded systems and wireless communication.",
    },
    {
      name: "Dr. Aijaz Mehdi Zaidi",
      position: "Electronics and Communication Engineering, NIT Jalandhar",
      image: "zedimedi.jpg",
      about:
        "Dr. Zaidi is known for his contributions to photonics and optical communication systems.",
    },
    {
      name: "Dr. Rohit Singh",
      position: "Electronics and Communication Engineering, NIT Jalandhar",
      image: "rohit.jpg",
      about: "Dr. Rohit is an expert in semiconductor devices and VLSI design.",
    },
  ];

  const secretary = [
    {
      name: "Dr. Pawan Kumar Verma",
      position: "Electronics and Communication Engineering, NIT Jalandhar",
      image: "pkverma.jpg",
      about:
        "Dr. Verma’s research interests include microwave engineering and antennas.",
    },
    {
      name: "Dr. Nitesh Kashyap",
      position: "Electronics and Communication Engineering, NIT Jalandhar",
      image: "nitesh.jpg",
      about: "Dr. Kashyap works on IoT and advanced communication technologies.",
    },
    {
      name: "Dr. Roshan Bodile",
      position: "Electronics and Communication Engineering, NIT Jalandhar",
      image: "bodile.jpg",
      about: "Dr. Bodile focuses on nanoelectronics and material characterization.",
    },
    {
      name: "Dr. Harimurugan Devarajan",
      position: "Electrical Engineering, NIT Jalandhar",
      image: "hari.jpg",
      about: "Dr. Harimurugan researches smart grid systems and renewable energy.",
    },
    {
      name: "Dr. Kundan Kumar",
      position: "Electronics and Communication Engineering, NIT Jalandhar",
      image: "kundan.jpeg",
      about:
        "Dr. Kundan specializes in digital communication and machine learning applications.",
    },
  ];

  const sections = [
    { title: "Patron", members: patrons },
    { title: "Executive Chair", members: coPatrons },
    { title: "Organising Chairmen", members: chairman },
    { title: "Organising Secretaries", members: secretary },
  ];

  const renderSection = (title, members, index) => {
    const fromLeft = index % 2 === 0;
    return (
      <motion.div
        initial={{ opacity: 0, x: fromLeft ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <h2 className="bg-gradient-to-r from-green-600 to-green-400 text-white text-xl font-semibold rounded-3xl px-8 py-3 inline-block shadow-md">
          {title}
        </h2>
        <div className="flex flex-col items-center justify-center mt-8 mb-16">
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 md:gap-16">
            {members.map((person, idx) => (
              <ProfileCard key={idx} person={person} onClick={setSelectedPerson} />
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div
      className="w-full py-16 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #E8F5E9 0%, #F9FAFB 50%, #E8F5E9 100%)",
      }}
    >
       <h2 className="text-[#1B4332] text-2xl sm:text-3xl  font-bold font-oswald tracking-wide leading-tight drop-shadow-md underline text-center mb-8 relative z-10">
          {/* <span className="block">About</span> */}
          <span className="block text-[#2D6A4F] mt-2">
            Organising Heads
          </span>
          {/* <span className="block text-[#081C15]">Jalandhar</span> */}
        </h2>
      {/* === Animated Concentric Background === */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute w-[600px] h-[600px] border border-green-900 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute w-[400px] h-[400px] border border-green-800/30 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute w-[200px] h-[200px] border border-green-700/20 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      </div>

      {/* === Content === */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {sections.map((sec, i) => renderSection(sec.title, sec.members, i))}
      </div>

      {/* === Info Bubble === */}
      <AnimatePresence>
        {selectedPerson && (
          <motion.div
            key="bubble"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            onClick={() => setSelectedPerson(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white border border-green-800/30 rounded-2xl shadow-2xl p-8 max-w-md text-center"
            >
              <img
                src={selectedPerson.image}
                alt={selectedPerson.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-green-700"
              />
              <h3 className="text-2xl font-bold text-green-900 mb-2">
                {selectedPerson.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{selectedPerson.position}</p>
              <p className="text-gray-800 italic leading-relaxed">
                “{selectedPerson.about}”
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes ping {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        .animate-ping {
          animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default OrganizingHeads;
