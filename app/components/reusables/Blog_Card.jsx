import React from "react";
import Image from "next/image";

export default function Blog_Card(props) {
  return (
    // Container for whole card
    <div className="max-w-[330px] border-[13px] border-white">
      {/* Container for image */}
      <div className="card-icon-cont flex justify-center items-center">
        <Image
          src={props.src}
          className="max-w-[180px] max-h-[180px] -650:max-w-[100pxgit ]"
          alt="rocket"
        />
      </div>

      {/* Container for typography */}
      <div className="max-w-[600px] flex flex-col gap-4 bg-[white] w-full py-8 pl-8">
        <p className="text-xs text-[#667085] font-[500]">
          FREELANCING 101 <span className="mx-4">●</span> {props.name}
        </p>

        <p className="text-2xl -650:text-xl font-[500] max-w-[400px] text-[#344054] leading-[150%]">
          {props.heading}
        </p>

        <p className="text-xs text-[#667085] font-[500] mt-[80px]">
          15 Min Read <span className="mx-4">●</span> 23 - 05 -2023
        </p>
      </div>
    </div>
  );
}
