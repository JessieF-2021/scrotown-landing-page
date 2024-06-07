import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { LuYoutube } from "react-icons/lu";
import { RiTiktokLine } from "react-icons/ri";

function Footer() {
  return (
    <div className="">
      <div className="bg-[#1D171F] grid grid-cols-4 p-[72px]">
        {/* card 1 */}
        <div>
          <h2 className="uppercase  pb-4 text-[18px] font-[800] text-[#FFFFFF] leading-[19.8px] tracking-[-4%]">
            Information
          </h2>

          <p className="text-[16px] text-[#AFAFAF] font-[700] leading-[17.6px] tracking-[-2%] py-3">
            About Us
          </p>
          <p className="text-[16px] text-[#AFAFAF] font-[700] leading-[17.6px] tracking-[-2%] py-3">
            We are hiring!
          </p>
          <p className="text-[16px] text-[#AFAFAF] font-[700] leading-[17.6px] tracking-[-2%] py-3">
            Terms & Conditions
          </p>
          <p className="text-[16px] text-[#AFAFAF] font-[700] leading-[17.6px] tracking-[-2%] py-3">
            Privacy Policy
          </p>
          <p className="text-[16px] text-[#AFAFAF] font-[700] leading-[17.6px] tracking-[-2%] py-3">
            BilingPolicy
          </p>
          <p className="text-[16px] text-[#AFAFAF] font-[700] leading-[17.6px] tracking-[-2%] py-3">
            Copyright Infringement Policy
          </p>
        </div>

        {/* card 2 */}

        <div>
          <h2 className="uppercase pb-4 text-[18px] font-[800] text-[#FFFFFF] leading-[19.8px] tracking-[-4%]">
            Support
          </h2>
          <p className="text-[16px] text-[#AFAFAF] py-3 font-[700] leading-[17.6px] tracking-[-2%]">
            support@name.com.gh
          </p>
          <p className="text-[16px] text-[#AFAFAF] py-3 font-[700] leading-[17.6px] tracking-[-2%]">
            Safety Tips
          </p>
          <p className="text-[16px] text-[#AFAFAF] py-3 font-[700] leading-[17.6px] tracking-[-2%]">
            Contact Us
          </p>
          <p className="text-[16px] text-[#AFAFAF] py-3 font-[700] leading-[17.6px] tracking-[-2%]">
            FAQ's
          </p>
        </div>
        {/* card 3 */}

        <div>
          <h2 className="uppercase pb-4 text-[18px] font-[800] text-[#FFFFFF] leading-[19.8px] tracking-[-4%]">
            Features
          </h2>
          <p className="text-[16px] py-3 text-[#AFAFAF] font-[700] leading-[17.6px] tracking-[-2%]">
            Home
          </p>
          <p className="text-[16px] py-3 text-[#AFAFAF] font-[700] leading-[17.6px] tracking-[-2%]">
            Sell Product
          </p>
          <p className="text-[16px] py-3 text-[#AFAFAF] font-[700] leading-[17.6px] tracking-[-2%]">
            Messages
          </p>
          <p className="text-[16px] py-3 text-[#AFAFAF] font-[700] leading-[17.6px] tracking-[-2%]">
            Premium Offer
          </p>
          <p className="text-[16px] py-3 text-[#AFAFAF] font-[700] leading-[17.6px] tracking-[-2%]">
            Cart
          </p>
          <p className="text-[16px] py-3 text-[#AFAFAF] font-[700] leading-[17.6px] tracking-[-2%]">
            Saved
          </p>
          <p className="text-[16px] py-3 text-[#AFAFAF] font-[700] leading-[17.6px] tracking-[-2%]">
            Notifications
          </p>
        </div>

        {/* card 4 */}
        <div>
          <h2 className="uppercase pb-4 text-[18px] font-[800] text-[#FFFFFF] leading-[19.8px] tracking-[-4%]">
            Social Media
          </h2>
          <div className="flex gap-4 py-3">
            <FaXTwitter className="bg-[#FFFFFF] w-[32px] h-[32px] rounded-[50%] text-center py-[9px] px-[8px]" />
            <FaInstagram className="text-[#FFFFFF] bg-[#F00073] w-[32px] h-[32px] rounded-[50%] text-center p-[7.7px]" />
            <FaWhatsapp className="text-[#FFFFFF] bg-[#25D366] w-[32px] h-[32px] rounded-[50%] text-center p-[8px]" />
            <FaFacebook className="text-[#FFFFFF] bg-[#1877f2] w-[32px] h-[32px] rounded-[50%] text-center p-[8px]" />
            <FaLinkedinIn className="text-[#FFFFFF] bg-[#2867B2] w-[32px] h-[32px] rounded-[50%] text-center p-[8px]" />
            <LuYoutube className="text-[#FFFFFF] bg-[#FF0000] w-[32px] h-[32px] rounded-[50%] text-center px-[8px] py-[10.4px]" />
            <RiTiktokLine className="text-[#FFFFFF] bg-[#000000] w-[32px] h-[32px] rounded-[50%] text-center py-[8px] px-[9px]" />
          </div>
          <p className="text-[16px] py-3 text-[#AFAFAF] font-[700] leading-[15.4px] tracking-[-4%]">
            Get exclusive assets sent straight to your inbox
          </p>
          <div className="py-3">
            <input
              type="email"
              placeholder="Email address"
              className="w-[332px] h-[56px] bg-transparent text-[14px] py-[16px] px-[24px] font-[700] text-[#101010] border rounded-full mb-4 leading-[15.4px] tracking-[-4%]"
            />
            <button className="w-[332px] h-[56px] bg-[#FFFFFF] text-[14px] py-[16px] px-[24px] font-[700] text-[#101010] rounded-full leading-[15.4px] tracking-[-4%]">
              Subscribe to newsletter
            </button>
          </div>
        </div>

        <div>
          {/* <hr className="border-b border-gray-200 mx-auto w-full" /> */}
          <div className="border-b border-[#CFCFCF] w-[1361px] mt-[72px]"></div>
        </div>
      </div>

      <div className="bg-[#361D42] py-[32px] flex items-center justify-center gap-[18px]">
        <h3 className="text-[32px] font-[800] text-[#FFFFFF] leading-[43.71px] tracking-[-6%]">
          JijiKiller
        </h3>
        <p className="text-[#CFCFCF] font-[500] text-[14px] leading-[15.4px] tracking-[-4%]">
          Copyright@2024.JijiKiller Company. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
