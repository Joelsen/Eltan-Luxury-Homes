import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/res/mainlogo.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  function handleSubmit(e) {
    e.preventDefault();
    console.log(email);
    console.log(password);

    fetch("http://localhost:4000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="items-center pt-[50px] ">
      <div className="">
        <Link to={"/"}>
          <img className=" w-[10%] ml-[10%] mt-10" src={logo} alt="" />
        </Link>{" "}
      </div>
      <form>
        <div className="rounded-lg flex flex-col border w-[32%] mx-auto mb-10 items-center gap-6 shadow-[2px_2px_10px_2px_rgba(0,0,0,0.2)]">
          <div className="text-[2.125rem] w-full  text-center font-medium pt-4">
            <p className="font-como">Login</p>
          </div>
          <section className="w-[24rem] mb-[10px] flex flex-col gap-8">
            <div className="bg-white w-full pl-4 outline-none focus:border-black valid:border-[#017358]">
              <h1 className="text-left pb-3 text-[#001712] text-sm font-medium font-rale">
                Email Address
              </h1>
              <input
                type="email"
                placeholder="Enter Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex border border-[#9DA39F] rounded-lg  px-2 py-3 items-center  w-full"
              />
            </div>
            <div className="bg-white w-full pl-4 outline-none">
              <h1 className="text-left pb-3 text-[#001712] text-sm font-medium font-rale">
                Password (minimum of 8 characters)
              </h1>
              <div className="flex border border-[#9DA39F] rounded-lg px-2 py-3 items-center  w-full justify-between focus-within:border-black valid:border-[#017358]">
                <input
                  className="w-full outline-none"
                  type="password"
                  placeholder="Enter Password"
                />
              </div>
              <p className="pt-2 text-[0.875rem] font-rale">
                (Use alphabets, numbers and characters)
              </p>
            </div>
            <div className="flex justify-center">
              <button className="bg-[#2e3a1a] rounded-full border w-20 items-center  font-rale ">
                Login
              </button>
            </div>
          </section>
          <div className="w-[22rem] mb-[10px] flex flex-col gap-8 text-base font-normal">
            <h1 className="font-rale ">
              Don’t have an account,{" "}
              <Link>
                {" "}
                <span className="text-[red]"> Register here</span>
              </Link>
            </h1>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
