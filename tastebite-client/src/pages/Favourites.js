import React from "react";
import Sidebar from "../components/Sidebar";
import { useStateContext } from "../context/ContextProvider";
import NavbarDashboard from "../components/NavbarDashboard";
// import { AiOutlineSearch } from "react-icons/ai"
import RecipesList from "../components/Recipes/RecipesList";
import { recipeInfo } from "../data/recipedata";

const Favourites = () => {
  const { activeMenu } = useStateContext();

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
              <div>
                <div className="mt-8">
                  <label htmlFor="site-search"></label>
                  <input type="search" id="site-search" placeholder="🔍 Search" className="w-1/4 pl-2 py-1 mr-10 border-solid border-2 border-gray-300 rounded" />

                  <label htmlFor="ingredient"></label>
                  <select name="ingredient" id="ingredient" className="mr-3 py-1 px-3 border-solid border-2 border-gray-300 rounded text-gray-400">
                    <option>Kachumbari</option>
                    <option>Avocado</option>
                  </select>

                  <label htmlFor="category"></label>
                  <select name="category" id="category" className="mr-3 py-1 px-3 border-solid border-2 border-gray-300 rounded text-gray-400">
                    <option>Breakfast</option>
                    <option>Lunch</option>
                    <option>Supper</option>
                  </select>

                  <label htmlFor="country"></label>
                  <select name="country" id="country" className="mr-3 py-1 px-3 border-solid border-2 border-gray-300 rounded text-gray-400">
                    <option>Kenya</option>
                    <option>Morocco</option>
                  </select>
                </div>
              </div>  
            </div>
            <div>
              <RecipesList recipes={ recipeInfo } className="p-0" />
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Favourites;