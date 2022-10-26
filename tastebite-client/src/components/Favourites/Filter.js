import React from 'react'

function Filter() {

  return (
    <div>
        <div className="mt-8">
          <label htmlFor="site-search"></label>
          <input type="search" id="site-search" placeholder="🔍 Search" className="w-1/4 pl-2 py-1 mr-10 border-solid border-2 border-gray-300 rounded" />

          <label htmlFor="ingredient"></label>
          <select name="ingredient" id="ingredient" className="mr-3 py-1 px-3 border-solid border-2 border-gray-300 rounded text-gray-400">
            <option>Kachumbari</option>
            <option>Avocado</option>
          </select>

          <label htmlFor="category"></label>
          <select name="category" id="category" className="mr-3 py-1 px-3 border-solid border-2 border-gray-300 rounded text-gray-400">
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Supper</option>
          </select>

          <label htmlFor="country"></label>
          <select name="country" id="country" className="mr-3 py-1 px-3 border-solid border-2 border-gray-300 rounded text-gray-400">
            <option>Kenya</option>
            <option>Morocco</option>
          </select>
        </div>
    </div> 
  )
}

export default Filter