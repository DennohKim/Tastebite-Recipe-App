import React from "react";
import { Link } from "react-router-dom";
import { BiTimeFive, BiDish } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";


const MyAllRecipeCard = ({
  image,
  recipeName,
  cookingTime,
  peopleServed,
  country,
  ratings,
  recipeId
}) => {
  return (
    <div>
      <Link to={`/myrecipes/${recipeId}`}>
      <div className="shadow-md rounded-md">
          <div className="w-full">
            <img
              className="w-full h-48 object-cover"
              src={image}
              alt="recipe"
            />
          </div>
          <div className="px-4">
            <p className="pt-4 text-base md:text-base lg:text-md font-bold ">
              {recipeName}
            </p>
            <div className="flex justify-between py-4 ">
              <div className="flex justify-center items-center ">
                <BiTimeFive className="" />
                <p className="pl-2 text-sm md:text-sm lg:text-base">
                  {cookingTime}
                </p>
                <p className="pl-2 text-sm md:text-sm lg:text-base">Minutes</p>
              </div>
              <div className="flex justify-center items-center">
                <BiDish />
                <p className="pl-2 text-sm md:text-sm lg:text-base">
                  {peopleServed}
                </p>
                <p className="pl-2 text-sm md:text-sm lg:text-base">Servings</p>
              </div>
            </div>
            <div className="flex justify-between items-center py-2 ">
              <div>
                <p className="w-full active:scale-90 bg-secondary-color transition duration-150 ease-in-out rounded-full text-white px-4 py-2 text-sm">
                  {country}
                </p>
              </div>
              <div className="flex gap-2 scale-75">
                {Array(ratings)
                  .fill()
                  .map((_, i) => (
                    <p>⭐</p>
                  ))}
              </div>
            </div>
            <div className="border-b pt-4">

            </div>
            <div className="flex justify-between align-center py-4  ">
              <div className="flex gap-2 align-items-center  text-secondary-color active:bg-secondary-color uppercase text-md px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150">
                <FiEdit className="self-center" />
                <button className="self-center" >Edit</button>
              </div>
              <div className="flex gap-2 align-center bg-red-500 text-white active:bg-red-800 uppercase text-md px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150">
                <AiOutlineDelete className="self-center" />
                <button className="self-center" >Delete</button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MyAllRecipeCard;
