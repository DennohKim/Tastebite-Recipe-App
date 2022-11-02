import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useStateContext } from "../context/ContextProvider";
import { BsBookmark } from "react-icons/bs";
import ReactShare from "../components/MyRecipe/ReactShare";
import NavbarDashboard from "../components/NavbarDashboard";

const ShowRecipe = () => {
  const { activeMenu, recipes, favouriteRecipes, setFavouriteRecipes, user, setUser } = useStateContext();
  const { id } = useParams();
  const userId = user.id
   

  const [toggleState, setToggleState] = useState(1);
  const title = recipes[id -1].title;
  const category = recipes[id -1].category;         
  const peopleServed = recipes[id -1].people_served;
  const country = recipes[id -1].country;
  const cookingTime = recipes[id -1].cooking_time;
  const rating = recipes[id -1].rating;
  const ingredients = recipes[id -1].ingredients;
  const procedure = recipes[id -1].procedure;
  const videoLink = recipes[id -1].video_link;
  const imageUrl = recipes[id -1].image_url;

  const toggleTab = (index) => {
    setToggleState(index);
  };


  function handleAddFavouriteRecipe(newFavourite) {
    setFavouriteRecipes([...favouriteRecipes, newFavourite]);
  }

  function handleSubmit(e) {
    e.preventDefault();
   
    fetch("https://tastebite.herokuapp.com/favorite_recipes", {
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
                        <span className="font-normal">{recipes[id -1].user.username}</span>
                      </h3>

                      <div className="h-1/2 w-full">
                        <img
                          className="h-full w-full object-cover rounded-md"
                          src={imageUrl}
                          alt="recipe"
                        />
                      </div>

                      <div className="pt-10 flex flex-col gap-10">
                      <form onSubmit={handleSubmit}>
                      <div className="flex gap-2 align-center bg-secondary-color text-white active:bg-secondary-color uppercase text-md font-bold w-48 px-6 py-4 rounded-full shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150">
                          <BsBookmark className="self-center mx-auto" />
                          <button className="self-center mx-auto">
                            Bookmark
                          </button>
                        </div>
                      </form>
                        
                        <div>
                          <h2 className="font-bold sm:text-base md:text-base lg:text-lg tracking-normal">
                            Share on social media
                          </h2>
                          <ReactShare videoLink={recipes[id -1].video_link} />
                        </div>
                      </div>
                    </div>
                    <div className="px-10">
                      <h1 className="font-extrabold text-3xl mt-16">
                        {title}
                      </h1>
                      <div className="flex justify-between py-4 ">
                        <div>
                          <h3 className="font-semibold md:text-sm lg:text-base tracking-normal">Servings</h3>
                          <h3 className="">{peopleServed}</h3>
                        </div>
                        <div>
                          <h3 className="font-semibold md:text-sm lg:text-base tracking-normal">Category</h3>
                          <h3 className="">{category}</h3>
                        </div>
                        <div>
                          <h3 className="font-semibold md:text-sm lg:text-base tracking-normal">Cooking Time</h3>
                          <h3 className="">{cookingTime}</h3>
                        </div>
                        <div>
                          <h3 className="font-semibold md:text-sm lg:text-base tracking-normal">Country</h3>
                          <h3 className="">{country}</h3>
                        </div>
                      </div>
                      <div>
                        <div className="border-b-2"></div>
                        <div className="pt-8">
                          <h2 className="font-bold text-xl tracking-normal">Ingredients</h2>
                          <h3 className="ml-6">
                            {ingredients
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
                          <h2 className="font-bold text-xl tracking-normal">Procedures</h2>
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

                  <hr />
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ShowRecipe;
