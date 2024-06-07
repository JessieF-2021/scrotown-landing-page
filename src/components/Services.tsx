import React from "react";
import Image from "next/image";
import Icon1 from "../../public/icon1.png";
import Icon2 from "../../public/icon2.png";
import Icon3 from "../../public/icon3.png";

function Services() {
  return (
    <div className="p-[72px]">
      <div className=" text-center pb-[72px]">
        <h4 className="uppercase text-[#7F459A] text-[20px] font-[700] leading-[22px] tracking-[-4%]">
          Escrow Services
        </h4>
        <h2 className="text-[56px] font-[800] leading-[67.54px] tracking-[-4px] py-2">
          Where trust begins
        </h2>
        <p className="text-[#505050] text-[20px] font-[500] leading-[22px] tracking-[-2%] py-2">
          Controlled, secure shopping
        </p>
        <button className="bg-[#1D171F] text-[#FFFFFF] px-[24px] py-[16px] rounded-full mt-4 w-[214px] text-[14px] font-[700] leading-[15.4px] tracking-[-4%]">
          Try it out
        </button>
      </div>
      <div className="grid grid-cols-3 gap-7 ">
        {/* Card 1 */}
        <div>
          <div className="">
            <Image src={Icon1} alt="security icon" />
            <h2 className="text-[32px] font-[800] pt-4 leading-[32.19px] tracking-[-2px]">
              Guaranteed security
            </h2>
            <p className="text-[16px] text-[#505050] pt-4 font-[500] leading-[17.6px] tracking-[-2%]">
              Escrow services provide a secure payment environment for both
              buyers and sellers, protecting funds until the terms of the
              transaction are met satisfactorily.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div>
          <div>
            <Image src={Icon2} alt="resolution icon" />
            <h2 className="text-[32px] font-[800] pt-4 leading-[32.19px] tracking-[-2px]">
              Dispute Resolution
            </h2>
            <p className="text-[16px] text-[#505050] pt-4 font-[500] leading-[17.6px] tracking-[-2%]">
              Escrow services offer a neutral third-party intermediary to
              resolve disputes, ensuring fair outcomes and reducing the risks of
              conflicts between parties.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div>
          <div>
            <Image src={Icon3} alt="trust icon" />
            <h2 className="text-[32px] font-[800] pt-4 leading-[32.19px] tracking-[-2px]">
              Trust Building
            </h2>
            <p className="text-[16px] text-[#505050] pt-4 font-[500] leading-[17.6px] tracking-[-2%]">
              By holding funds in escrow, this service fosters trust between
              buyers and sellers, encouraging confident transactions and
              reducing fraud or non-payment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
