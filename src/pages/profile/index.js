import NavBar from "./../../Shared/NavBar";
import Footer from "./../../Shared/Footer";
import ProfileHeader from "./ProfileHeader";
import ProfileInfo from "./ProfileInfo";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#00000F] via-[#0a1d3a] to-[#2a4b7c] text-lightText font-Rajdhani flex flex-col">
      <NavBar />
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="bg-spaceMid rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 transform hover:scale-[1.02] transition-transform duration-300 backdrop-blur-sm bg-opacity-80">
          <ProfileHeader />
          <hr className="border-t border-subText/30 my-8" />
          <ProfileInfo />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
