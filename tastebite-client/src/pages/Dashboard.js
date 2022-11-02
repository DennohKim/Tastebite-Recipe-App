import React from "react";
import Sidebar from "../components/Sidebar";
import { BsBookmark } from "react-icons/bs";
import { BiFoodMenu } from "react-icons/bi";
import { HiOutlineUserGroup } from "react-icons/hi";

import { useStateContext } from "../context/ContextProvider";
import NavbarDashboard from "../components/NavbarDashboard";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { activeMenu, users, recipes, user } = useStateContext();
 

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

            <div className="px-12 mx-auto my-4 grid grid-cols-4 lg:grid-cols-3 lg:gap-8 md:grid-cols-2 sm:grid-cols-1 sgap-8">
              <div className="px-4 py-2 bg-slate-200 rounded flex justify-between hover:bg-primary-color hover:text-white">
                <div>
                  <p className="pb-3 text-gray-600">Active Users</p>
                  <p className="font-bold text-4xl ">{users.length}</p>
                </div>
                <div className="w-2/6">
                  <HiOutlineUserGroup
                    className="w-full fill-slate-600 hover:fill-white group-hover:stroke-white"
                    size={40}
                  />
                </div>
              </div>
              <div className="px-4 py-2 bg-slate-200 rounded flex justify-between hover:bg-primary-color hover:text-white">
                <div>
                  <p className="pb-3 text-gray-600">Recipes</p>
                  <p className="font-bold text-4xl">{recipes.length}</p>
                </div>
                <div className="w-2/6">
                  <BiFoodMenu
                    className="w-full fill-slate-600 hover:fill-white"
                    size={40}
                  />
                </div>
              </div>
              <div className="px-4 py-2 bg-slate-200 rounded flex justify-between hover:bg-primary-color hover:text-white">
                <div>
                  <p className="pb-3 text-gray-600">Favourites</p>
                  <p className="font-bold text-4xl">{user.favorite_recipes.length}</p>
                </div>
                <div className="w-2/6">
                  <BsBookmark className="w-full outline-slate-200 " size={40} />
                </div>
              </div>
              <div>
              
                <Link to="/dashboard/create"
                  className="bg-secondary-color text-white active:bg-secondary-color font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  
                >
                  Create New Recipe
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
