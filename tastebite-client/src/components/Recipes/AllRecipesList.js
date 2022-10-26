import React from 'react';
import AllRecipeCard from './AllRecipeCard';
import { recipeInfo } from "../../data/recipedata";
import { useStateContext } from '../../context/ContextProvider';


const AllRecipesList = () => {

  const { recipes, setRecipes } = useStateContext();
  
    const recipeList = recipeInfo.map((recipe) => {
    return (
      <AllRecipeCard
        recipeId={recipe.id}
        key={recipe.recipe_name}
        image={recipe.image_url}
        recipeName={recipe.recipe_name}
        cookingTime={recipe.cooking_time}
        peopleServed={recipe.people_served}
        country={recipe.country}
        ratings={recipe.ratings}
      />
    );
  });
  return (
    <div className="w-full">
      <div className="pt-20 w-4/5 mx-auto grid gap-8 xs:grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 md:grid-rows-2 lg:grid-rows-2 align-center">
        {recipeList}
      </div>
    </div>
  );
}


export default AllRecipesList