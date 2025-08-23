const HeroSection = () => {
    return (
      <div className="w-full flex flex-col md:flex-row justify-center items-center  px-4 text-white text-center md:text-left  py-12">
        <div
          data-aos="fade-right"
          className="flex-1 max-w-[643px]  text-[28px] md:text-[58px] font-medium leading-[38px] md:leading-[76px] tracking-[-2px]"
        >
          Exploring the Cosmos/
          <br /> Unlocking the Universe.
        </div>
        <div
          data-aos="fade-left"
          className="flex-1 max-w-[453px] mt-4 md:mt-0 md:ml-6 font-inter text-[12px] md:text-[16px] font-normal leading-[20px] md:leading-[26px]"
        >
          <strong className="text-star">NeuroStar</strong> is a platform dedicated
          to space exploration, celestial phenomena, and inspiring curiosity
          about the universe.
        </div>
      </div>
        
      );
}
 
export default HeroSection;