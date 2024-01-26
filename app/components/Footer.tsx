import Image from "next/image";
import instagram from "../../public/instagramAlt.svg";
import facebook from "../../public/facebookAlt.svg";
import twitter from "../../public/twitterAlt.svg";
import linkedin from "../../public/linkedinAlt.svg";

const Footer = () => {
  return (
    <div className="bg-[#2F5478] md:p-24 p-7">
      <div className="bg-white p-10 pb-0 rounded-3xl relative flex flex-col justify-center items-center">
        <div className="flex md:flex-row flex-col w-full md:gap-0 gap-16 md:justify-between">
          <div className="text-lg flex flex-col gap-6 md:gap-10">
            <div className="flex flex-col md:text-start text-center">
              <span className="font-semibold text-[#1D2939]">Say Hello!</span>
              <p className="text-[#475467]">Atlaspremier@gmail.com</p>
            </div>
            <div className="flex md:justify-start justify-between items-center gap-4">
              <button className="w-8 h-8 bg-blue-100 flex justify-center items-center rounded-md p-1">
                <Image src={instagram} alt="instagram" className="w-8 h-8 " />
              </button>{" "}
              <button className="w-8 h-8 bg-blue-100 flex justify-center items-center rounded-md p-1">
                <Image src={facebook} alt="facebook" className="w-7 h-7 " />
              </button>{" "}
              <button className="w-8 h-8 bg-blue-100 flex justify-center items-center rounded-md p-1">
                <Image src={twitter} alt="twitter" className="w-6 h-6 " />
              </button>{" "}
              <button className="w-8 h-8 bg-blue-100 flex justify-center items-center rounded-md p-1">
                <Image src={linkedin} alt="linkedin" className="w-7 h-7 " />
              </button>
            </div>
          </div>
          <ul className="grid grid-cols-2 text-[#475467] gap-x-10 gap-y-6 md:gap-4">
            <li>Home</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Work</li>
          </ul>
        </div>
        <div className="md:mt-16 mt-10 flex md:flex-row flex-col items-center justify-between w-full text-[#475467]">
          <span>NewYork, US</span>
          <span>AtlasPremier. All Rights Reserved</span>
        </div>
        <span className="md:text-[10.5rem] text-[2.3rem] text-[#2F5478] leading-5 mt-16  md:leading-[7rem] md:mt-20 font-extrabold">
          Atlas Premier
        </span>
      </div>
    </div>
  );
};

export default Footer;
