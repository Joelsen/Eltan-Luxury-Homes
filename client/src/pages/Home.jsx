import React from "react";
import "./Home.css";

import Navbar from "../components/navbar/Navbar";
import Story from "../components/story/story";
import asset2 from "../assets/res/asset2.jpeg";
import asset3 from "../assets/res/asset 3.jpeg";
import flat from "../assets/res/flat.jpg";
import asset13 from "../assets/res/asset13.jpeg";
import { LiaGreaterThanSolid } from "react-icons/lia";
import bgvideo from "../assets/res/bgvideo.mp4";
import asset9 from "../assets/res/asset9.jpeg";
import sd from "../assets/res/sd.jpg";
import Footer from "../components/footer/footer";

export const Home = () => {
  return (
    <div className="">
      {/* home section */}
      <section className="h-[100vh] relative">
        <video
          autoPlay
          muted
          loop
          id="bgvideo"
          className="w-[100vw] aspect-auto"
        >
          <source src={bgvideo} type="video/mp4" />
        </video>
        <div className="absolute top-0 w-full">
          <Navbar />

          <div className="font-rale">
            <h1 className="text-8xl text-white flex pt-[10%] justify-center align-middle text-center font-como tracking-widest">
              ELTAN LUXURY HOMES
            </h1>
            <p className=" text-white flex justify-center pt-[2%] text-base font-medium tracking-[0.8rem] ">
              ELTAN LUXURY HOMES REDEFINES THE
            </p>
            <p className=" text-white flex justify-center text-base font-medium  tracking-[0.8rem]">
              MEANING OF AFFORDABLE
            </p>
            <p className=" text-white flex justify-center text-base font-medium tracking-[0.8rem]">
              {" "}
              LUXURY
            </p>
          </div>
        </div>
      </section>
      <section>
        {/* story section */}
        <div className="mt-[10rem]">
          <Story />
        </div>
        <div className="flex justify-center mr-[20%] gap-[10%] pt-[10%]">
          <div className="  pl-[0.1%]">
            <h1 className="font-como text-[28px] font-medium not-italic">
              WE PRIDE OURSELVES AS
            </h1>
            <h1 className="font-como text-[28px] font-medium not-italic">
              LEADERS IN THE PROPERTY
            </h1>
            <h1 className="font-como text-[28px] font-medium not-italic">
              DEVELOPMENT INDUSTRY AS
            </h1>
            <h1 className="font-como text-[28px] font-medium not-italic">
              WE OFFER TO OUR CLIENTS,
            </h1>
            <h1 className="font-como text-[28px] font-medium not-italic">
              PROPERTIES WITH
            </h1>
            <h1 className="font-como text-[28px] font-medium not-italic">
              COMPETITIVE AS WELL AS
            </h1>
            <h1 className="font-como text-[28px] font-medium not-italic">
              AFFORDABLE PRICING.
            </h1>
          </div>
          <div className="flex  relative ">
            <img className="" src={asset2} alt="" />
            <img
              className="mr-[10%] absolute -right-80 top-32"
              src={asset3}
              alt=""
            />
          </div>
        </div>
        <div className="flex justify-between py-32 bg-[#fafbf6]">
          <div className="relative grid place-items-center">
            <h1 className="font-como Garamond font-normal text-9xl text-[#f7e3d8] not-italic ">
              412
            </h1>
            <h1 className="font-rale font-medium text-sm text-[#000] not-italic absolute flex pt-7">
              SQUARE AREAS
            </h1>
          </div>
          <div className="relative grid place-items-center">
            <h1 className="font-como Garamond font-normal text-9xl text-[#f7e3d8] not-italic ">
              519
            </h1>
            <h1 className="font-rale font-medium text-sm text-[#000] not-italic absolute pt-7">
              CAR PARKING AREAS
            </h1>
          </div>
          <div className="relative grid place-items-center">
            <h1 className="font-como Garamond font-normal text-9xl text-[#f7e3d8] not-italic ">
              170
            </h1>
            <h1 className="font-rale font-medium text-sm text-[#000] not-italic absolute pt-7">
              HOUSES
            </h1>
          </div>
          <div className="relative grid place-items-center">
            <h1 className="font-como Garamond font-normal text-9xl text-[#f7e3d8] not-italic ">
              262
            </h1>
            <h1 className="font-rale font-medium text-sm text-[#000] not-italic absolute pt-7">
              ROOMS
            </h1>
          </div>
        </div>
        <div className="flex">
          <img className="w-[50%]" src={flat} alt="" />

          <div className="bg-white flex-col flex justify-center w-full items-center align-middle ">
            <h1 className="font-como text-[44px] font-normal">WHAT WE OFFER</h1>
            <h1 className="font-rale text-[#ab0a1f] tracking-widest">
              WHAT ELTAN LUXURY HOMES OFFERS
            </h1>
            <div className="flex  gap-5 justify-center items-center ">
              <div className="flex  items-center justify-center font-como text-[#615e5e] text-[20px] font-normal">
                <LiaGreaterThanSolid />
                Good roads
              </div>
              <div className="flex items-center justify-center">
                <LiaGreaterThanSolid />
                Street lights
              </div>
              <div className="flex items-center justify-center">
                <LiaGreaterThanSolid />
                Good Drainage
              </div>
            </div>
            <div className="flex  gap-5 justify-center items-center align-middle ">
              <h1 className="flex items-center  justify-center  ">
                <LiaGreaterThanSolid />
                Serene environment
              </h1>
              <h1 className="flex items-center  justify-center">
                <LiaGreaterThanSolid />
                24hrs power supply
              </h1>
              <h1 className="flex items-center  justify-center">
                <LiaGreaterThanSolid />
                24hrs armed security
              </h1>
            </div>
          </div>
        </div>
        <div id="redbg">
          <img className="" alt="" />
          <div className="grid place-items-center py-32 ">
            <h1 className="text-white font-como Garamond text-6xl not-italic font-normal tracking-widest">
              SCHEDULE A TOUR
            </h1>
            <h1 className="text-white tracking-widest pt-8 font-rale">
              WE PRIDE OURSELVES AS LEADERS IN THE PROPERTY DEVELOPMENT
            </h1>
            <h1 className="text-white tracking-widest font-rale">
              INDUSTRY AS WE OFFER TO OUR CLIENTS, PROPERTIES WITH
            </h1>
            <h1 className="text-white tracking-widest font-rale">
              COMPETITIVE AS WELL AS AFFORDABLE PRICING
            </h1>
            <div className="pt-8">
              <button className=" relative h-10 w-[9rem] bg-white text-[#2e3a1a] font-rale">
                TAKE A TOUR
              </button>
            </div>
          </div>
        </div>
      </section>
      <div>
        <img src={sd} alt="" />
      </div>

      <div className="relative">
        <div>
          <img className="  " src={asset9} alt="" />
        </div>
        <div className="grid place-items-center">
          <div className=" bg-white absolute p-[60px] max-w-[900px] h-[75%] pla bottom-0 ">
            <h1 className="font-como text-[64px] text-center">
              REQUEST A VISIT
            </h1>
            <div className="flex  flex-col gap-10 columns-2">
              <input
                className=" border w-full"
                type="text"
                placeholder="FULL NAME"
              />
              <input type="email" placeholder="EMAIL" />
              <div className="flex">
                <input type="date" />
                <input type="time" placeholder="TIME" />
              </div>
            </div>

            <textarea
              className="mt-10"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="MESSAGE"
            ></textarea>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
