import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { LuYoutube } from "react-icons/lu";
import { RiTiktokLine } from "react-icons/ri";
import Link from "next/link";


function Footer() {

  const socialMediaLinks = [
  { icon: <FaXTwitter size={24}/>, label: "Twitter", backgroundColor: "bg-twitter", textColor: "text-black", link: "/twitter"},
  { icon: <FaInstagram size={24}/>, label: "Instagram", backgroundColor: "bg-instagram", textColor: "text-white", link: "/instagram" },
  { icon: <FaWhatsapp size={24}/>, label: "WhatsApp", backgroundColor: "bg-whatsapp", textColor: "text-white", link: "/whatsapp" },
  { icon: < FaFacebook size={24}/>, label: "Facebook", backgroundColor: "bg-facebook", textColor: "text-white", link: "/facebook" },
  { icon: <FaLinkedinIn size={24}/>, label: "LinkedIn", backgroundColor: "bg-linkedin", textColor: "text-white", link: "/linkedin" },
  { icon: <LuYoutube size={24}/>, label: "YouTube", backgroundColor: "bg-youtube", textColor: "text-white", link: "/youtube" },
  { icon: <RiTiktokLine size={24}/>, label: "Tiktok", backgroundColor: "bg-tiktok", textColor: "text-white", link: "/tiktok" }
]
  return (
    <div className="">
      <div className="bg-[#1D171F] grid grid-cols-4 p-[72px]">
        {/* card 1 */}
        <div>
          <h2 className="footer-head">
            Information
          </h2>

          <p className="footer-p">
            About Us
          </p>
          <p className="footer-p">
            We are hiring!
          </p>
          <p className="footer-p">
            Terms & Conditions
          </p>
          <p className="footer-p">
            Privacy Policy
          </p>
          <p className="footer-p">
            BilingPolicy
          </p>
          <p className="footer-p">
            Copyright Infringement Policy
          </p>
        </div>

        {/* card 2 */}

        <div>
          <h2 className="footer-head">
            Support
          </h2>
          <p className="footer-p">
            support@name.com.gh
          </p>
          <p className="footer-p">
            Safety Tips
          </p>
          <p className="footer-p">
            Contact Us
          </p>
          <p className="footer-p">
            FAQ's
          </p>
        </div>
        {/* card 3 */}

        <div>
          <h2 className="footer-head">
            Features
          </h2>
          <p className="footer-p">
            Home
          </p>
          <p className="footer-p">
            Sell Product
          </p>
          <p className="footer-p">
            Messages
          </p>
          <p className="footer-p">
            Premium Offer
          </p>
          <p className="footer-p">
            Cart
          </p>
          <p className="footer-p">
            Saved
          </p>
          <p className="footer-p">
            Notifications
          </p>
        </div>

        {/* card 4 */}
        <div>
          <h2 className="footer-head">
            Social Media
          </h2>
          {/* <ul className="flex space-x-4 gap-4">
            {socialMediaLinks.map((social: any) => {
              return (

                <li key={social.label}>
                  
                 <Link href={social.link}>{social.icon}</Link> 

                </li>
              )
            })}
          </ul> */}

          <div className="flex gap-4 social-icon p-2">
            {socialMediaLinks.map((social) => (
              <Link href={social.link} key={social.label} target="_blank" rel="noopener noreferrer" aria-label={social.label}
              className={`rounded-full p-2 ${social.backgroundColor} ${social.textColor}`}>
        
                {social.icon}
                
                </Link>
            ))}
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
