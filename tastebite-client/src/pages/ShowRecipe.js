import React from "react";
import { useParams } from "react-router-dom";
import NavbarDashboard from "../components/NavbarDashboard";
import Sidebar from "../components/Sidebar";
import { useStateContext } from "../context/ContextProvider";
import { BiTimeFive } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import ShowRecipeNav from "../components/ShowRecipeNav";

const ShowRecipe = () => {
  const { activeMenu, recipes } = useStateContext();
  const { id } = useParams();

  return (
    <div>
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
            <ShowRecipeNav/>
            <div className="px-6">
              <div className="flex justify-evenly">
                <div>
                  <div className="w-full">
                    <img
                      className="w-96 h-96 object-left"
                      src={recipes[id - 1].image_url}
                      alt="recipe"
                    />
                  </div>
                  <div className="flex   ">
                    <div className="px-1 py-4">
                      <BiTimeFive className="" />
                      <span className="font-bold">Servings</span>
                      <p className="">{recipes[id - 1].people_served}</p>
                    </div>
                    <div className="px-1  py-4">
                      <span className="font-bold">Category</span>
                      <p className="">{recipes[id - 1].category}</p>
                    </div>
                    <div className="px-1  py-4">
                      <span className="font-bold">Cooking TIme</span>
                      <p className="">{recipes[id - 1].cooking_time}</p>
                    </div>
                    <div className="px-1 py-4">
                      <span className="font-bold">Country</span>
                      <p className="">{recipes[id - 1].country}</p>
                    </div>
                  </div>
                  <div className="py-4">
                    <button className="w-32 active:scale-90 bg-secondary-color transition duration-150 ease-in-out rounded-full text-white px-4 py-2 text-sm">
                      <BsBookmark /> BookMark
                    </button>

                    <div className="px-1 py-4">
                      <span className="font-bold">Recipe Creator</span>
                      <p className="">{recipes[id - 1].user_id}</p>
                    </div>
                  </div>
                  <div>
                    <span className="font-bold">Share on Social Media</span>
                  </div>
                </div>
                <div>
                  <div>
                    <p className="font-bold">{recipes[id - 1].title}</p>
                  </div>
                  <div className="py-4">
                    <span className="font-medium">Ingredients</span>
                    <>
                      {recipes[id - 1].ingredients
                        .split(".")
                        .map((ingredient) => {
                          return (
                            <ul className="list-disc">
                              <li>{ingredient}</li>
                            </ul>
                          );
                        })}
                    </>
                  </div>
                  <div className="py-4">
                    <span className="font-medium">Procedure</span>
                    <>
                      {recipes[id - 1].procedure.split(".").map((proced) => {
                        return (
                          <ul className="list-disc">
                            <li>{proced}</li>
                          </ul>
                        );
                      })}
                    </>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowRecipe;
