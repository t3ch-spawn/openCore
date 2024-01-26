import Image from "next/image";
import logo from "../../public/logo.svg";
import hamburger from "../../public/hamburger.svg";
import pc from "../../public/pc.jpg";

const Hero = () => {
  return (
    <div className="px-24 pb-48 heroBg flex flex-col justify-center gap-10 items-center">
      <nav className="flex items-center border border-neutral-300 rounded-full w-fit mt-10 bg-white">
        <div className="border-r border-neutral-300 px-5 py-3">
          <Image src={logo} alt="logo" className="w-5 h-5 object-cover" />
        </div>
        <button className="flex justify-center items-center px-5 py-3">
          <Image src={hamburger} alt="menu" className="w-5 h-5 object-cover" />
        </button>
      </nav>

      <div className="flex mt-20 items-center w-full">
        <div className="text-6xl w-1/2 font-semibold text-[#344054]">
          Atlas Premier Knowledge Blogs:
        </div>
        <div className="text-xl text-[#667085] w-[40%]">
          "Immerse yourself in the latest knowledge and research from our team
          of software engineers and design professionals.
        </div>
      </div>

      <div className="flex items-center w-full h-[50vh] rounded-3xl shadow-lg mt-20 bg-white overflow-hidden ">
        <Image src={pc} alt="pc" className="w-1/2 h-full object-cover" />
        <div className="py-2 pr-2 bg-white w-1/2 h-full">
          <div className="bg-[#F8F8F8] rounded-r-xl w-full h-full text-[#667085] flex justify-between flex-col items-center py-10">
            <div className="flex flex-col gap-2 w-3/4">
              <span className="flex gap-6 text-sm">
                FREELANCING 101 <span>●</span> Joseph Patrick
              </span>
              <span className="text-4xl font-medium">
                07 Ways to get Consistent Clients from Social Media
              </span>
            </div>
            <span className="flex w-3/4 gap-6 text-sm">
              15 Min Read 23 - 05 -2023
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
