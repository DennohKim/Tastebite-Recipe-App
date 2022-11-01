import React, { useState } from "react";
import AllRecipeCard from "./AllRecipeCard";
import { useStateContext } from "../../context/ContextProvider";

const AllRecipesList = () => {
  const { recipes, setRecipes, search, setSearch } = useStateContext();
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


  const categories = recipes.map((recipe) => recipe.category);
  const uniqueCategories = [...new Set(categories)];

  const countries = recipes.map((recipe) => recipe.country);
  const uniqueCountry = [...new Set(countries)];


  const recipeToDisplay = recipes.filter((recipe) => {
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

  const recipeList = recipeListDisplayed.map((recipe) => {
    return (
      <AllRecipeCard
        recipeId={recipe.id}
        key={recipe.id}
        recipeCreator={recipe.user.username}
        image={recipe.image_url}
        recipeName={recipe.title}
        cookingTime={recipe.cooking_time}
        peopleServed={recipe.people_served}
        country={recipe.country}
        rating={recipe.rating}
        recipe={recipe}
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
              
              <option onClick={(e) => setRecipes(recipes)} value="All">Filter by category</option>              
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
      </div>

      <div className="pt-10 w-4/5 mx-auto grid gap-8 xs:grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 md:grid-rows-2 lg:grid-rows-2 align-center">
        {recipeList}
      </div>
    </div>
  );
};

export default AllRecipesList;
