import React from "react";
import Sidebar from "../components/Sidebar";
import { useStateContext } from "../context/ContextProvider";
import NavbarDashboard from "../components/NavbarDashboard";
// import AllRecipesList from "../components/Recipes/AllRecipesList";
// import { Route } from "react-router-dom";
// import ShowRecipe from "../components/Recipes/ShowRecipe";

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
              <h3 className="font-bold">All Recipes</h3>
              <div class="flex  justify-around">
                <div class="w-15">
                  <input
                    type="search"
                    class="
        form-control
        block
        w-full
        px-2
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                    placeholder="Search by name, ingredients or country"
                  />
                </div>

                <div>
                  <select>
                    <option> Categories</option>
                    <option>Breakfast</option>
                    <option>Lunch</option>
                    <option>Dinner</option>
                  </select>
                </div>

                <div>
                  <Select
                    class="w-8"
                    options={options}
                    value={value}
                    onChange={changeHandler}
                  />
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </>
  );
};

export default AllRecipes;