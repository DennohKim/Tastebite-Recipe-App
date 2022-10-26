import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { useStateContext } from "../context/ContextProvider";


const Recipes = () => {
  const [value, setValue] = useState("");
  const { recipes } = useStateContext();
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };
  return (
    <>
      <div >
      <h3 className="font-bold">All Recipes</h3>
      <div class="flex  justify-center">
        <div class="px-8">
          <input
            type="search"
            class="
        form-control
        block
        w-full
        px-2
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            placeholder="Search by name, ingredients or country"
          />
        </div>

        <div px-8>
          <select>
            <option> Categories</option>
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Dinner</option>
          </select>
        </div>

        <div class="px-8">
          <Select options={options} value={value} onChange={changeHandler} />
        </div>
        </div>
        </div>
      <div>
        {recipes.map((recipe) => {
          return (
            <div key={recipe.id}>
              <img src={recipe.image_url} alt="recipe" />
              

              </div>
          )
        })}
      </div>
    </>
  );
};

export default Recipes;
