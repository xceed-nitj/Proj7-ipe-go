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
      name: "Prof. Binod Kumar Kanaujia",
      position: "Director, NIT Jalandhar",
      image: "director.jpg",
      about:
        "Prof. B K Kanaujia has been instrumental in advancing NIT Jalandhar’s academic and research excellence.",
    },
  ];


  const chairman = [
    {
      name: "Prof. Rajiv Kumar Garg",
      position: "Industrial and Production Engineering, NIT Jalandhar",
      image: "rv.jpg",
      about:
        "Research Interests: Supply Chain Management, Net Zero Economy, Life Cycle Assessment, Traditional Machining",
    },
    {
      name: "Prof. Anish Sachdeva",
      position: "Industrial and Production Engineering, NIT Jalandhar",
      image: "anish.jpg",
      about:
        "Research Interests: Supply Chain Management, Reliability and Maintenance Engineering, Modeling and Simulation, Optimization, and Advanced Manufacturing",
    },
    {
      name: "Prof. Arvind Bhardwaj",
      position: "Industrial and Production Engineering, NIT Jalandhar",
      image: "arvind.jpg",
      about:
        "Research Interests: Supply Chain Management, Operations Management, Human Factors Engineering, Life Cycle Assessment, Technology Management, Theory of Constraints, etc",
    },
    {
      name: "Prof. Vishal Sharma",
      position: "Industrial and Production Engineering, NIT Jalandhar",
      image: "vishal.jpg",
      about: "Research Interests: Additive Manufacturing/3D printing, Machining, Condition monitoring/IIOT/Industry 4.0",
    },
  ];

  const secretary = [
    {
      name: "Dr. Ajay Gupta",
      position: "Industrial and Production Engineering, NIT Jalandhar",
      image: "ajay.jpg",
      about:
        "Research Interests: 	Operations Management Operations Research Theory of Constraints Data Analytics MIS Materials Management Marketing Management Statistics",
    },
    {
      name: "Dr. Rajeev Tehran",
      position: "Industrial and Production Engineering, NIT Jalandhar",
      image: "rajeev.png",
      about: "Research Interests: Lean, Six Sigma, Productivity Improvement and Advanced Manufacturing",
    },
    {
      name: "Dr. L P Singh",
      position: "Industrial and Production Engineering, NIT Jalandhar",
      image: "lp.jpg",
      about: "Research Interests: Human Factors Engineering, Ergonomics, Supply Chain Management, Occupational Health and Safety, Additive Manufacturing",
    },
    {
      name: "Dr. Rakesh Kumar",
      position: "Industrial and Production Engineering, NIT Jalandhar",
      image: "rakesh.jpg",
      about: "Research Interests: 1. Manufacturing Flexibility, Factories of the Future and Design of Manufacturing Systems 2. Engineering Management, Engineering Economics, Industrial Psychology and Entrepreneurship 3. Multi-objective Optimization and Discrete Event Simulation 4. Outcome Based Education (OBE); Engineering Education Optimization",
    },
    {
      name: "Dr. S. Bhadauria",
      position: "Industrial and Production Engineering, NIT Jalandhar",
      image: "sb.jpg",
      about:
        "Research Interests: Analytical, Experimental and Computational Fracture Mechanics and Stress-life, Stress-life and Multiaxial Fatigue life prediction of weldments, Stress Corrosion Cracking",
    },
     {
      name: "Dr. R. K. Bansal",
      position: "Industrial and Production Engineering, NIT Jalandhar",
      image: "rk.jpg",
      about:
        "Research Interests: 1. Statistical Quality Control 2. Project Management 3. Materials Management 4. Operations Management",
    },
  ];
  const orgsecretary = [
    {
      name: "Dr. Narendra Kumar",
      position: "Industrial and Production Engineering, NIT Jalandhar",
      image: "ns.jpeg",
      about:
        "Research Interest: Additive Manufacturing, 3D Printing Material Development and Characterization, 3D Printed Electronics",
    },
    {
      name: "Dr. Bikash Kumar",
      position: "Industrial and Production Engineering, NIT Jalandhar",
      image: "bk.jpg",
      about: "Reserach Interest: Metal additive manufacturing, process-structure-properties correlation study, Thermal-metallurgical-mechanical modeling, Advanced welding and Joining process, Coating, Sustainable manufacturing",
    },
    {
      name: "Dr. Rajeev Verma",
      position: "Industrial and Production Engineering, NIT Jalandhar",
      image: "rverma.jpg",
      about: "Research Interest: Surface Engineering, Thermal Spray Coatings, Laser Surface-Texturing, Superhydrophobic Surfaces, Taguchi Methodology",
    },
    {
      name: "Dr. Varun Sharma",
      position: "Industrial and Production Engineering, NIT Jalandhar",
      image: "vs.jpg",
      about: "Research Interest: Welding, Material Science, Tribology",
    },
  ];

  const chiefsecretary = [
    {
      name: "Dr. Gurraj Singh",
      position: "Industrial and Production Engineering, NIT Jalandhar",
      image: "gs.jpg",
      about:
        "Research Interest: Life Cycle Assessment, Manufacturing processes, Farm machinery, Machining, Sustainable manufacturing , Bio waste management",
    },
    {
      name: "Dr. Aviral Mishra",
      position: "Industrial and Production Engineering, NIT Jalandhar",
      image: "am.jpg",
      about: "Research Interests: Advanced machining processes, Nanofinishing, Additive manufacturing, Manufacturing of composites",
    },
  ];

  const sections = [
    { title: "Patron", members: patrons },
    { title: "Conference Chairs", members: chairman },
    { title: "Chief Convenors", members: secretary },
    { title: "Organising Secretaries", members: orgsecretary },
    { title: "Convenors", members: chiefsecretary },

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
