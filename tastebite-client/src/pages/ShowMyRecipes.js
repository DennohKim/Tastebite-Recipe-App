import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import NavbarDashboard from "../components/NavbarDashboard";
import Sidebar from "../components/Sidebar";
import { useStateContext } from "../context/ContextProvider";
import { useState } from "react";
import "../components/MyRecipe/Tabs.css";
import { BsBookmark } from "react-icons/bs";
import ReactShare from "../components/MyRecipe/ReactShare";
import { useReactToPrint } from "react-to-print";

const ShowMyRecipes = () => {
  const { activeMenu, recipes, user } = useStateContext();
  const { id } = useParams();
  const { username } = user;

  const [toggleState, setToggleState] = useState(1);
  const componentRef = useRef();

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    document: "emp-data",
  });

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
                  Video Tutorial
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
                      <h3 className="font-bold text-lg py-4 tracking-normal">
                        Recipe Creator:{" "}
                        <span className="font-normal">{username}</span>
                      </h3>

                      <div className="h-1/2 w-full">
                        <img
                          className="h-full w-full object-cover rounded-md"
                          src={recipes[id - 1].image_url}
                          alt="recipe"
                        />
                      </div>

                      <div className="pt-10 flex flex-col gap-10">
                        <div className="flex gap-4">
                          <div className="flex gap-2 align-center bg-secondary-color text-white active:bg-secondary-color uppercase text-md w-48 px-6 py-4 rounded-full shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150">
                            <BsBookmark className="self-center mx-auto" />
                            <button className="self-center mx-auto">
                              Bookmark
                            </button>
                          </div>
                          <div className="flex gap-2 align-center border-2 bg-white text-secondary-color shadow-md active:bg-secondary-color uppercase text-md w-48 px-6 py-4 rounded-full hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150">
                            <button
                              onClick={handlePrint}
                              className="self-center mx-auto"
                            >
                              Print Recipe
                            </button>
                          </div>
                        </div>

                        <div>
                          <h2 className="font-bold sm:text-base md:text-base lg:text-lg tracking-normal">
                            Share on social media
                          </h2>
                          <ReactShare />
                        </div>
                      </div>
                    </div>
                    <div className="px-10" ref={componentRef}>
                      <h1 className="font-extrabold text-3xl mt-16">
                        {recipes[id - 1].title}
                      </h1>
                      <div className="flex justify-between py-4 ">
                        <div>
                          <h3 className="font-semibold md:text-sm lg:text-base tracking-normal">
                            Servings
                          </h3>
                          <h3 className="">{recipes[id - 1].people_served}</h3>
                        </div>
                        <div>
                          <h3 className="font-semibold md:text-sm lg:text-base tracking-normal">
                            Category
                          </h3>
                          <h3 className="">{recipes[id - 1].category}</h3>
                        </div>
                        <div>
                          <h3 className="font-semibold md:text-sm lg:text-base tracking-normal">
                            Cooking Time
                          </h3>
                          <h3 className="">{recipes[id - 1].cooking_time}</h3>
                        </div>
                        <div>
                          <h3 className="font-semibold md:text-sm lg:text-base tracking-normal">
                            Country
                          </h3>

                          <h3 className="">{recipes[id - 1].country}</h3>
                        </div>
                      </div>
                      <div>
                        <div className="border-b-2"></div>
                        <div className="pt-8">
                          <h2 className="font-bold text-xl tracking-normal">
                            Ingredients
                          </h2>
                          <h3 className="ml-6">
                            {recipes[id - 1].ingredients
                              .split(".")
                              .map((ingredient) => {
                                return (
                                  <ul className="list-disc">
                                    <li>{ingredient}</li>
                                  </ul>
                                );
                              })}
                          </h3>
                        </div>
                        <div className="pt-8">
                          <h2 className="font-bold text-xl tracking-normal">
                            Procedures
                          </h2>
                          <h3 className="ml-6">
                            {recipes[id - 1].procedure
                              .split(".")
                              .map((prod) => {
                                return (
                                  <ul className="list-disc">
                                    <li>{prod}</li>
                                  </ul>
                                );
                              })}
                          </h3>
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
                      src={recipes[id - 1].video_link}
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
