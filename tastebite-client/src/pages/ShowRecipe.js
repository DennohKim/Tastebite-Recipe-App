import React, { useState } from "react";
import { useParams } from "react-router-dom";
import NavbarDashboard from "../components/NavbarDashboard";
import Sidebar from "../components/Sidebar";
import { useStateContext } from "../context/ContextProvider";
import { BsBookmark } from "react-icons/bs";
import ReactShare from "../components/MyRecipe/ReactShare";

const ShowRecipe = () => {
  const {
    activeMenu,
    recipes,
    setUser,
    user,
    favouriteRecipes,
    setFavouriteRecipes,
  } = useStateContext();
  const { id } = useParams();

  const [toggleState, setToggleState] = useState(1);
  const [title, setTitle] = useState(recipes[id - 1].title);
  const [category, setCategory] = useState(recipes[id - 1].category);
  const [peopleServed, setPeopleServed] = useState(
    recipes[id - 1].people_served
  );
  const [country, setCountry] = useState(recipes[id - 1].country);
  const [cookingTime, setCookingTime] = useState(recipes[id - 1].cooking_time);
  const [rating, setRating] = useState(recipes[id - 1].rating);
  const [ingredients, setIngredients] = useState(recipes[id - 1].ingredients);
  const [procedure, setProcedure] = useState(recipes[id - 1].procedure);
  const [videoLink, setVideoLink] = useState(recipes[id - 1].video_link);
  const [imageUrl, setImageUrl] = useState(recipes[id - 1].image_url);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  function handleAddFavouriteRecipe(newFavourite) {
    setFavouriteRecipes([...favouriteRecipes, newFavourite]);
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://127.0.0.1:3000/favorite_recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        category,
        people_served: peopleServed,
        country,
        cooking_time: cookingTime,
        rating,
        video_link: videoLink,
        image_url: imageUrl,
        ingredients,
        procedure,
        user_id: user.id,
      }),
    })
      .then((r) => r.json())
      .then((newFavourite) => {
        handleAddFavouriteRecipe(newFavourite);
      });
  }

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
                <div className="grid grid-cols-2">
                  <div>
                    <div>
                      <img
                        className="h-full  w-3/4 object-cover rounded-md"
                        src={imageUrl}
                        alt="recipe"
                      />
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className="py-6 ">
                        <button
                          className="w-32 active:scale-90 bg-secondary-color transition duration-150 ease-in-out rounded-full text-white px-4 py-2 text-sm"
                          type="submit"
                        >
                          <BsBookmark className="inline " /> BookMark
                        </button>
                      </div>
                    </form>

                    <div>
                      <span className="font-bold">Share on Social Media</span>
                      <div className="flex justify-evenly py-4">
                        <ReactShare />
                      </div>
                    </div>
                  </div>
                  <div className="float-left">
                    <div className="underline hover:underline-offset-8">
                      <p className="text-4xl   ">{title}</p>
                    </div>
                    <div className="flex  justify-evenly  ">
                      <div className=" py-4  ">
                        <span className="font-bold">Servings</span>
                        <p className="">{peopleServed}</p>
                      </div>
                      <div className=" py-4">
                        <span className="font-bold">Category</span>
                        <p className="">{category}</p>
                      </div>
                      <div className=" py-4">
                        <span className="font-bold">Cooking TIme</span>
                        <p className="">{cookingTime}</p>
                      </div>
                      <div className="py-4">
                        <span className="font-bold">Country</span>
                        <p className="">{country}</p>
                      </div>
                    </div>
                    <div className="">
                      <span className="text-2xl underline hover:underline-offset-8">
                        Ingredients
                      </span>
                      <>
                        {ingredients.split(".").map((ingredient) => {
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
                        {procedure.split(".").map((proced) => {
                          return (
                            <ul className="list-disc">
                              <li>{proced}</li>
                            </ul>
                          );
                        })}
                      </>
                    </div>
                    <div className="px-1 py-4">
                      <p className="font-bold">
                        {" "}
                        <span className="font-medium">
                          Recipe Creator:
                        </span>{" "}
                        {recipes[id - 1].user.username}
                      </p>
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
                    src={videoLink}
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen
                    title="video"
                    className="w-full h-3/4"
                  />
                </div>
                <ReactShare />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowRecipe;
