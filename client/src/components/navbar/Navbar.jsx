import React from "react";
import Sidebar from "../sidebar/sidebar";
import { IoLogoFacebook } from "react-icons/io5";
import { LuInstagram } from "react-icons/lu";
import { GrTwitter } from "react-icons/gr";
import { SiWhatsapp } from "react-icons/si";
import logo from "../../assets/res/mainlogo.png";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-10">
      <div className="flex gap-5">
        <IoLogoFacebook className="text-[#2e3a1a] text-2xl" />
        <LuInstagram className="text-[#2e3a1a] text-2xl" />
        <GrTwitter className="text-[#2e3a1a] text-2xl" />
        <SiWhatsapp className="text-[#2e3a1a] text-2xl" />
      </div>
      <div className="flex items-center text-white gap-6 font-rale">
        <p>HOME</p>
        <p>ABOUT</p>
        <p>PROPERTIES</p>
        <img className="w-[10rem]" src={logo} alt="" />
        <p>GALLERY</p>
        <p>TEAM</p>
        <p>CONTACT</p>
      </div>

      <Sidebar />
    </nav>
  );
};

export default Navbar;