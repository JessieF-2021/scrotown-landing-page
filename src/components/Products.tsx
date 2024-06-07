import React from "react";
import Image from "next/image";
import Img1 from '../../public/productImg1.png';
import Img2 from '../../public/productImg2.png';

function Products() {
  return (
    <div className="p-[72px]">
      <div className="text-center">
        <h4 className="uppercase text-[#7F459A] font-[700] text-[20px] leading-[22px] tracking-[-4%]">Escrow Services</h4>
        <h2 className="capitalize text-[56px] font-[800] leading-[67.54px] tracking-[-4%]">Elevate your selling experience</h2>
        <p className="text-[#505050] text-[20px] font-[500] leading-[22px] tracking-[-2%]">
          Take your selling experience to new heights with our comprehensive
          suite of seller tools designed <br /> to maximize your success.
        </p>
        <button className="bg-[#1D171F] py-[16px] px-[24px] rounded-full text-[#FFFFFF] m-4 w-[214px] h-[56px]">Sell your product</button>
      </div>
      <div className="pt-4 -mx-[72px]">
        <Image src={Img1} alt="first product image" className="pb-4 w-full" priority/>
        <Image src={Img2} alt="second product image" className="w-full" priority/>
      </div>
    </div>
  );
}

export default Products;
