import React, { useState } from "react";
import MyAllRecipeCard from "./MyAllRecipeCard";

import { useStateContext } from "../../context/ContextProvider";
import { Link } from "react-router-dom";

const MyRecipeList = ({ myRecipe, setMyRecipes }) => {
  const { search, setSearch } = useStateContext();
  const [filterCategory, setFilterCategory] = useState("Filter by category");
  const [filterCountry, setFilterCountry] = useState("Filter by country");

  function handleChangeFilterCategory(event) {
    setFilterCategory(event.target.value);
  }

  function handleChangeFilterCountry(event) {
    setFilterCountry(event.target.value);
  }

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  const categories = myRecipe.map((recipe) => recipe.category);
  const uniqueCategories = [...new Set(categories)];

  const countries = myRecipe.map((recipe) => recipe.country);
  const uniqueCountry = [...new Set(countries)];

  const recipeToDisplay = myRecipe.filter((recipe) => {
    if (filterCategory === "Filter by category") {
      return true;
    } else {
      return recipe.category === filterCategory;
    }
  });

  const recipeListToDisplay = recipeToDisplay.filter((recipe) =>
    recipe.title.toLowerCase().includes(search.toLowerCase())
  );

  const recipeListDisplayed = recipeListToDisplay.filter((recipe) => {
    if (filterCountry === "Filter by country") {
      return true;
    } else {
      return recipe.country === filterCountry;
    }
  });

  const myRecipeList = recipeListDisplayed.map((recipe) => {
    return (
      <MyAllRecipeCard
        key={recipe.id}
        recipeId={recipe.id}
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
      <div className="flex justify-between pt-8">
        <div className="flex justify-between">
          <div>
            <input
              className="w-72 ml-28 mr-10 border-2 border-gray-300 pl-3 py-2 rounded-md"
              type="text"
              name="search"
              placeholder="Search by name ..."
              value={search}
              onChange={handleSearchChange}
            />
          </div>

          <div className="Filter_category">
            <select className="border-2 px-2 py-2 mr-10" name="filter" onChange={handleChangeFilterCategory}>
              
              <option onClick={(e) => setMyRecipes(myRecipe)} value="All">Filter by category</option>              
              {uniqueCategories.map((category, index) => (
                <option key={index}>{category}</option>
              ))}
            </select>
          </div>

          <div className="Filter_country">
            <select className="border-2 px-2 py-2" name="filter" onChange={handleChangeFilterCountry}>
              <option value="All">Filter by country</option>
              {uniqueCountry.map((country, index) => (
                <option key={index}>{country}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <Link
            to="/myrecipes/create"
            className="mr-10 bg-secondary-color text-white active:bg-secondary-color font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            Create New Recipe
          </Link>
        </div>
      </div>

      <div className="pt-10 w-4/5 mx-auto grid gap-8 xs:grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 md:grid-rows-2 lg:grid-rows-2 align-center">
        {myRecipeList}
      </div>
    </div>
  );
};

export default MyRecipeList;
