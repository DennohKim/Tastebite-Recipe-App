import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import NavbarDashboard from "../components/NavbarDashboard";
import Sidebar from "../components/Sidebar";
import { useStateContext } from "../context/ContextProvider";
import { useState } from "react";
import "../components/MyRecipe/Tabs.css";
import ReactShare from "../components/MyRecipe/ReactShare";
import { FiEdit } from "react-icons/fi";

const EditRecipes = () => {
  const { activeMenu, recipes, setRecipes, user, setUser } = useStateContext();
  const { id } = useParams();
 const userId = user.id

  const [toggleState, setToggleState] = useState(1);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(recipes[id - 1].title);
  const [category, setCategory] = useState(recipes[id - 1].category);
  const [peopleServed, setPeopleServed] = useState(recipes[id - 1].people_served);
  const [country, setCountry] = useState(recipes[id - 1].country);
  const [cookingTime, setCookingTime] = useState(recipes[id - 1].cooking_time);
  const [rating, setRating] = useState(recipes[id - 1].rating);
  const [ingredients, setIngredients] = useState(recipes[id - 1].ingredients);
  const [procedure, setProcedure] = useState(recipes[id - 1].procedure);
  const [videoLink, setVideoLink] = useState(recipes[id - 1].video_link);
  const [imageUrl, setImageUrl] = useState(recipes[id - 1].image_url);

  const categories = recipes.map((recipe) => recipe.category);
  const uniqueCategories = [...new Set(categories)];

  const toggleTab = (index) => {
    setToggleState(index);
  };

  function handleUpdateRecipe(updatedRecipeObj) {
    const updatedRecipes = recipes.map((recipe) => {
      if (recipe.id === updatedRecipeObj.id) {
        return updatedRecipeObj;
      } else {
        return recipe;
      }
    });
    setRecipes(updatedRecipes);
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`https://tastebite.herokuapp.com/recipes/${id}`, {
      method: "PATCH",
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
      }),
    })
      .then((r) => r.json())
      .then((updatedRecipe) => handleUpdateRecipe(updatedRecipe));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      fetch(`https://tastebite.herokuapp.com/me/${userId}`)
        .then((r) => r.json())
        .then((data) => {
          setUser(data);

          localStorage.setItem("user", JSON.stringify(data));
        });
      
    }, 2000);
    return () => clearInterval(interval);
  }, [userId, setUser]);


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
                  {isEditing ? (
                    <form onSubmit={handleSubmit}>
                      <div className="grid md:grid-cols-1 lg:grid-cols-2 ">
                        <div className="flex flex-col">
                          <div className="flex justify-between align-center ">
                            <h3 className="font-bold text-lg py-4 tracking-normal">
                              Recipe Creator:{" "}
                              <span className="font-normal">
                                {recipes[id - 1].user.username}
                              </span>
                            </h3>
                          </div>

                          <div>
                            
                          </div>
                          <div className="h-1/2 w-full">
                            <img
                              className="h-full w-full object-cover rounded-md pb-10"
                              src={imageUrl}
                              alt="recipe"
                            />
                            <label>Change Image Link</label><br/>
                            <input
                              type="text"
                              className="py-2 border-2 w-3/4 rounded-md"
                              name="imageUrl"
                              autoComplete="off"
                              value={imageUrl}
                              onChange={(e) => setImageUrl(e.target.value)}
                            />
                          </div> <br/>

                          <div className="mt-16 flex gap-4">
                            <button
                              className="flex gap-2 align-items-center  text-white bg-secondary-color text-md px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                              type="submit"
                              // onClick={() => setIsEditing((isEditing) => !isEditing)}
                            >
                              Save Changes
                            </button>

                            <button
                              className="flex gap-2 align-items-center  text-secondary-color  bg-white text-md px-6 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                              
                              onClick={() => setIsEditing((isEditing) => !isEditing)}
                            >
                              Close
                            </button>
                          </div>

                          <div className="pt-10 flex flex-col gap-10">
                            <div>
                              <h2 className="font-bold sm:text-base md:text-base lg:text-lg tracking-normal">
                                Share on social media
                              </h2>
                              <ReactShare />
                            </div>
                          </div>
                        </div>
                        <div className="px-10">
                          <h1 className="font-extrabold text-3xl mt-16">
                            {title}
                          </h1>
                          <input
                            type="text"
                            name="title"
                            className="py-2 border-2 w-3/4 rounded-md"
                            autoComplete="off"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                          />
                          <div className="flex justify-between py-4 ">
                            <div>
                              <h3 className="font-semibold md:text-sm lg:text-base tracking-normal">
                                Servings
                              </h3>
                              <input
                                type="text"
                                name="peopleServed"
                                className="py-2 border-2 w-24 mr-4 rounded-md"
                                autoComplete="off"
                                value={peopleServed}
                                onChange={(e) =>
                                  setPeopleServed(e.target.value)
                                }
                              />
                            </div>
                            <div>
                              <h3 className="font-semibold md:text-sm lg:text-base tracking-normal">
                                Category
                              </h3>
                              <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="py-2 border-2 w-24 mr-4 rounded-md"
                              >
                                {uniqueCategories.map((category, index) => (
                                  <option key={index}>{category}</option>
                                ))}
                              </select>
                            </div>
                            <div>
                              <h3 className="font-semibold md:text-sm lg:text-base tracking-normal">
                                Cooking Time
                              </h3>
                              <input
                                type="text"
                                name="cookingTime"
                                className="py-2 border-2 w-24 mr-4 rounded-md"
                                autoComplete="off"
                                value={cookingTime}
                                onChange={(e) => setCookingTime(e.target.value)}
                              />
                            </div>
                            <div>
                              <h3 className="font-semibold md:text-sm lg:text-base tracking-normal">
                                Country
                              </h3>
                              <input
                                type="text"
                                name="country"
                                className="py-2 border-2 w-24 mr-4 rounded-md"
                                autoComplete="off"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                              />
                            </div>
                          </div>
                          <div>
                            <div className="border-b-2"></div>
                            <div className="pt-8">
                              <h2 className="font-bold text-xl tracking-normal">
                                Ingredients
                              </h2>
                              <textarea
                                type="text"
                                name="ingredients"
                                className="py-10 border-2 w-72 mr-4 rounded-md"
                                autoComplete="off"
                                value={ingredients}
                                onChange={(e) => setIngredients(e.target.value)}
                              />
                            </div>
                            <div className="pt-8">
                              <h2 className="font-bold text-xl tracking-normal">
                                Procedures
                              </h2>
                              <textarea
                                type="text"
                                name="procedure"
                                className="py-10 border-2 w-72 mr-4 rounded-md"
                                autoComplete="off"
                                value={procedure}
                                onChange={(e) => setProcedure(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  ) : (
                    <div className="grid md:grid-cols-1 lg:grid-cols-2 ">
                      <div>
                        <div className="flex justify-between align-center ">
                          <h3 className="font-bold text-lg py-4 tracking-normal">
                            Recipe Creator:{" "}
                            <span className="font-normal">
                              {recipes[id - 1].user.username}
                            </span>
                          </h3>
                        </div>

                        <div className="h-1/2 w-full">
                          <img
                            className="h-full w-full object-cover rounded-md"
                            src={imageUrl}
                            alt="recipe"
                          />
                        </div>

                        <div className="flex justify-center align-center gap-2 self-center align-items-center  text-secondary-color active:bg-secondary-color text-md font-semibold border-2 border-secondary-color px-6 py-1 mt-8 rounded-md w-2/5 shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150 h-10">
                          <FiEdit className="self-center" />
                          <button
                            onClick={() =>
                              setIsEditing((isEditing) => !isEditing)
                            }
                          >
                            Edit
                          </button>
                        </div>

                        <div className="pt-10 flex flex-col gap-10">
                          <div>
                            <h2 className="font-bold sm:text-base md:text-base lg:text-lg tracking-normal">
                              Share on social media
                            </h2>
                            <ReactShare />
                          </div>
                        </div>
                      </div>
                      <div className="px-10">
                        <h1 className="font-extrabold text-3xl mt-16">
                          {title}
                        </h1>
                        <div className="flex justify-between py-4 ">
                          <div>
                            <h3 className="font-semibold md:text-sm lg:text-base tracking-normal">
                              Servings
                            </h3>
                            <h3 className="">{peopleServed}</h3>
                          </div>
                          <div>
                            <h3 className="font-semibold md:text-sm lg:text-base tracking-normal">
                              Category
                            </h3>
                            <h3 className="">{category}</h3>
                          </div>
                          <div>
                            <h3 className="font-semibold md:text-sm lg:text-base tracking-normal">
                              Cooking Time
                            </h3>
                            <h3 className="">{cookingTime}</h3>
                          </div>
                          <div>
                            <h3 className="font-semibold md:text-sm lg:text-base tracking-normal">
                              Country
                            </h3>
                            <h3 className="">{country}</h3>
                          </div>
                        </div>
                        <div>
                          <div className="border-b-2"></div>
                          <div className="pt-8">
                            <h2 className="font-bold text-xl tracking-normal">
                              Ingredients
                            </h2>
                            <h3 className="ml-6">
                              {ingredients.split(".").map((ingredient) => {
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
                              {procedure.split(".").map((prod) => {
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
                  )}
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

export default EditRecipes;
