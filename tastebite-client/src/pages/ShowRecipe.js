import React from "react";
import { Link, useParams } from "react-router-dom";
import NavbarDashboard from "../components/NavbarDashboard";
import Sidebar from "../components/Sidebar";
import { useStateContext } from "../context/ContextProvider";
import { BsBookmark, BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import ShowRecipeNav from "../components/ShowRecipeNav";

const ShowRecipe = () => {
  const { activeMenu, recipes, user } = useStateContext();
  const { id } = useParams();
  const { username } = user;

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
            <ShowRecipeNav />
            <div className="px-2">
              <div className="flex justify-evenly">
                <div>
                  <div className="w-full">
                    <img
                      className="w-96 h-96 object-left"
                      src={recipes[id - 1].image_url}
                      alt="recipe"
                    />
                  </div>
                  <div className="py-6 ">
                    <button className="w-32 active:scale-90 bg-secondary-color transition duration-150 ease-in-out rounded-full text-white px-4 py-2 text-sm">
                      <BsBookmark className="inline " /> BookMark
                    </button>
                  </div>
                  <div>
                    <span className="font-bold">Share on Social Media</span>
                    <div className="flex justify-evenly py-4">
                      <Link>
                        <BsFacebook className="" />
                      </Link>
                      <Link>
                        <BsInstagram className="font-2xl" />
                      </Link>
                      <Link>
                        <BsTwitter className="font-2xl" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="underline hover:underline-offset-8">
                    <p className="text-4xl  py-2  ">{recipes[id - 1].title}</p>
                  </div>
                  <div className="flex  justify-evenly  ">
                    <div className=" py-4  ">
                      <span className="font-bold py-1">Servings</span>
                      <p className="">{recipes[id - 1].people_served}</p>
                    </div>
                    <div className=" py-4">
                      <span className="font-bold">Category</span>
                      <p className="">{recipes[id - 1].category}</p>
                    </div>
                    <div className=" py-4">
                      <span className="font-bold">Cooking TIme</span>
                      <p className="">{recipes[id - 1].cooking_time}</p>
                    </div>
                    <div className="py-4">
                      <span className="font-bold">Country</span>
                      <p className="">{recipes[id - 1].country}</p>
                    </div>
                  </div>
                  <div className="py-4">
                    <span className="text-2xl underline hover:underline-offset-8">
                      Ingredients
                    </span>
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
                    <span className="text-2xl underline hover:underline-offset-8">
                      Procedure
                    </span>
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
                  <div className="px-1 py-4">
                    <p className="font-medium">
                      {" "}
                      <span className="font-bold">Recipe Creator:</span>{" "}
                      {username}
                    </p>
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
