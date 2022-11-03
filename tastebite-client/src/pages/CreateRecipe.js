import React, { useEffect } from "react";
import { useState } from "react";
import NavbarDashboard from "../components/NavbarDashboard";
import Sidebar from "../components/Sidebar";
import { useStateContext } from "../context/ContextProvider";
// import useFetchUser from "../hooks/useFetchUser";
// import useFetchUser from "../hooks/useFetchUser";

const CreateRecipe = () => {
  const { recipes, setRecipes, setUser, activeMenu, user } = useStateContext();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [peopleServed, setPeopleServed] = useState("");
  const [country, setCountry] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [rating, setRating] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [procedure, setProcedure] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [imageUrl, setImageUrl] = useState(" ");

  const categories = recipes.map((recipe) => recipe.category);
  const uniqueCategories = [...new Set(categories)];

  const { id } = user;

  function handleAddRecipe(newRecipe) {
    setRecipes([...recipes, newRecipe]);
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("https://tastebite.herokuapp.com/recipes", {
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
        user_id: id,
      }),
    })
      .then((r) => r.json())
      .then((newRecipe) => {
        handleAddRecipe(newRecipe);
      });

    
  }

  useEffect(() => {
    const interval = setInterval(() => {
      fetch(`https://tastebite.herokuapp.com/me/${id}`)
        .then((r) => r.json())
        .then((data) => {
          setUser(data);

          localStorage.setItem("user", JSON.stringify(data));
        });
      
    }, 2000);
    return () => clearInterval(interval);
  }, [id, setUser]);

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

            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Create a fingerlicking recipe
                  </h3>
                </div>
                {/*body*/}
                <form onSubmit={handleSubmit}>
                  <div className="relative p-6 flex-auto">
                    <div className="flex flex-col gap-10">
                      <div className="flex gap-3">
                        <div>
                          <label htmlFor="">Recipe Name</label>
                          <input
                            type="text"
                            name="recipe"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="border-2 "
                          />
                        </div>
                        <div>
                          <label htmlFor="">Category</label>
                          <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                          >
                            {uniqueCategories.map((category, index) => (
                              <option key={index}>{category}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="">Servings</label>
                          <input
                            type="number"
                            name="servings"
                            value={peopleServed}
                            onChange={(e) => setPeopleServed(e.target.value)}
                            className="border-2"
                          />
                        </div>
                        <div>
                          <label htmlFor="">Country</label>
                          <input
                            type="text"
                            name="country"
                            className="border-2"
                            onChange={(e) => setCountry(e.target.value)}
                            value={country}
                          />
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div>
                          <label htmlFor="">Cooking Time(Minutes)</label>
                          <input
                            type="number"
                            name="cooking time"
                            className="border-2"
                            value={cookingTime}
                            onChange={(e) => setCookingTime(e.target.value)}
                          />
                        </div>
                        <div>
                          <label htmlFor="">Ratings</label>
                          <input
                            type="number"
                            name="ratings"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            className="border-2"
                          />
                        </div>
                        <div>
                          <label htmlFor="">Video Tutorial Link</label>
                          <input
                            type="text"
                            name="video tutorials url"
                            value={videoLink}
                            onChange={(e) => setVideoLink(e.target.value)}
                            className="border-2"
                          />
                        </div>
                      </div>
                      <div className="">
                        <label htmlFor="">Image Link</label>
                        <br />
                        <input
                          type="text"
                          name="image"
                          className="border-2"
                          value={imageUrl}
                          onChange={(e) => setImageUrl(e.target.value)}
                        />
                      </div>

                      <div className="flex gap-12">
                        <div className="ingredient" id="textarea">
                          <label htmlFor="">Ingredient(s)</label>
                          <br />
                          <textarea
                            type="textarea"
                            className="border-2"
                            value={ingredients}
                            onChange={(e) => setIngredients(e.target.value)}
                          />
                        </div>
                        <div className="procedure" id="textarea">
                          <label htmlFor="">Procedure(s)</label>
                          <br />
                          <textarea
                            type="textarea"
                            className="border-2"
                            value={procedure}
                            onChange={(e) => setProcedure(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b gap-4">
                    <button
                      className="bg-secondary-color text-white active:bg-secondary-color font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Create Recipe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateRecipe;
