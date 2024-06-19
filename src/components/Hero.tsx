import React from "react";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import background1 from "../../public/hero-img1.png";
import background2 from "../../public/hero-img2.png";
import search from "../../public/search-icon.png";

function Hero() {
  return (
    <div className="relative bg-radial-hero h-full w-full">
      <div className="text-[#FFFFFF] text-center pt-8 absolute inset-0 space-y-[38px]">
        <h4 className="text-[16px] font-[700] leading-[17.6px] tracking-[-2%]">
          Your Gateway to Safe Online
          <span className="text-[#AFAFAF] pl-1">Shopping experiences</span>
        </h4>
        <h2 className="text-[56px] font-[800] leading-[67.54px] tracking-[-4px]">
          Redefining secure and stress-free <br /> e-commerce
        </h2>
        <button className="bg-[#FFFFFF] text-[14px] text-[#101010] gap-1 py-[16px] px-[24px] rounded-full font-[700] w-[214px] h-[56px]">
          Get Started
        </button>
        <div className="flex justify-center">
          <div className="border rounded-[12px] p-[10px] bg-[#ADADAD4D] w-100 relative">
            <div className="absolute inset-y-0 left-4 flex items-center mx-2 ">
              <Image src={search} alt="search btn" />
              {/* className="inline-block absolute top-6 left-8" */}
            </div>
            <input
              type="text"
              placeholder="Search"
              className=" py-[16px] px-[24px] rounded-[12px] w-[594px] h-[56px] text-[14px] font-[500] leading-[15.4px] tracking-[-4%] text-[#AFAFAF] pl-12"
            />
          </div>
        </div>
        <div className="flex gap-4 justify-center pt-[10px] font-medium">
          <button className="flex gap-1 items-center bg-transparent border rounded-[12px] py-[14px] px-[32px] text-[#FFFFFF] font-[500] text-[12px] leading-[13.2px] tracking-[-4%]">
    
            <IoSearch className="text-[#FFFFFF] w-4 h-4"/>
            Art Studio
          </button>
          <button className="flex gap-1 items-center bg-transparent border rounded-[12px] py-[14px] px-[32px] text-[#FFFFFF] font-[500] text-[12px] leading-[13.2px] tracking-[-4%]">
          <IoSearch className="text-[#FFFFFF] w-4 h-4"/>
            Macbook pro 2016
          </button>
          <button className="flex gap-1 items-center bg-transparent border rounded-[12px] py-[14px] px-[32px] text-[#FFFFFF] font-[500] text-[12px] leading-[13.2px] tracking-[-4%]">
          <IoSearch className="text-[#FFFFFF] w-4 h-4"/>
            Sedan Vehicle
          </button>
        </div>
      </div>

      <div className="-pl-[176px] pt-[313px] pb-[72px]">
        <Image src={background1} alt="first hero image" className="w-full"  priority/>
        <Image src={background2} alt="second hero image" className="w-full pt-6" priority/>
      </div>
    </div>
  );
}

export default Hero;
