import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const teamMembers = [
  {
    name: "Homam Alyaghshi",
    role: "Administrative",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    bgImage: "/images/banner3.png",
    desc: "Homam Alyaghshi is a dedicated administrative professional with a keen eye for detail and a passion for optimizing workflows. She ensures seamless operations and a supportive environment for the team.",
  },
  {
    name: "Omar Sanoubar",
    role: "Marketing Specialist",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    bgImage: "/images/banner1.png",
    desc: "Omar Sanoubar is a creative marketing specialist known for his innovative campaigns and ability to connect with audiences. He drives brand visibility and engagement through strategic initiatives.",
  },
];

const OurTeam = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div
        data-aos="fade-up"
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8"
      >
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 group"
          >
            <div
              className="relative p-8 text-white flex flex-col items-center justify-center min-h-[200px] bg-cover bg-center"
              style={{
                backgroundImage: `url(${member.bgImage})`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-50 transition-all duration-300"></div>
              <div className="relative z-10 text-center">
                <h3 className="text-2xl font-Orbitron font-bold text-neon tracking-wide">
                  {member.name}
                </h3>
                <p className="text-lg font-Rajdhani text-subText mt-2">
                  {member.role}
                </p>
              </div>
            </div>
            <div className="flex justify-center -mt-16 z-50">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full border-4 border-neon shadow-lg object-cover group-hover:shadow-neon/50 group-hover:scale-110 transition-all duration-300 z-50"
                onError={(e) => (e.target.src = "https://via.placeholder.com/150/4F46E5/FFFFFF?text=User")}
              />
            </div>
            <div className="p-6 text-white bg-gray-700/50 mx-4 mb-4 rounded-lg">
              <p className="font-Rajdhani text-base text-lightText leading-relaxed text-center">
                {member.desc}
              </p>
              <div className="flex justify-center gap-6 mt-6 text-xl">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="text-gray-400 hover:text-blue-500 transform hover:scale-125 transition-all duration-300" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-gray-400 hover:text-sky-400 transform hover:scale-125 transition-all duration-300" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="text-gray-400 hover:text-blue-600 transform hover:scale-125 transition-all duration-300" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;