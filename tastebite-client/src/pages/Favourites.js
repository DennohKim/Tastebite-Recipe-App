import React from "react";
import Sidebar from "../components/Sidebar";
import { useStateContext } from "../context/ContextProvider";
import NavbarDashboard from "../components/NavbarDashboard";
// import { AiOutlineSearch } from "react-icons/ai"
import RecipesList from "../components/Recipes/RecipesList";
import Filter from "../components/Favourites/Filter";
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
              <Filter /> 
            </div>
            <div>
              <RecipesList recipes={ recipeInfo } />
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Favourites;