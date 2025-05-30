import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const teamMembers = [
  {
    name: "Example Name",
    arabicName: "عمر سنوبر",
    role: "Administrative",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    bgImage: "/images/banner1.png",
    desc: "Homam alyaghsi lkfglsm fsdfklms dlngrsk nklemwrm w rlwld v aklfks",
  },
  {
    name: "Homam Alyaghshi",
    arabicName: "همام اليغشي",
    role: "Administrative",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    bgImage: "/images/banner3.png",
    desc: " lkfglsm fsdfklms dlngrsk nklemwrm w rlwld v aklfksjngls lsdfkj",
  },
];

const OurTeam = () => {
  return (
    <div className="flex justify-center items-center min-h-screen px-4 ">
      <div className="flex justify-between gap-8 w-full max-w-5xl flex-wrap">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="bg-spaceMid shadow-2xl shadow-neon rounded-lg overflow-hidden text-center w-full max-w-sm"
          >
            <div
              className="p-4 text-white relative"
              style={{
                backgroundImage: `url(${member.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
              <div className="relative z-10 mb-10 grid justify-center items-center gap-4">
                <h3 className="text-xl font-bold font-Orbitron">
                  {member.name} / {member.arabicName}
                </h3>
                <p className="text-lg font-Rajdhani">{member.role}</p>
              </div>
            </div>

            <div className="flex justify-center -mt-10">
              <img
                src={member.image}
                alt={member.name}
                className="w-60 h-w-60 z-50 rounded-full border-8 border-neon shadow-lg hover:scale-105 duration-500 delay-150 transition-all hover:shadow-xl hover:shadow-neon shadow-neon object-cover"
              />
            </div>

            <div className="p-4 text-white">
              <p className="font-Orbitron">{member.desc}</p>
              <div className="flex justify-center gap-12 mt-6 text-xl">
                <FaFacebookF className="hover:text-blue-600 cursor-pointer hover:scale-125 duration-500 transition-all" />
                <FaTwitter className="hover:text-sky-400 cursor-pointer hover:scale-125 duration-500 transition-all" />
                <FaLinkedinIn className="hover:text-blue-700 cursor-pointer hover:scale-125 duration-500 transition-all" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
