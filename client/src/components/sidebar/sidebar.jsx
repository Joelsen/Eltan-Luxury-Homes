import React, { useState } from "react";
import { Slant as Hamburger } from "hamburger-react";
import "./sidebar.css";
import logo from "../../assets/res/mainlogo.png";
import { IoLogoFacebook } from "react-icons/io5";
import { LuInstagram } from "react-icons/lu";
import { ImYoutube } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <aside>
      <div className="relative  z-30  text-white">
        <Hamburger onToggle={() => setShowSidebar((preValue) => !preValue)} />
      </div>

      {showSidebar && (
        <section className="slideInRight grid place-items-center h-[100vh] bg-[#565955] w-[500px] top-0 absolute right-0">
          <div>
            <img className="w-[20rem] mx-auto mb-10" src={logo} alt="" />
            <h1 className="text-4xl text-white flex justify-center">
              ELTAN LUXURY{" "}
            </h1>
            <h1 className="text-4xl text-white flex justify-center">HOMES</h1>
            <div className="text-white text-center my-5 space-y-2 tracking-[0.2rem]">
              <p>WE PRIDE OURSELVES AS</p>
              <p>LEADERS IN THE</p>
              <p>PROPERTY DEVELOPMENT</p>
              <p>INDUSTRY</p>
            </div>
            <div className="flex gap-5 justify-center">
              <IoLogoFacebook className="text-[#2e3a1a] text-2xl" />
              <LuInstagram className="text-[#2e3a1a] text-2xl" />
              <ImYoutube className="text-[#2e3a1a] text-2xl" />
            </div>
          </div>

          <div className=" flex gap-2">
            <Link to={"/login"}>
              <div>
                <button className="rounded-full h-10 w-[5rem] bg-[#2e3a1a] text-white">
                  Login
                </button>
              </div>
            </Link>
            <Link to={"/signup"}>
              <div>
                <button className="rounded-full h-10 w-[5rem] bg-[#2e3a1a] text-white">
                  Sign up
                </button>
              </div>
            </Link>
          </div>
        </section>
      )}
    </aside>
  );
};

export default Sidebar;
