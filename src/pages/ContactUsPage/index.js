import NavBar from "../../Shared/NavBar";
import ContactUsForm from "./ContactUsForm";
import Footer from "./../../Shared/Footer";
import HeroSection from "./HeroSection";

const ContactUsPage = () => {
  return (
    // Main container for the entire page
    // Using your theme's defined colors for the background gradient
    <div className="w-full min-h-screen bg-gradient-to-b from-[#00000F] via-[#0a1d3a] to-[#3a5f91]">
      {" "}
      {/* Adjusted to your theme colors and min-h-screen */}
      <NavBar />
      {/* Main content area: Hero Section and Contact Form */}
      {/* Defaults to a single column on small screens, becomes two columns on medium screens and up */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="flex justify-center items-center">
          {" "}
          {/* Ensuring HeroSection content remains centered */}
          <HeroSection />
        </div>

        {/* Contact Us Form */}
        <div className="flex justify-center items-center">
          {" "}
          {/* Ensuring ContactUsForm content remains centered */}
          <ContactUsForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUsPage;
