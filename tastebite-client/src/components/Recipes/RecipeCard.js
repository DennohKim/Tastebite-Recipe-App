import React from "react";
import { Link } from "react-router-dom";
import { Cooking } from "../../assets/images";
import { BiTimeFive, BiDish } from "react-icons/bi";

const RecipeCard = ({
  image,
  recipeName,
  cookingTime,
  peopleServed,
  country,
  ratings,
}) => {
  return (
    <div>
      <Link to="/signin">
        <div className="shadow-md p-4 rounded-md">
          <div>
            <img src={image} alt="recipe" />
          </div>
          <p className="pt-4 text-lg md:text-xl lg:text-2xl font-bold ">
            {recipeName}
          </p>
          <div className="flex justify-between py-4 ">
            <div className="flex justify-center items-center">
              <BiTimeFive/>
              <p className="pl-4" >{cookingTime}</p>
              <p className="pl-2">Minutes</p>
              
            </div>
            <div className="flex justify-center items-center">
              <BiDish/>
              <p className="pl-4">{peopleServed}</p>
              <p className="pl-2">Servings</p>
              
            </div>
          </div>
          <div className="flex justify-between items-center py-2 ">
            <div>
              
              <p className="w-full active:scale-90 bg-secondary-color transition duration-150 ease-in-out rounded-full text-white px-8 py-3 text-sm">{country}</p>
            </div>
            <div className="flex gap-2">
            {Array(ratings).fill().map((_, i) => (
              <p>⭐</p>

            ))}
              
            </div>
          </div>
          <div>
           
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RecipeCard;
