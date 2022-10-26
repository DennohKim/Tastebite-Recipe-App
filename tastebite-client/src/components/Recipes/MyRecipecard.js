import React from "react";
import { Link } from "react-router-dom";
import { BiTimeFive, BiDish } from "react-icons/bi";


function handleDelete(){
  fetch(`http://127.0.0.1:3000/recipes/${id}`,{
    method:'DELETE'
  })
  .then(res => {
    if(res.ok){
      res.json().then(console.log)
    }else {
      res.json().then(console.log)
    }
  })
}

const MyRecipeCard = ({
  image,
  recipeName,
  cookingTime,
  peopleServed,
  country,
  ratings,
  recipeId
}) => {
  return (
    <div>
      <Link to={`/allrecipes/${recipeId}`}>
        <div className="shadow-md p-4 rounded-md">
          <div className="">
            <img className="max-w-full h-auto" src={image} alt="recipe" />
          </div>
          <p className="pt-4 text-base md:text-base lg:text-md font-bold ">
            {recipeName}
          </p>
          <div className="flex justify-between py-4 ">
            <div className="flex justify-center items-center ">
              <BiTimeFive className="" />
              <p className="pl-2 text-sm md:text-sm lg:text-base">{cookingTime}</p>
              <p className="pl-2 text-sm md:text-sm lg:text-base">Minutes</p>
            </div>
            <div className="flex justify-center items-center">
              <BiDish />
              <p className="pl-2 text-sm md:text-sm lg:text-base">{peopleServed}</p>
              <p className="pl-2 text-sm md:text-sm lg:text-base">Servings</p>
            </div>
          </div>
          <div className="flex justify-between items-center py-2 ">
            <div>
              <p className="w-full active:scale-90 bg-secondary-color transition duration-150 ease-in-out rounded-full text-white px-4 py-2 text-sm">
                {country}
              </p>
            </div>
            <div className="flex gap-2 scale-75">
              {Array(ratings)
                .fill()
                .map((_, i) => (
                  <p>⭐</p>
                ))}
            </div>
          </div>
          <div className="justify-between items-center py-2 flex gap-2">
                <button className="w-full active:scale-90 bg-secondary-color transition duration-150 ease-in-out rounded-full text-white px-4 py-2 text-sm">Edit</button>
                <div className="flex justify-between items-center py-2">
                <button className="w-full active:scale-90 bg-secondary-color transition duration-150 ease-in-out rounded-full text-white px-4 py-2 text-sm" onClick={handleDelete}>
                  Delete</button>
            </div>
            </div>
        </div>
      </Link>
    </div>
  );
};

export default MyRecipeCard;
