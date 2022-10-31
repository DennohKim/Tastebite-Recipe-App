import React from "react";
import { Link } from "react-router-dom";

function Filter({
  handleFilter,
  categories,
  countries,
  favourites,
  setFavourites,
}) {
  const handleChange = (e) => {
    handleFilter(e.target.value);
  };

  return (
    <div>
      <div className="mt-8 flex flex-grow gap-2 ">
        <div className="flex-1">
          <label htmlFor="site-search"></label>
          <input
            type="search"
            id="site-search"
            placeholder="🔍 Search"
            className="w-1/4 pl-2 py-1 mr-10 border-solid border-2 border-gray-300 rounded"
          />

          <label htmlFor="category"></label>
          <select
            name="category"
            id="category"
            className="mr-3 py-1 px-3 border-solid border-2 border-gray-300 rounded text-gray-400"
            onChange={handleChange}
          >
            <option onClick={() => setFavourites(favourites)}>All</option>
            {categories.map((category, index) => {
              return (
                <option key={index} value={category}>
                  {category}
                </option>
              );
            })}
          </select>

          <label htmlFor="country"></label>
          <select
            name="country"
            id="country"
            className="mr-3 py-1 px-3 border-solid border-2 border-gray-300 rounded text-gray-400"
            onChange= {handleChange}
          >
            {countries.map((country, index) => {
              return (
                <option key={index} value={country}>
                  {country}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <Link
            to="/myrecipes/create"
            className="mr-10 bg-secondary-color text-white active:bg-secondary-color font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            Create New Recipe
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Filter;
