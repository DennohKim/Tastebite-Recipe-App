import React from "react";

export default function Modaltest() {
  const [showModal, setShowModal] = React.useState(false);
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
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
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
                <div className="relative p-6 flex-auto">
                  <div className="flex flex-col gap-10">
                    <div className="flex gap-3">
                      <div>
                        <label htmlFor="">Recipe</label>
                        <input
                          type="text"
                          name="recipe"
                          className="border-2 "
                        />
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
                        <input
                          type="number"
                          name="servings"
                          className="border-2"
                        />
                      </div>
                      <div>
                        <label htmlFor="">Country</label>
                        <input
                          type="text"
                          name="country"
                          className="border-2"
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
                        />
                      </div>
                      <div>
                        <label htmlFor="">Ratings</label>
                        <input
                          type="number"
                          name="ratings"
                          className="border-2"
                        />
                      </div>
                      <div>
                        <label htmlFor="">Video Tutorial Link</label>
                        <input
                          type="text"
                          name="video tutorials url"
                          className="border-2"
                        />
                      </div>
                    </div>
                    <div className="">
                      <label htmlFor="">Image</label>
                      <input type="text" name="image" className="border-2 ml-4" />
                    </div>

                    <div className="flex">
                      <div className="ingredients"></div>
                      <div className="procedure"></div>
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
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
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
