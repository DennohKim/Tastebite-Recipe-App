import React from 'react'


const Recipes = () => {
  return (
      <>
            <h3 className="font-bold">All Recipes</h3>
              <div class="flex  justify-around">
                <div class="w-15">
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

                <div>
                  <select>
                    <option> Categories</option>
                    <option>Breakfast</option>
                    <option>Lunch</option>
                    <option>Dinner</option>
                  </select>
                </div>

                <div>
                  <Select
                    class="w-8"
                    options={options}
                    value={value}
                    onChange={changeHandler}
                  />
                </div>
              </div>
          </>
  )
}

export default Recipes