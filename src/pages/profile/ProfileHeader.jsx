import { useState } from "react";

const ProfileHeader = ({
  username = "User Name",
  bio = "This is a brief summary about the user and their interests.",
  avatarUrl = null,
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="flex flex-col items-center text-center space-y-4">
      <div className="relative">
        <img
          src={
            imageError || !avatarUrl
              ? "https://via.placeholder.com/150/4F46E5/FFFFFF?text=User"
              : avatarUrl
          }
          alt="Profile"
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-neon shadow-lg object-cover transform hover:scale-105 transition-transform duration-300"
          onError={() => setImageError(true)}
        />
        <div className="absolute inset-0 rounded-full bg-neon/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <h1 className="text-3xl sm:text-4xl font-Orbitron font-extrabold text-star mb-2 tracking-tight">
        {username}
      </h1>
      <p className="text-subText text-base sm:text-lg max-w-md leading-relaxed">
        {bio}
      </p>
      <button className="mt-4 px-6 py-2 bg-neon text-gray-900 rounded-full font-Rajdhani font-bold text-lg hover:bg-opacity-80 hover:scale-105 focus:ring-2 focus:ring-neon focus:ring-offset-2 focus:ring-offset-black transition-all duration-300 shadow-lg hover:shadow-neon/50">
        Edit Profile
      </button>
    </div>
  );
};

export default ProfileHeader;