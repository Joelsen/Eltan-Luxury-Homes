import React from "react";

const Footer = () => {
  return (
    <div className=" bg-[#19130B] text-white flex pt-[10%] ">
      <div>
        <h1>CONTACT</h1>
        <h1 className="">Eltan Luxury Homes</h1>
        <h1>is a real estate development company with corporate</h1>
        <h1> headquarters in Abuja, Nigeria’s capital city.</h1>
      </div>
      <div className="text-white">
        <h1>USEFUL LINKS</h1>
        <h1>Home </h1>
        <h1>Properties </h1>
        <h1>Gallery</h1>
        <h1>Terms of service</h1>
      </div>
      <div>
        <h1>ENQUIRE</h1>
        <input className="text-[#4A4745]" type=" text" placeholder=" NAME" />
        <input className="text-[#4A4745]" type="email" placeholder="E-MAIL" />
      </div>
    </div>
  );
};

export default Footer;
