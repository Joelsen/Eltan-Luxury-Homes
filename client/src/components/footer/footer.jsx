import React from "react";
import { IoLogoFacebook } from "react-icons/io5";
import { LuInstagram } from "react-icons/lu";
import { AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <section className="bg-[#19130B]">
      <div className=" max-w-[1200px] text-white pt-[10%] flex justify-between mx-auto">
        <div>
          <h1 className="font-como non-italic font-medium leading[32px] text-[22px] pb-3">
            CONTACT
          </h1>
          <h3 className="font-como non-italic font-medium leading[29px] text-[20px]">
            Eltan Luxury Homes
          </h3>
          <h3 className="font-como non-italic font-medium leading[29px] text-[20px]">
            is a real estate development company with corporate
          </h3>
          <h3 className="font-como non-italic font-medium leading[29px] text-[20px]">
            headquarters in Abuja, Nigeria’s capital city.
          </h3>
        </div>
        <div className="text-white">
          <h1 className="font-como non-italic font-medium leading[32px] text-[22px] pb-3">
            USEFUL LINKS
          </h1>
          <h1 className=" font-como non-italic font-medium leading[29px] text-[20px]">
            Home
          </h1>
          <h1 className="font-como non italic font-medium leading-[29px] text-[20px]">
            Properties
          </h1>
          <h1 className="font-como non italic font-medium leading-[29px] text-[20px]">
            Gallery
          </h1>
          <h1 className="font-como non italic font-medium leading-[29px] text-[20px]">
            Terms of service
          </h1>
        </div>
        <div className="flex flex-col ">
          <h1 className="pb-3">ENQUIRE</h1>
          <input
            className="text-[#4A4745] bg-transparent pb-3"
            type=" text"
            placeholder="NAME"
          />
          <input
            className="text-[#4A4745] bg-transparent"
            type="email"
            placeholder="E-MAIL"
          />
        </div>
      </div>
      <div className="flex gap-5 place-content-center pt-9 ">
        <IoLogoFacebook className="text-[#2e3a1a] text-2xl " />
        <LuInstagram className="text-[#2e3a1a] text-2xl " />
        <AiFillYoutube className="text-[#2e3a1a] text-2xl " />
      </div>
    </section>
  );
};

export default Footer;
