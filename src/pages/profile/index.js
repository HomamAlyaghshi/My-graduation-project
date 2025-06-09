import NavBar from "./../../Shared/NavBar";
import Footer from "./../../Shared/Footer";
import ProfileHeader from "./ProfileHeader";
import ProfileInfo from "./ProfileInfo";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#00000F] via-[#0a1d3a] to-[#3a5f91]  text-lightText font-Rajdhani">
      <NavBar />
      <div className="container mx-auto py-8 px-4 md:px-0">
        <div className="bg-spaceMid rounded-lg shadow-lg p-6 md:p-8">
          <ProfileHeader />
          <hr className="border-t border-subText my-6" />
          <ProfileInfo />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
