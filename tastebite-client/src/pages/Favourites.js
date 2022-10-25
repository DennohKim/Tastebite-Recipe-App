import React from "react";
import Sidebar from "../components/Sidebar";
import { useStateContext } from "../context/ContextProvider";
import NavbarDashboard from "../components/NavbarDashboard";
// import { AiOutlineSearch } from "react-icons/ai"

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
            <div className="bg-secondary-color ml-6">
              <div className="w-1/4">
                <p className="font-bold text-xl">Favourites</p>
              </div>
              <div>
                <div className="bg-gray-200 mt-8">
                  <label htmlFor="site-search"></label>
                  <input type="search" id="site-search" placeholder="🔍 Search" className="w-1/4" />

                  <label htmlFor="ingredient"></label>
                  <select name="ingredient" id="ingredient">
                    <option>Kachumbari</option>
                    <option>Avocado</option>
                  </select>

                  <label htmlFor="category"></label>
                  <select name="category" id="category">
                    <option>Breakfast</option>
                    <option>Lunch</option>
                    <option>Supper</option>
                  </select>

                  <label htmlFor="country"></label>
                  <select name="country" id="country">
                    <option>Kenya</option>
                    <option>Morocco</option>
                  </select>
                </div>
              </div>
          </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Favourites;