import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../assets/images";

export default function TopNav() {
  return (
    /*flex container*/
    <div className="flex w-11/12 mx-auto items-center justify-between">
      <div className="pt-2 pl-">
        <img src={Logo} alt="logo" />
      </div>
      <div className="flex-6 hidden md:flex">
        <ul className="flex justify-center gap-8 p-12 list-none font-base cursor-pointer mr-9">
          <li className=" hover:text-secondary-color">Home</li>
          <li className=" hover:text-secondary-color">Recipes</li>
          <li className=" hover:text-secondary-color">Features</li>
          <li className=" hover:text-secondary-color">Testimonials</li>
          <li className=" hover:text-secondary-color">Contact us</li>
        </ul>
      </div>
      <div className="flex gap-3 ">
        <div>
          <Link
            to="/signup"
            className="hover:text-secondary-color text-lg font-base underline"
          >
            Register
          </Link>
        </div>
        <div>
          <Link
            to="/signin"
            className="font-light bg-red-400 shadow-md text-white text-xl px-6 py-2 rounded-full"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
