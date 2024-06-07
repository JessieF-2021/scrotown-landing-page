import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo.png";
import FavIcon from "../../public/fav-icon.png";
import Notify from "../../public/bell-not.png";
import SigninIcon from "../../public/login-line.png";
function NavBar() {
  return (
    <div className="bg-[#1F154B] flex justify-between h-full w-full px-[72px]">
      <div className="flex items-center">
        <Image src={Logo} alt="nav logo" priority className="p-[10px]" />
      </div>
      <div>
        {/* <button className="sm:hidden focus:outline text-3xl absolute insert-0">&#9776;</button> */}
        <nav>
          <ul className="flex gap-[20px] items-center p-[10px]">
            <li>
              {/* <Link href=""> */}
                <Image
                  src={FavIcon}
                  width={18}
                  height={18}
                  alt="favourites icon"
                />
              {/* </Link> */}
            </li>
            <li>
              {/* <Link href=""> */}
                <Image
                  src={Notify}
                  width={18}
                  height={18}
                  alt="notifications icon"
                />
              {/* </Link> */}
            </li>
            <li>
              <Link href="/about">
                <div
                  className="inline-flex 
                items-center bg-[#FFFFFF] 
                rounded-full
                 py-[16px] 
                px-[24px] 
                font-[500] 
                gap-1
  "
                >
                  <Image
                    src={SigninIcon}
                    width={18}
                    height={18}
                    alt="signin button"
                  />

                  <button
                    type="button"
                    className="text-[#101010]
                     text-[14px] 
                    leading-[15.4px] 
                    tracking-[-4%] 
                    font-[700]
                    "
                    // className="bg-[#FFFFFF] rounded-full py-[5px] px-[15px] font-medium relative"
                  >
                    Sign in
                  </button>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
