import React from "react";
import Buttons from "./Buttons";
import RecipesList from "./RecipesList";
import { useStateContext } from "../../context/ContextProvider";

const TabComponent = () => {
  const { recipes, setRecipes } = useStateContext();

  //Spread operator will display all the values from category section

  //Set will only allow the single value of each kind to be displayed.

  const categories = [...new Set(recipes.map((recipe) => recipe.category))];

  const filterRecipes = (category) => {
    const newRecipe = recipes.filter((newRecipeDetails) => {
      return newRecipeDetails.category === category && newRecipeDetails.rating === 5;
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
        recipes={recipes}
      />
      <RecipesList recipes={recipes} />
    </div>
  );
};

export default TabComponent;
