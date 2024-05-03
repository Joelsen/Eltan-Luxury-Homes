import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar/sidebar";
import { IoLogoFacebook } from "react-icons/io5";
import { LuInstagram } from "react-icons/lu";
import { GrTwitter } from "react-icons/gr";
import { SiWhatsapp } from "react-icons/si";
import logo from "../../assets/res/mainlogo.png";
import { Link } from "react-router-dom";
function Navbar() {
  const [loggedin, setLoggedin] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setLoggedin(localStorage.getItem("user"));
    }
  });
  const logout = () => {
    localStorage.removeItem("user");
    setLoggedin(false);
  };
  return (
    <nav className="flex justify-between items-center p-10">
      <div className="flex gap-5">
        <IoLogoFacebook className="text-[#2e3a1a] text-2xl" />
        <LuInstagram className="text-[#2e3a1a] text-2xl" />
        <GrTwitter className="text-[#2e3a1a] text-2xl" />
        <SiWhatsapp className="text-[#2e3a1a] text-2xl" />
      </div>
      <div className="flex items-center text-white gap-6 font-rale">
        <div>
          <p>HOME</p>
        </div>

        <div>
          <a href="#story"> ABOUT</a>
        </div>
        <Link to={"/properties"}>
          <div>
            <p>PROPERTIES</p>
          </div>
        </Link>

        <img className="w-[10rem]" src={logo} alt="" />
        <p>GALLERY</p>
        <p>TEAM</p>
        <p>CONTACT</p>
      </div>
      {loggedin && (
        <div>
          <p className="text-white">Welcome {loggedin} </p>
          <p onClick={logout} className="text-white cursor-pointer">
            Log Out{" "}
          </p>
        </div>
      )}

      <Sidebar />
    </nav>
  );
}

export default Navbar;
