import Image from "next/image";
import logo from "../../public/logo.svg";
import hamburger from "../../public/hamburger.svg";
import pc from "../../public/pc.jpg";
import heroBg from "../../public/heroBg.svg";
import heroBgMobile from "../../public/heroBgMobile.svg";

const Hero = () => {
  return (
    <div className="relative md:px-24 px-7 md:pb-48 pb-16 flex flex-col justify-center gap-10 items-center">
      <Image
        src={heroBg}
        alt="heroBg"
        className="absolute md:flex hidden object-cover bottom-0"
      />
      <Image
        src={heroBgMobile}
        alt="heroBgMobile"
        className="absolute flex md:hidden object-cover top-0"
      />
      <nav className="z-20 flex items-center border border-neutral-300 rounded-full w-fit mt-10 bg-white">
        <div className="border-r border-neutral-300 px-5 py-3">
          <Image src={logo} alt="logo" className="w-5 h-5 object-cover" />
        </div>
        <button className="flex justify-center items-center px-5 py-3">
          <Image src={hamburger} alt="menu" className="w-5 h-5 object-cover" />
        </button>
      </nav>

      <div className="z-20 flex md:flex-row flex-col md:gap-0 gap-3 md:mt-20 items-center w-full">
        <div className="md:text-6xl text-3xl md:w-1/2 font-semibold text-[#344054] md:text-start text-center">
          Atlas Premier Knowledge Blogs:
        </div>
        <div className="md:text-xl md:text-start text-center text-[#667085] md:w-[40%]">
          "Immerse yourself in the latest knowledge and research from our team
          of software engineers and design professionals.
        </div>
      </div>

      <div className="z-20 flex md:flex-row flex-col items-center w-full md:h-[50vh] rounded-3xl shadow-lg md:mt-20 bg-white overflow-hidden ">
        <Image src={pc} alt="pc" className="md:w-1/2 h-full object-cover" />
        <div className="md:py-2 pb-1 md:pr-2 px-1 bg-white md:w-1/2 h-full">
          <div className="bg-[#F8F8F8] rounded-r-xl w-full h-full text-[#667085] flex justify-between flex-col items-center py-10">
            <div className="flex flex-col gap-3 md:gap-2 w-3/4">
              <span className="flex md:gap-6 gap-3 text-xs md:text-sm">
                FREELANCING 101 <span>●</span> Joseph Patrick
              </span>
              <span className="md:text-4xl md:text-start text-center text-2xl font-medium">
                07 Ways to get Consistent Clients from Social Media
              </span>
            </div>
            <span className="flex md:items-start items-center md:mt-0 mt-5 md:w-3/4 gap-6 text-sm">
              15 Min Read 23 - 05 -2023
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
