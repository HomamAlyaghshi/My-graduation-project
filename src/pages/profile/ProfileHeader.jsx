
const ProfileHeader = ({
  username = "user name",
  bio = "This is a brief summary about the user and their interests.",
}) => {
  return (
    <div className="flex flex-col items-center text-center">
      <img
        src="https://via.placeholder.com/150/4F46E5/FFFFFF?text=User"
        alt="Profile"
        className="w-32 h-32 rounded-full border-4 border-neon shadow-lg mb-4"
      />
      <h1 className="text-3xl font-Orbitron text-star mb-2">{username}</h1>
      <p className="text-subText text-lg max-w-xl">{bio}</p>
      <button className="mt-4 px-6 py-2 bg-neon text-white rounded-full font-Rajdhani hover:bg-opacity-90 transition duration-300">
Edit profile      </button>
    </div>
  );
};

export default ProfileHeader;
