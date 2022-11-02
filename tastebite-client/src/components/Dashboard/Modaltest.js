import React from "react";
import { useState } from "react";
import { useStateContext } from "../../context/ContextProvider";
import IngredientInput from "./IngredientInput";
import ProcedureInput from "./ProcedureInput";

export default function Modaltest() {
  const { recipes, setRecipes } = useStateContext();
  const [showModal, setShowModal] = React.useState(false);
  const [procedureList, setProcedureList] = useState([{ procedure: "" }]);
  const [ingredientList, setIngredientList] = useState([{ ingredient: "" }]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [servings, setServings] = useState("");
  const [country, setCountry] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [ratings, setRatings] = useState("");
  const [videoTutorialUrl, setVideoTutorialUrl] = useState("");
  const [image, setImage] = useState(" ");

  const categories = recipes.map((recipe) => recipe.category)
  const uniqueCategories = [...new Set(categories)]

  function handleAddRecipe(newRecipe) {
    setRecipes([...recipes, newRecipe]);
  }

  function handleSubmit(e) {
    e.preventDefault()

    fetch("/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        category,
        servings,
        country,
        cooking_time: cookingTime,
        ratings,
        video_tutorial_url: videoTutorialUrl,
        image,
        ingredientstest: ingredientList.ingredient ,
        procedurestest: procedureList.procedure

      }),
    })
    .then((r) => r.json())
    .then(newRecipe=> {
      handleAddRecipe(newRecipe)
  
    })
  }

  

  return (
    <>
      <button
        className="bg-secondary-color text-white active:bg-secondary-color font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Create New Recipe
      </button>
      {showModal ? (
        <>
          
          <div className="justify-center items-center flex overflow-x-auto overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Create a fingerlicking recipe
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
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
                            {uniqueCategories.map((category,index) => (
                              <option key={index} value={category}>
                                {category}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="">Servings</label>
                          <input
                            type="number"
                            name="servings"
                            value={servings}
                            onChange={(e) => setServings(e.target.value)}
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
                          <label htmlFor="">Cooking Time</label>
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
                            value={ratings}
                            onChange={(e) => setRatings(e.target.value)}
                            className="border-2"
                          />
                        </div>
                        <div>
                          <label htmlFor="">Video Tutorial Link</label>
                          <input
                            type="text"
                            name="video tutorials url"
                            value={videoTutorialUrl}
                            onChange={(e) => setVideoTutorialUrl(e.target.value)}
                            className="border-2"
                          />
                        </div>
                      </div>
                      <div className="">
                        <label htmlFor="">Image</label>
                        <input
                          type="text"
                          name="image"
                          className="border-2"
                          value={image}
                          onChange={(e) => setImage(e.target.value)}
                        />
                      </div>

                      <div className="flex">
                        <div className="ingredients">
                          <IngredientInput
                            ingredientList={ingredientList}
                            setIngredientList={setIngredientList}
                            
                          />
                        </div>
                        <div className="procedure">
                          <ProcedureInput
                            procedureList={procedureList}
                            setProcedureList={setProcedureList}
                            
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b gap-4">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline rounded-full focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-secondary-color text-white active:bg-secondary-color font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                      onClick={() => setShowModal(false)}
                    >
                      submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
