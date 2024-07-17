import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Properties from "./pages/Properties";
import Profile from "./pages/Profile";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* {/ <Route path='/about' element={<About />} /> */}
          <Route path="/properties" element={<Properties />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path='/contact' element={<Contact />} /> */}
          {/* <Route path='/signup' element={<Signup />} /> */}
          {/* <Route path='/team' element={<Team/>} /> } */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
