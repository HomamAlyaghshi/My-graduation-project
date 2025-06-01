import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";

const Banner = () => {
  return (
    <div className="md:h-[532px] w-full justify-center items-center flex flex-col md:flex-row  shadow-xl shadow-neon   ">
      <Link to="/ai" className="w-full h-full">
        <div
          data-aos="fade-down"
          className=" w-full h-full flex justify-center items-center border-2 rounded-2xl border-neon"
        >
          <video
            className="w-full md:w-5/6 flex justify-center items-center  h-full rounded-2xl  hover:scale-95 transition-all duration-500 "
            src="/videos/drop.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </Link>
      <div
        data-aos="fade-up"
        className=" w-full md:w-1/2  md:h-[532px] md:left-[720px] pr-[16px] md:pr-[160px] pl-[16px] md:pl-[72px] flex justify-center items-center  text-white  rounded-2xl "
      >
        {/**العمود الثاني */}
        <div className=" md:w-[452px]  grid gap-[16px] ">
          <p className="text-star font-inter text-[12px] md:text-[16px] font-bold leading-[16px] text-left animate-bounce">
            What's new ?
          </p>
          <p className="font-poppins text-[24px] md:text-[40px] font-medium leading-[28px] md:leading-[44px] tracking-[-0.4px] text-left ">
            Introducing Our New Astronomical Spectroscopy AI Service!
          </p>
          <p className=" font-inter text-[16px] md:text-[20px] font-normal leading-[24px] md:leading-[32px] text-left">
            Using cutting-edge AI algorithms, we provide precise analysis <br />{" "}
            of celestial spectra to unlock the secrets of the universe
          </p>
          <div className="flex   transition-all duration-200 transform hover:scale-95 w-[100px] ">
            <Button to={"/ai"}>Discover Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
