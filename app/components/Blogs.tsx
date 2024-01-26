"use client";
import React from "react";
import Image from "next/image";
import behance from "../../public/behance.png";
import dribble from "../../public/dribble.png";
import Facebook from "../../public/Facebook.png";
import Instagram from "../../public/Instagram.png";
import LinkedIn from "../../public/LinkedIn.png";
import Blog_Card from "./reusables/Blog_Card";
import rocket from "../../public/rocket.png";
import lightning from "../../public/lightning.png";

const blogTabs = [
  { name: "All Blogs", active: true },
  { name: "Trends", active: false },
  { name: "Research", active: false },
  { name: "In-house Knowledge", active: false },
];

const images = [Facebook, LinkedIn, Instagram, behance, dribble];

const cards = [
  {
    name: "Charley Den",
    heading: "Enhance UX: Designing Better UX/UI",
    src: rocket,
  },
  {
    name: "Smith Jack",
    heading: "Designing Impression: The Power of First Impressions",
    src: lightning,
  },
  {
    name: "Breth Mathew",
    heading: "Case Study: FlipX, an Investment Attraction Startup",
    src: rocket,
  },
  {
    name: "Lilly Bella",
    heading: "Mastering Startup Branding: Expanding Digital Presence",
    src: lightning,
  },
  {
    name: "Gigi Selena",
    heading: "Designing for Productivity: Efficiency Rules",
    src: lightning,
  },
  {
    name: "David Travis ",
    heading: "Kickstart your UI/UX design career?",
    src: rocket,
  },
];

export default function Blogs() {
  return (
    <div className="w-full flex flex-col gap-10 mt-20 items-center">
      {/* Container for heading and tabs */}
      <div className="flex justify-between w-[80%]">
        <h2 className="text-[#344054] text-3xl font-[700]">Blogs</h2>

        <div className="flex items-center gap-6">
          {blogTabs.map((tab) => {
            return (
              <div
                className={`${
                  tab.active
                    ? "text-[#294F74] border-[#294F74] border-[1px] rounded-[30px] px-3 p-1"
                    : "text-[#98A2B3]"
                } font-[500]`}
              >
                {tab.name}
              </div>
            );
          })}
        </div>
      </div>

      {/* Container with icons and card */}
      <div className="flex w-[80%] justify-around overflow-hidden rounded-3xl">
        {/* Cont for images */}
        <div className="flex gap-4 items-center justify-center blog-icons-cont w-full py-8">
          {images.map((img) => {
            return <Image className="max-w-[60px]" src={img} alt="image" />;
          })}
        </div>

        {/* Container for card */}
        <div className="max-w-[600px] flex flex-col gap-4 bg-[#F8F8F8] w-full py-8 pl-8">
          <p className="text-xs text-[#294F74] font-[500]">
            FREELANCING 101 <span>•</span> William George
          </p>

          <p className="text-3xl font-[500] max-w-[400px] text-[#344054] leading-[150%]">
            07 Ways to get Consistent Clients from Social Media
          </p>

          <p className="text-xs text-[#294F74] font-[500] mt-[80px]">
            15 Min Read <span>•</span> 23 - 05 -2023
          </p>
        </div>
      </div>

      {/* Container for all the cards */}
      <div className="w-[80%] justify-center justify-items-center grid grid-cols-[repeat(auto-fit,_minmax(330px,_330px))] gap-8">
        {cards.map((card) => {
          return (
            <Blog_Card name={card.name} heading={card.heading} src={card.src} />
          );
        })}
      </div>
    </div>
  );
}
