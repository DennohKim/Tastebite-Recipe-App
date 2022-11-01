import React from "react";
import Sidebar from "../components/Sidebar";
import { useStateContext } from "../context/ContextProvider";
import NavbarDashboard from "../components/NavbarDashboard";

import AllRecipesList from "../components/Recipes/AllRecipesList";

// import { Route } from "react-router-dom";

const AllRecipes = () => {
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
              ? "bg-main-bg min-h-screen md:ml-72 w-full"
              : "bg-main-bg w-full min-h-screen flex-2 "
          }
        >
          <div className="fixed md:static bg-main-bg navbar w-full">
            <NavbarDashboard />

            <div className="px-4 mx-auto my-4 gap-2">
              <div className=" ml-[10%]">
                <div className="w-1/4">
                  <p className="font-bold text-xl">All Recipes</p>
                </div>
              </div>
              <div>
                <AllRecipesList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllRecipes;
