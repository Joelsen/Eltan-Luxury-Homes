import React from "react";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/sidebar";
import pf from "../assets/res/profile photo.jpg";

const Profile = () => {
  return (
    <div>
      <div className="relative  h-screen overflow-hidden">
        <img src={pf} alt="" className="w-full" />
        <div className="absolute w-full top-0">
          <div>
            <Navbar />
          </div>
          <div>FIND A PERFECT PLACE TO LIVE LIFE</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
