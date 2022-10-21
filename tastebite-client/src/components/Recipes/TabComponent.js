import React, { useState } from "react";
import { recipeInfo } from "../../data/recipedata";
import Buttons from "./Buttons";
import RecipesList from "./RecipesList";

const TabComponent = () => {
  const [recipes, setRecipes] = useState(recipeInfo);

  //Spread operator will display all the values from category section

  //Set will only allow the single value of each kind to be displayed.

  const categories = [...new Set(recipeInfo.map((recipe) => recipe.category))];

  const filterRecipes = (recipes) => {
    const newRecipe = recipeInfo.filter((newRecipeDetails) => {
      return newRecipeDetails.category === recipes;
    });

    setRecipes(newRecipe);
  };
  
  return (
    <div>
      <h2 className="pt-4 py-4 text-3xl font-extrabold text-center">
        Popular Recipes
      </h2>
      <Buttons
        setRecipes={setRecipes}
        categories={categories}
        filterRecipes={filterRecipes}
      />
      <RecipesList recipes={recipes} />
    </div>
  );
};

export default TabComponent;
