import React from "react";
import { Link } from "react-router-dom";

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
          <p className="pt-4 font-bold text-lg md:text-xl lg:text-2xl ">
            {recipeName}
          </p>
          <div className="flex justify-between py-4 ">
            <div>
              <p className="pb-2 font-bold">Minutes</p>
              <p>{cookingTime}</p>
            </div>
            <div>
              <p className="pb-2 font-bold">Servings</p>
              <p>{peopleServed}</p>
            </div>
          </div>
          <div className="flex justify-between py-4 ">
            <div>
              <p className="pb-2 font-bold">Country</p>
              <p>{country}</p>
            </div>
            <div>
              <p className="pb-2 font-bold">Ratings</p>
              <p>{ratings}</p>
            </div>
          </div>
          <div>
            {/* <button className="w-full active:scale-90 bg-secondary-color transition duration-150 ease-in-out hover:bg-secondary-darker rounded text-white hover:font-semibold px-8 py-3 text-sm">
              Book Turf
            </button> */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RecipeCard;
