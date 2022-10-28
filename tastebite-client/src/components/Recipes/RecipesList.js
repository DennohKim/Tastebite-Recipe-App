import React from "react";
import RecipeCard from "./RecipeCard";
import { useStateContext } from '../../context/ContextProvider';

const RecipesList = () => {
  const {recipes} = useStateContext()
  const recipeList = recipes.map((recipe) => {
    return (
      <RecipeCard
        key={recipe.id}
        image={recipe.image_url}
        recipeName={recipe.title}
        cookingTime={recipe.cooking_time}
        peopleServed={recipe.people_served}
        country={recipe.country}
        ratings={recipe.rating}
      />
    );
  });
  return (
    <div className="w-full">
      <div className="pt-20 w-4/5 mx-auto grid gap-8 xs:grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:grid-rows-2 lg:grid-rows-2 align-center">
        {recipeList}
      </div>
    </div>
  );
};

export default RecipesList;
