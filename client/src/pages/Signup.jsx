import React, { useState } from "react";
import logo from "../assets/res/mainlogo.png";
// import CustomButtonTwo from "../../Components/buttons/CustomButtonTwo";
import { Link } from "react-router-dom";
// import CustomButtons from "../../Components/buttons/CustomButtons";
import api from "../utils/api.js";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phoneNumber: "",
    homeaddress: "",
  });
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState("false");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading("true");
    try {
      const response = await api.post("api/user", formData);
      console.log(response);
      setLoading("false");
    } catch (error) {
      console.log(error);
      // setErrors(error.response.data);
      setLoading("false");
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div>
        <div className="items-start">
          <Link to={"/"}>
            <img className=" w-[10%] ml-[10%] mt-10" src={logo} alt="" />
          </Link>
        </div>
        <div className="rounded-lg flex flex-col border w-[32%] mx-auto mb-10 items-center gap-6 shadow-[2px_2px_10px_2px_rgba(0,0,0,0.2)]">
          <div className="text-[2.125rem] w-full  text-center font-medium pt-4">
            <p className="font-rale">SIGN UP</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-[24rem] mb-[10px] flex flex-col gap-8"
          >
            <div className="bg-white w-full pl-4 outline-none focus:border-black valid:border-[#017358]">
              <h1 className="text-left pb-3 text-[#001712] text-sm font-medium font-rale">
                First Name
              </h1>
              <input
                type="Enter First Name"
                placeholder="Enter First Name"
                value={formData.firstname}
                onChange={(e) =>
                  setFormData({ ...formData, firstname: e.target.value })
                }
                required
                className="flex border border-[#9DA39F] rounded-lg  px-2 py-3 items-center  w-full"
              />
            </div>
            <div className="bg-white w-full pl-4 outline-none focus:border-black valid:border-[#017358]">
              <h1 className="text-left pb-3 text-[#001712] text-sm font-medium font-rale">
                Last Name
              </h1>
              <input
                type="Enter first Name"
                placeholder="Enter Last Name"
                value={formData.lastname}
                onChange={(e) =>
                  setFormData({ ...formData, lastname: e.target.value })
                }
                required
                className="flex border border-[#9DA39F] rounded-lg  px-2 py-3 items-center  w-full"
              />
            </div>
            <div className="bg-white w-full pl-4 outline-none focus:border-black valid:border-[#017358]">
              <h1 className="text-left pb-3 text-[#001712] text-sm font-medium font-rale">
                Email Address
              </h1>
              <input
                type="email"
                placeholder="Enter Email Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="flex border border-[#9DA39F] rounded-lg  px-2 py-3 items-center  w-full"
              />
            </div>
            <div className="bg-white w-full pl-4 outline-none focus:border-black valid:border-[#017358]">
              <h1 className="text-left pb-3 text-[#001712] text-sm font-medium font-rale">
                Phone Number (include your country code)
              </h1>
              <input
                type="phone number"
                placeholder="Enter Phone Number"
                value={formData.phoneNumber}
                onChange={(e) =>
                  setFormData({ ...formData, phoneNumber: e.target.value })
                }
                required
                className="flex border border-[#9DA39F] rounded-lg px-2 py-3 items-center  w-full"
              />
            </div>
            <div className="bg-white w-full pl-4 outline-none focus:border-black valid:border-[#017358]">
              <h1 className="text-left pb-3 text-[#001712] text-sm font-medium font-rale">
                Home Address (include your postal code)
              </h1>
              <input
                type="text"
                placeholder="Enter Home Address (include your postal code)"
                value={formData.homeaddress}
                onChange={(e) =>
                  setFormData({ ...formData, homeaddress: e.target.value })
                }
                required
                className="flex border border-[#9DA39F] rounded-lg px-2 py-3 items-center  w-full"
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
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  required
                />
              </div>
              <p className="pt-2 text-[0.875rem]">
                (Use alphabets, numbers and characters)
              </p>
            </div>
            <div className="flex justify-center">
              {/* <Link to={"login"}> */}

              <button type={"submit"}>
                {/* <CustomButtons
                  text={"Get Started"}
                  button_width={"126px"}
                  disabled={loading}
                /> */}
              </button>
              {/* </Link> */}
            </div>
          </form>
          <p className="bg-[red]">{errors && error}</p>
          <div className="w-[22rem] mb-[10px] flex flex-col gap-8 text-base font-normal">
            <h1>
              By continuing, you agree to the{" "}
              <button>
                <span className="text-[#017358]">
                  Terms of Service & Privacy Policy.
                </span>
              </button>
            </h1>
            <h1>
              Already have an account,{" "}
              <span className="text-[#017358]">
                {" "}
                <button>Login</button>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
