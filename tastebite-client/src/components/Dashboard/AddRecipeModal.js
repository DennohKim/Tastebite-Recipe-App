import React, { useState } from "react";

import { useStateContext } from "../../context/ContextProvider";


export default function AddRecipeModal() {
  const {} = useStateContext();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="w-full active:scale-90 bg-secondary-color transition duration-150 ease-in-out hover:bg-secondary-darker rounded text-white hover:font-semibold px-8 py-3 text-sm"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Create New Recipe
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}

                <form>
                  <div>
                    <div className="flex">
                      <div>
                        <label htmlFor="">Recipe</label>
                        <input type="text" name="recipe" />
                      </div>
                      <div>
                        <label htmlFor="">Category</label>
                        <select name="category" id="category">
                          <option value="">Breakfast</option>
                          <option value="saab">Supper</option>
                          <option value="mercedes">Lunch</option>
                          <option value="audi">Drinks</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="">Servings</label>
                        <input type="number" name="servings" />
                      </div>
                      <div>
                      <label htmlFor="">Country</label>
                      <input type="text" name="country" />

                      </div>

                      
                    </div>
                    <div className="flex">
                      <input type="text" name="cooking time" />
                      <input type="text" name="ratings" />
                      <input type="text" name="video tutorials url" />
                    </div>
                    <div>
                      <input type="text" name="image" />
                    </div>

                    <div className="flex">
                      <div className="ingredients"></div>
                      <div className="procedure"></div>
                    </div>
                  </div>

                  <button
                    className="w-full active:scale-90 bg-secondary-color transition duration-150 ease-in-out hover:bg-secondary-darker rounded text-white hover:font-semibold px-2 py-3 text-sm"
                    type="submit"
                  >
                    Save Recipe
                  </button>
                </form>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
