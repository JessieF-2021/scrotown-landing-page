import React from "react";

import Image from "next/image";

import Card1Img1 from "../../public/card1.png";

import Card1Img2 from "../../public/card2.png";
import Card1Img3 from "../../public/card3.png";

import Card2Img1 from "../../public/card4.png";
import Card2Img2 from "../../public/card5.png";
import Card2Img3 from "../../public/card6.png";
import Card3Img1 from "../../public/card7.png";
import Card3Img2 from "../../public/card8.png";
import Card3Img3 from "../../public/card9.png";

function Collection() {
  return (
    <div className="p-[72px]">
      <div className="flex justify-between">
        <div className="pb-[72px]">
          <h3 className="uppercase text-[20px] text-[#7F459A] font-[700] leading-[22px] tracking-[-4%]">
            Product collections
          </h3>
          <h2 className="text-[56px] font-[800] leading-[67.54px] tracking-[-4px]">Curated collections</h2>
          <p className="text-[#505050] font-[500] text-[20px] leading-[22px] tracking-[-2%]">
            Get all the products you need with our product collections.
          </p>
        </div>
        <div className="mt-[50px]">
          <button className="bg-[#1D171F] text-[#FFFFFF] py-[16px] px-[24px] rounded-full text-[14px] font-[700] leading-[15.4px] tracking-[-4%]">
            Explore collections
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {/* card 1 */}
        <div>
          <Image src={Card1Img1} alt="car" className="pb-1" />
          <div className="flex gap-1">
            <Image src={Card1Img2} alt="motor cycle" />
            <Image src={Card1Img3} alt="truck" />
          </div>
          <div className="flex justify-between items-center pt-3">
            <div className="space-y-3">
              <h3 className="text-[24px] font-[800] leading-[26.4px] tracking-[-4%]">Vehicles collections</h3>
              <p className="text-[#505050] text-[20px] font-[500] leading-[22px] tracking-[-2%]">1000 products</p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <div className="bg-gray-900 w-[5px] h-[5px] rounded-full" />
              <div className="bg-gray-900 w-[5px] h-[5px] rounded-full" />
              <div className="bg-gray-900 w-[5px] h-[5px] rounded-full" />
              <div />
            </div>
            <div />
          </div>
        </div>

{/* card 2 */}
        <div>
          <Image src={Card2Img1} alt="laptop" className="pb-1" />
          <div className="flex gap-1">
            <Image src={Card2Img2} alt="flat screen tv" />
            <Image src={Card2Img3} alt="phones" />
          </div>
          <div className="flex justify-between items-center pt-3">
            <div className="space-y-3">
              <h3 className="text-[24px] font-[800] leading-[26.4px] tracking-[-4%]">Technology collections</h3>
              <p className="text-[#505050] text-[20px] font-[500] leading-[22px] tracking-[-2%]">1000 products</p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <div className="bg-gray-900 w-[5px] h-[5px] rounded-full" />
              <div className="bg-gray-900 w-[5px] h-[5px] rounded-full" />
              <div className="bg-gray-900 w-[5px] h-[5px] rounded-full" />
              <div />
            </div>
            <div />
          </div>
        </div>
        {/* card 3 */}
        <div>
          <Image src={Card3Img1} alt="penthouse" className="pb-1" />
          <div className="flex gap-1">
            <Image src={Card3Img2} alt="apartment" />
            <Image src={Card3Img3} alt="semi detached" />
          </div>
          <div className="flex justify-between items-center pt-3">
            <div className="space-y-3">
              <h3 className="text-[24px] font-[800] leading-[26.4px] tracking-[-4%]">Buildings collections</h3>
              <p className="text-[#505050] text-[20px] font-[500] leading-[22px] tracking-[-2%]">1000 products</p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <div className="bg-gray-900 w-[5px] h-[5px] rounded-full" />
              <div className="bg-gray-900 w-[5px] h-[5px] rounded-full" />
              <div className="bg-gray-900 w-[5px] h-[5px] rounded-full" />
              <div />
            </div>
            <div />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
