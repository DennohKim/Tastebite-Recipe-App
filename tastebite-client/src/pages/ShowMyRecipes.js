import React from "react";
import { useParams } from "react-router-dom";
import NavbarDashboard from "../components/NavbarDashboard";
import Sidebar from "../components/Sidebar";
import { useStateContext } from "../context/ContextProvider";
import { useState } from "react";
import "../components/MyRecipe/Tabs.css";
import { BsBookmark } from "react-icons/bs";
import ReactShare from "../components/MyRecipe/ReactShare";

const ShowMyRecipes = () => {
  const { activeMenu, recipes, user } = useStateContext();
  const { id } = useParams();
  const { username } = user;

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

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

            <div className="container">
              <div className="bloc-tabs">
                <button
                  className={
                    toggleState === 1 ? "tabs active-tabs font-bold" : "tabs"
                  }
                  onClick={() => toggleTab(1)}
                >
                  Step by Step Guide
                </button>
                <button
                  className={
                    toggleState === 2 ? "tabs active-tabs font-bold" : "tabs"
                  }
                  onClick={() => toggleTab(2)}
                >
                  Video Tutorial Link
                </button>
              </div>

              <div className="content-tabs">
                <div
                  className={
                    toggleState === 1 ? "content  active-content" : "content"
                  }
                >
                  <div className="grid md:grid-cols-1 lg:grid-cols-2 ">
                    <div>
                      <h3 className="font-bold text-lg py-4">
                        Recipe Creator:{" "}
                        <span className="font-normal">{username}</span>
                      </h3>

                      <div className="h-1/2 w-full">
                        <img
                          className="h-full w-full object-cover rounded-md"
                          src={recipes[id].image_url}
                          alt="recipe"
                        />
                      </div>

                      <div className="pt-10 flex flex-col gap-10">
                        <div className="flex gap-2 align-center bg-secondary-color text-white active:bg-secondary-color uppercase text-md w-1/4 px-6 py-4 rounded-full shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150">
                          <BsBookmark className="self-center mx-auto" />
                          <button className="self-center mx-auto">
                            Save Recipe
                          </button>
                        </div>
                        <div>
                          <h2 className="font-bold text-xl">Share on social media</h2>
                          <ReactShare />
                        </div>
                      </div>
                    </div>
                    <div className="px-10">
                      <h1 className="font-extrabold text-3xl mt-16">
                        {recipes[id].title}
                      </h1>
                      <div className="flex justify-between py-4 ">
                        <div>
                          <h3 className="font-bold text-lg">Servings</h3>
                          <h3 className="">{recipes[id].people_served}</h3>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">Category</h3>
                          <h3 className="">{recipes[id].category}</h3>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">Cooking Time</h3>
                          <h3 className="">{recipes[id].cooking_time}</h3>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">Country</h3>
                          <h3 className="">{recipes[id].country}</h3>
                        </div>
                      </div>
                      <div>
                        <div className="border-b-2"></div>
                        <div className="pt-8">
                          <h2 className="font-bold text-xl">Ingredients</h2>
                          <h3 className="">{recipes[id].ingredients}</h3>
                        </div>
                        <div className="pt-8">
                          <h2 className="font-bold text-xl">Procedures</h2>
                          <h3 className="">{recipes[id].procedure}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={
                    toggleState === 2 ? "content  active-content" : "content"
                  }
                >
                <div className="h-screen">
                <iframe
                    src={recipes[id].video_link}
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen
                    title="video"
                    className="w-full h-3/4"
                  />
                </div>
                  
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowMyRecipes;
