import React from "react";
import { recipeInfo } from "../../data/recipedata";
// import RecipeCard from "./RecipeCard";

const Buttons = ({ setRecipes, categories, filterRecipes }) => {
  return (
   
      <div className="flex justify-center">
        <button
          className="bg-black text-white p-1 px-22 mx-5"
          onClick={() => setRecipes(recipeInfo)}
        >
          All
        </button>

        {categories.map((category, index) => {
          return (
            <button className="bg-black text-white p-1 px-22 mx-5" key={index}
            onClick={() => filterRecipes(category)}
            >
              {category}
            </button>
          );
        })}

           {/* <button
          className="btn-warning text-white p-1 mx-5"
          onClick={() => filterRecipes("Breakfast")}
        >
          Breakfast
        </button>
        <button
          className="btn-warning text-white p-1 px-2 mx-5"
          onClick={() => filterRecipes("Lunch")}
        >
          Lunch
        </button>
        <button
          className="btn-warning text-white p-1 mx-5"
          onClick={() => filterRecipes("Dinner")}
        >
          Dinner
        </button> */}
      </div>
  
  );
};

export default Buttons;
