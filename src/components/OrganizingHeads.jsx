// import React from "react";

const ProfileCard = ({ person }) => (
  <div className="bg-white border border-slate-900/30 hover:border-slate-900/70
                  transition-all duration-300 rounded-xl p-6 shadow-lg hover:shadow-slate-900/20
                  backdrop-blur-sm w-72 flex flex-col items-center">
    <div className="relative mb-4">
      <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-slate-900 p-0.5">
        <img
          src={person.image}
          alt={person.name}
          className="w-full h-full object-cover object-top rounded-full"
        />
      </div>
    </div>
    <h3 className="text-xl font-bold text-blue-950 mb-2 text-center">
      {person.name}
    </h3>
    <p className="text-gray-700 text-center text-sm">{person.position}</p>
  </div>
);

const OrganizingHeads = () => {
  const patrons = [
    
    {
      name: "Prof. Bhim Singh",
      position: "Chairman, NIT Jalandhar",
      image: "bs.jpg",
    },
  ];

  const coPatrons = [
   {
      name: "Prof. Binod Kumar Kanaujia",
      position: "Director, NIT Jalandhar",
      image: "director.jpg",
    },
  ];

  // const coPatrons2 = [
  //   {
  //     name: "Prof. H. M. Mittal",
  //     position: "Head, Physics, NIT Jalandhar",
  //     image: "mittal.jpg",
  //   },
  // ];

  const chairman = [
    {
      name: "Dr. Ashish Raman",
      position: "Electronics and Communication Engineering, NIT Jalandhar",
      image: "ashish_raman.jpg",
    },
    {
      name: "Dr. Sukwinder Singh",
      position: "Electronics and Communication Engineering, NIT Jalandhar",
      image: "sukhwinder.jpg",
    },
    {
      name: "Dr. Aijaz Mehdi Zaidi",
      position: "Electronics and Communication Engineering, NIT Jalandhar",
      image: "zedimedi.jpg",
    },
     {
      name: "Dr. Rohit Singh",
      position: "Electronics and Communication Engineering, NIT Jalandhar",
      image: "rohit.jpg",
    },
  ];

  const secretary = [
    {
      name: "Dr. Pawan Kumar Verma",
      position: "Electronics and Communication Engineering, NIT Jalandhar",
      image: "pkverma.jpg",
    },
    {
      name: "Dr. Nitesh Kashyap",
      position: "Electronics and Communication Engineering, NIT Jalandhar",
      image: "nitesh.jpg",
    },
    {
      name: "Dr. Roshan Bodile",
      position: "Electronics and Communication Engineering, NIT Jalandhar",
      image: "bodile.jpg",
    },
    {
      name: "Dr. Harimurugan Devarajan",
      position: "Electrical Engineering, NIT Jalandhar",
      image: "hari.jpg",
    },
    {
      name: "Dr. Kundan Kumar",
      position: "Electronics and Communication Engineering, NIT Jalandhar",
      image: "kundan.jpeg",
    },
  ];
//  Temp change to reopen PR
  const renderSection = (title, members) => (
    <div className="text-center mb-12">
      <h2 className="bg-gradient-to-r from-pink-500 to-pink-400 text-white text-xl font-semibold rounded-3xl p-4 justify-center inline-block">
        {title}
        {/* <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-[#1A1307]"></span> */}
      </h2>
      {/* <div className="w-24 h-1 bg-gradient-to-r from-[#1a1307] to-transparent mx-auto"></div> */}
      <div className="flex flex-col items-center justify-center mt-8 mb-16">
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 md:gap-16">
          {members.map((person, idx) => (
            <ProfileCard key={idx} person={person} />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white w-full py-16 relative overflow-hidden">
      {/* === Animated Background === */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute w-[600px] h-[600px] border border-slate-900 rounded-full left-1/2 top-1/2 
                        transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute w-[400px] h-[400px] border border-slate-900/20 rounded-full left-1/2 top-1/2 
                        transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute w-[200px] h-[200px] border border-slate-900/30 rounded-full left-1/2 top-1/2 
                        transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute w-3 h-3 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-full left-[calc(50%-300px)] top-1/2 
                        transform -translate-y-1/2 animate-ping opacity-75" />
        <div className="absolute w-2 h-2 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-full left-[calc(50%-200px)] top-1/2 
                        transform -translate-y-1/2 animate-ping opacity-75" />
        <div className="absolute w-1.5 h-1.5 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-full left-[calc(50%-100px)] top-1/2 
                        transform -translate-y-1/2 animate-ping opacity-75" />
      </div>

      {/* === Content === */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {renderSection("Patron", patrons)}
        {renderSection("Executive Chair", coPatrons)}
        {/* {renderSection("Co-Patron", coPatrons2)} */}
        {renderSection("Organising Chairmen", chairman)}
        {renderSection("Organising Secretaries", secretary)}
      </div>

      {/* === Custom Ping Animation Keyframes === */}
      <style>
        {`
          @keyframes ping {
            0% { transform: scale(1); opacity: 1; }
            75%, 100% { transform: scale(2); opacity: 0; }
          }
          .animate-ping {
            animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
          }
        `}
      </style>
    </div>
  );
};

export default OrganizingHeads;
