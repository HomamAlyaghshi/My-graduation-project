import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";

const teamMembers = [
  {
    name: "Homam Alyaghshi",
    role: "Computer Engineer",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    bgImage: "/images/homamback.png",
  },
  {
    name: "Omar Sanoubar",
    role: "Computer Engineer",
    image: "/images/omar.jpg",
    bgImage: "/images/omarback.jpg",
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
            className="relative rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 group"
            style={{
              backgroundImage: `url(${member.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="bg-black bg-opacity-60 w-full h-full p-6 flex flex-col items-center text-white">
              {/* صورة شخصية */}
              <img
                src={member.image}
                alt={member.name}
                className="w-72 h-72 rounded-full border-4 border-neon shadow-lg object-cover group-hover:shadow-neon/50 group-hover:scale-110 transition-all duration-300"
                onError={(e) =>
                  (e.target.src =
                    "https://via.placeholder.com/150/4F46E5/FFFFFF?text=User")
                }
              />

              {/* الاسم */}
              <h3 className="text-2xl font-Orbitron font-bold text-neon tracking-wide mt-4">
                {member.name}
              </h3>
              <p className="text-lg font-Rajdhani text-subText">
                {member.role}
              </p>

              {/* مواقع التواصل */}
              <div className="flex justify-center gap-6 mt-6 text-xl">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="text-gray-300 hover:text-blue-500 transform hover:scale-125 transition-all duration-300" />
                </a>
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                >
                  <FaTelegramPlane className="text-gray-300 hover:text-sky-400 transform hover:scale-125 transition-all duration-300" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="text-gray-300 hover:text-blue-600 transform hover:scale-125 transition-all duration-300" />
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
