import React from "react";
import bg from "../../public/heroBg.svg";
import bgMobile from "../../public/transformBg.svg";
import Image from "next/image";

export default function Transform() {
  return (
    <div className="w-full p-20 -650:p-8 flex justify-center items-center relative">
      <div className="flex px-5 bg-[#22405C]  justify-around py-[100px] -650:py-[60px] items-center w-[90%] -650:w-full rounded-[20px] text-white heroBg transform-cont -650:flex-col -650:gap-10 relative">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl -650:text-3xl font-[400] flex flex-col leading-[150%]">
            <span>Transforming your</span>
            <span className="font-[600]">Ideas into reality</span>
          </h2>
          <p className="max-w-[400px]">
            Let's build something extraordinary together to captivate your
            audience.
          </p>
        </div>
        <div className="border-white rounded-[50%] h-[200px] w-[200px] -650:h-[150px] -650:w-[150px] flex items-center justify-center border-2">
          <p className="font-[500] -650:text-sm">Let's Work Together!</p>
        </div>
        <Image
          className="absolute md:flex hidden h-full top-0 left-0 object-cover"
          alt=""
          src={bg}
        />
        <Image
          className="absolute flex md:hidden h-full top-0 left-0 object-cover"
          alt=""
          src={bg}
        />
      </div>
    </div>
  );
}
