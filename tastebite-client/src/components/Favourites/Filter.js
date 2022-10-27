import React from 'react'

function Filter({ handleFilter, categories, countries, favourites, setFavourites }) {

  const handleChange = (e) => {
    handleFilter(e.target.value)
  }

  return (
    <div>
        <div className="mt-8">
          <label htmlFor="site-search"></label>
          <input type="search" id="site-search" placeholder="🔍 Search" className="w-1/4 pl-2 py-1 mr-10 border-solid border-2 border-gray-300 rounded" />

          <label htmlFor="category"></label>
          <select name="category" id="category" className="mr-3 py-1 px-3 border-solid border-2 border-gray-300 rounded text-gray-400" onChange={handleChange} >
            <option onClick={() => setFavourites(favourites)} >All</option>
            {
              categories.map((category) => {
                return (
                  <option value={category} >{category}</option>
                )
              })
            }
          </select>

          <label htmlFor="country"></label>
          <select name="country" id="country" className="mr-3 py-1 px-3 border-solid border-2 border-gray-300 rounded text-gray-400">
            {
              countries.map((country) => {
                return (
                  <option value={country} >{country}</option>
                )
              })
            }
          </select>
        </div>
    </div> 
  )
}

export default Filter