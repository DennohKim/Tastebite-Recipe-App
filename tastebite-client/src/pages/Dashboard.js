import React from "react";
import Sidebar from "../components/Sidebar";
import { BsBookmark } from "react-icons/bs";
import { BiFoodMenu } from "react-icons/bi";
import { HiOutlineUserGroup } from "react-icons/hi";

import { useStateContext } from "../context/ContextProvider";
import NavbarDashboard from "../components/NavbarDashboard";

const Dashboard = () => {
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
          

            <div className="px-12 mx-auto my-4 grid grid-cols-3 gap-8">
              <div className="px-4 py-2 bg-slate-200 rounded flex justify-between hover:bg-primary-color hover:text-white">
                <div>
                  <p className="pb-3 text-gray-600">Users</p>
                  <p className="font-bold text-4xl ">{""}</p>
                </div>
                <div className="w-2/6" >
                  <HiOutlineUserGroup className="w-full fill-slate-600 hover:fill-white group-hover:stroke-white" size={40}/>
                </div>
              </div>
              <div className="px-4 py-2 bg-slate-200 rounded flex justify-between hover:bg-primary-color hover:text-white">
                <div>
                  <p className="pb-3 text-gray-600">Recipes</p>
                  <p className="font-bold text-4xl">{""}</p>
                </div>
                <div className="w-2/6">
                  <BiFoodMenu   className="w-full fill-slate-600 hover:fill-white" size={40} />
                </div>
              </div>
              <div className="px-4 py-2 bg-slate-200 rounded flex justify-between hover:bg-primary-color hover:text-white">
                <div>
                  <p className="pb-3 text-gray-600">Favourites</p>
                  <p className="font-bold text-4xl">{""}</p>
                </div>
                <div  className="w-2/6" >
                  <BsBookmark className="w-full outline-slate-200 " size={40}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;