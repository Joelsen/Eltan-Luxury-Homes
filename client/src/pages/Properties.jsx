import React from "react";
import asset4 from "../assets/res/asset4.jpeg";
import asset5 from "../assets/res/asset5.jpeg";
import asset6 from "../assets/res/asset6.jpeg";
import asset7 from "../assets/res/asset7.jpeg";
function Properties() {
  return (
    <div>
      <h1 className="text-center non-italic leading-[70px] text-6xl font-como font-normal p-8">
        PROPERTIES
      </h1>
      <h2 className="text-center non-italic font-rale tracking-widest text-[#ab0a1f] text-[18px] leading-[29px] font-medium">
        PROPERTY TYPES AT ELTAN LUXURY HOMES
      </h2>
      <div className="flex pt-8 items-center gap-8 justify-center mx-auto max-w-[1200px]">
        <div className=" w-[50%]">
          <img src={asset4} alt="" />
          <h1 className="text-center font-como non-italic text-[22px] leading-[32px] pt-4">
            SEMI-DETACHED DUPLEX
          </h1>
          <h2 className="font-como text-[#b2b2b2] leading-[29px] text-[20px] non-italic font-medium text-center">
            Semi Detached Duplex with Penthouse
          </h2>
          <h4 className="text-center p-2 font-rale text-[15px] leading-[23px] font-medium text-[#d7926b] non-italic  border-b-2 border-[#d7926b] w-fit mx-auto">
            VIEW MORE
          </h4>
        </div>
        <div className="w-[50%]">
          <img src={asset5} alt="" />
          <h1 className="text-center font-como non-italic text-[22px] leading-[32px] pt-4">
            FULLY DETACHED DUPLEX WITH PENTHOUSE
          </h1>
          <h2 className="font-como text-[#b2b2b2] leading-[29px] text-[20px] non-italic font-medium text-center">
            fully detached duplex with penthouse house
          </h2>
          <h4 className="text-center p-2 font-rale text-[15px] leading-[23px] font-medium text-[#d7926b] non-italic  border-b-2 border-[#d7926b] w-fit mx-auto">
            VIEW MORE
          </h4>
        </div>
      </div>
      <div className="flex pt-8 items-center gap-8 justify-center mx-auto max-w-[1200px]">
        <div className=" w-[50%]">
          <img src={asset6} alt="" />
          <h1 className="text-center font-como non-italic text-[22px] leading-[32px] pt-4">
            SEMI DETACHED DUPLEX WITH PENTHOUSE
          </h1>
          <h2 className="font-como text-[#b2b2b2] leading-[29px] text-[20px] non-italic font-medium text-center">
            Semi Detached Duplex with Penthouse
          </h2>
          <h4 className="text-center p-2 font-rale text-[15px] leading-[23px] font-medium text-[#d7926b] non-italic  border-b-2 border-[#d7926b] w-fit mx-auto">
            VIEW MORE
          </h4>
        </div>

        <div className="w-[50%]">
          <img src={asset7} alt="" />
          <h1 className="text-center font-como non-italic text-[22px] leading-[32px] pt-4">
            LAND AND INFRASTRUCTURE
          </h1>
          <h2 className="font-como text-[#b2b2b2] leading-[29px] text-[20px] non-italic font-medium text-center">
            Land and Infrastructure (300SQM & 600SQM)
          </h2>
          <h4 className="p-2 font-rale text-[15px] leading-[23px] font-medium text-[#d7926b] non-italic  border-b-2 border-[#d7926b] w-fit mx-auto">
            VIEW MORE
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Properties;
