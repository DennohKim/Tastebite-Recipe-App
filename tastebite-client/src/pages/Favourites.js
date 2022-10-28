import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { useStateContext } from "../context/ContextProvider";
import NavbarDashboard from "../components/NavbarDashboard";
// import { AiOutlineSearch } from "react-icons/ai"
// import RecipesList from "../components/Recipes/RecipesList";
import FavouriteRecipeList from "../components/Favourites/FavouriteRecipeList";
import Filter from "../components/Favourites/Filter";
// import { recipeInfo } from "../data/recipedata";

const Favourites = () => {
  const { activeMenu } = useStateContext();
  const { user } = useStateContext()

  const [favourites, setFavourites] = useState(user.favorite_recipes)

  // setFavourites(user.favorite_recipes)
  console.log(favourites)


  // const favourites = user.favorite_recipes

  const categories = user.favorite_recipes.map((recipe) => recipe.category)
  const uniqueCategories = [...new Set(categories)]

  const countries = user.favorite_recipes.map((recipe) => recipe.country)
  const uniqueCountries = [...new Set(countries)]

  const handleFilter = (value) => {
    const chosenCategory = favourites.filter((fav) => fav.category === value)
    setFavourites(chosenCategory)
  }

  // console.log(user.favorite_recipes)
  // console.log(user.username)

  return (
    <>
      <div className="flex relative">
        <div className="fixed" style={{ zIndex: "100000" }}>
          {activeMenu ? (
            <div className="w-72 fixed sidebar bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0">
              <Sidebar />
            </div>
          )}
        </div>

        <div
          className={
            activeMenu
              ? "bg-main-bg min-h-screen md:ml-72 w-full  "
              : "bg-main-bg w-full min-h-screen flex-2 "
          }
        >
          <div className="fixed md:static bg-main-bg navbar w-full">
            <NavbarDashboard />
            <div className=" ml-[10%]">
              <div className="w-1/4">
                <p className="font-bold text-xl">Favourites</p>
              </div>
              {
                user.favorite_recipes.length < 1 ? null : <Filter handleFilter={handleFilter} categories={uniqueCategories} countries={uniqueCountries } favourites={favourites} setFavourites={setFavourites} /> 
              }
            </div>
            <div>
              {/* <RecipesList /> */}
              <FavouriteRecipeList favourites={ favourites } />

              {/* {
                user.favorite_recipes.length < 1 ? <p className="m-[10%]">You have no favourite recipes. Bookmark a recipe to make it a favourite.</p> : <FavouriteRecipeList favourites={ favourites } /> 
              } */}
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Favourites;