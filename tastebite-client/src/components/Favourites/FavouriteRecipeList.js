import React from "react";
import AllRecipeCard from '../Recipes/AllRecipeCard';
import FavoriteRecipeCard from "./FavoriteRecipeCard";


const FavouriteRecipeList = ({ favourites }) => {

  
  const favRecipeList = favourites.map((recipe) => {
    return (
      <FavoriteRecipeCard
        key={recipe.id}
        recipeId={recipe.id}
        image={recipe.image_url}
        recipeName={recipe.title}
        cookingTime={recipe.cooking_time}
        peopleServed={recipe.people_served}
        country={recipe.country}
        rating={recipe.rating}
        
      />
    );
  });

  return (
    <div className="w-full">
      <div className="pt-20 w-4/5 mx-auto grid gap-8 xs:grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 md:grid-rows-2 lg:grid-rows-2 align-center">
        {favRecipeList}
      </div>
    </div>
  );
};

export default FavouriteRecipeList;
