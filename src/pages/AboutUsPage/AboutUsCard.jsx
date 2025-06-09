import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const teamMembers = [
  {
    name: "Homam Alyaghshi",
    arabicName: "همام اليغشي",
    role: "Administrative",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    bgImage: "/images/banner3.png",
    desc: "Homam Alyaghshi is a dedicated administrative professional with a keen eye for detail and a passion for optimizing workflows. She ensures seamless operations and a supportive environment for the team.",
  },
  {
    name: "Omar Sanoubar",
    arabicName: "عمر سنوبر",
    role: "Marketing Specialist",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    bgImage: "/images/banner1.png",
    desc: "Omar Sanoubar is a creative marketing specialist known for his innovative campaigns and ability to connect with audiences. He drives brand visibility and engagement through strategic initiatives.",
  },
];

const OurTeam = () => {
  return (
    <div className="flex justify-center items-center min-h-screen px-4 py-12"> {/* Added a dark background */}
      <div
        data-aos="fade-up"
        className="flex justify-center gap-40 w-full max-w-6xl flex-wrap" // Adjusted max-w and gap
      >
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="bg-gray-800 shadow-xl shadow-purple-900 rounded-xl overflow-hidden text-center w-full max-w-sm transform hover:scale-105 transition-all duration-300 ease-in-out group" // More prominent shadow, hover effect
          >
            <div
              className="p-8 text-white relative flex flex-col items-center justify-center" // Centered content
              style={{
                backgroundImage: `url(${member.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "180px", // Ensured a minimum height for the banner
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-70 z-0 group-hover:bg-opacity-80 transition-all duration-300"></div> {/* Increased overlay on hover */}
              <div className="relative z-10 grid justify-center items-center gap-2">
                <h3 className="text-2xl font-bold font-Orbitron tracking-wide">
                  {member.name}
                </h3>
                <p className="text-lg font-Rajdhani text-gray-300 mb-14">
                  {member.arabicName} - {member.role}
                </p>
              </div>
            </div>

            <div className="flex justify-center -mt-20 z-20"> {/* Adjusted margin-top for image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-48 h-48 rounded-full border-8 border-purple-600 shadow-lg object-cover transform transition-all duration-300 group-hover:border-neon group-hover:shadow-xl group-hover:shadow-neon" // Larger image, more prominent border/shadow on hover
              />
            </div>

            <div className="p-6 text-white bg-gray-700 mx-4 mb-4 rounded-lg shadow-inner mt-4"> {/* Dedicated background for description */}
              <p className="font-Rajdhani text-base leading-relaxed"> {/* Slightly larger text for description */}
                "{member.desc}"
              </p>
              <div className="flex justify-center gap-10 mt-6 text-2xl"> {/* Larger icons */}
                <FaFacebookF className="hover:text-blue-500 cursor-pointer transform hover:scale-125 transition-all duration-300" />
                <FaTwitter className="hover:text-sky-400 cursor-pointer transform hover:scale-125 transition-all duration-300" />
                <FaLinkedinIn className="hover:text-blue-600 cursor-pointer transform hover:scale-125 transition-all duration-300" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;