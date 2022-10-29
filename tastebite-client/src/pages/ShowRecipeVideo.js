import React from 'react'
import { useParams } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import Sidebar from "../components/Sidebar";
import NavbarDashboard from "../components/NavbarDashboard";
import ShowRecipeNav from '../components/ShowRecipeNav';

const ShowRecipeVideo = () => {
    const { activeMenu, recipes } = useStateContext();
    const { id } = useParams();
  return (
    <div>
    <div className="flex relative">
      <div className="fixed" style={{ zIndex: "100000" }}>
        {activeMenu ? (
          <div className="w-72 fixed sidebar bg-white ">
            <Sidebar/>


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
                      {/* <div>
                           <video>
                              <source  src={recipes[id - 1].video_link}/>
                           </video>
                       </div>  */}
                  </div>
              </div>
          </div>
          </div>
  )
}

export default ShowRecipeVideo