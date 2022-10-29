import React from "react";
import { Link } from "react-router-dom";

const ShowRecipeNav = () => {
  return (
    <div className=" flex justify-center py-10">
      <Link className="font-bold px-8 text-xl" to={""}>
        Step by Step Guide
      </Link>
      <Link className="font-bold primary-color  text-xl" to={"/showrecipes/showrecipevideo"}>
        Video Tutorial
      </Link>
    </div>
  );
};

export default ShowRecipeNav;
