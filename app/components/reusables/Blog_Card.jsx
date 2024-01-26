import React from "react";
import Image from "next/image";

export default function Blog_Card(props) {
  return (
    // Container for whole card
    <div className="max-w-[330px] -650:max-w-[280px] border-[13px] border-white shadow-lg">
      {/* Container for image */}
      <div className="card-icon-cont flex justify-center items-center">
        <Image
          src={props.src}
          className="max-w-[180px] max-h-[180px] -650:max-w-[100pxgit ]"
          alt="rocket"
          width={200}
          height={200}
        />
      </div>

      {/* Container for typography */}
      <div className="max-w-[600px] flex flex-col gap-4 bg-[white] w-full py-8 pl-8">
        <p className="text-xs text-[#667085] font-[500]">
          {props.tags[0]} <span className="mx-4">●</span> {props.tags[1]}
        </p>

        <p className="text-2xl -650:text-xl font-[500] max-w-[400px] text-[#344054] leading-[150%]">
          {props.heading}
        </p>

        <p className="text-xs text-[#667085] font-[500] mt-[80px]">
          {props.readTime} <span className="mx-4">●</span> {props.date}
        </p>
      </div>
    </div>
  );
}
