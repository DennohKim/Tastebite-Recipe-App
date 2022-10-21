import React from "react";
import { recipeInfo } from "../../data/recipedata";


const Buttons = ({ setRecipes, categories, filterRecipes }) => {

    
  return (
   
      <div className="flex justify-center">
        <button
          className="text-black p-1 px-4 mx-5 border-b-2"
          onClick={() => setRecipes(recipeInfo)}
        >
          All
        </button>

        {categories.map((category, index) => {
          return (
            <button className="text-black p-1 px-4 mx-5" key={index}
            onClick={() => filterRecipes(category)}
            >
              {category}
            </button>
          );
        })}

      </div>
  
  );
};

export default Buttons;
