import { useState } from "react";

import "./IngredientInput.css";

function IngredientInput({ingredientList, setIngredientList, onAddRecipe}) {

  console.log(ingredientList);

  //Helper Method to add ingredient
  const handleingredientAdd = () => {
    setIngredientList([...ingredientList, { ingredient: "" }]);
  };

  //Helper function to remove ingredient button

  const handleIngredientRemove = (index) => {
    const list = [...ingredientList]
    list.splice(index, 1);
    setIngredientList(list)
  }

  const handleIngredientChange = (e, index) => {
    const { name, value } = e.target
    const list = [...ingredientList]
    list[index][name] = value;
    setIngredientList(list);


  }

  return (
    <form autoComplete="off" className="main-container">
      <div className="form-field">
        <label htmlFor="">ingredient(s)</label>

        {ingredientList.map((singleingredient, index) => (
          <div key={index} className="ingredients">
            <div className="first-division">
              <input className="ingredient" id="ingredient" required type="text" name="ingredient" value={singleingredient.ingredient} onChange={(e) => handleIngredientChange(e, index)} />

              {/* Conditionally render add button to appear once */}
              {ingredientList.length - 1 === index && ingredientList.length < 4 && (
                <button type="button" className="add-btn" onClick={handleingredientAdd}>
                  <span>Add a ingredient</span>
                </button>
              )}
            </div>
            <div className="second-division">
              {/* conditionally render remove button to appear with more than one input */}

              {ingredientList.length > 1 && (
                <button type="button" className="remove-btn" 
                onClick={() => handleIngredientRemove(index)}>
                  <span>Remove</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="output">
        <h2>Output</h2>
        {ingredientList.map((singleingredient, index ) => (
          <ul key={index}>
            {singleingredient.ingredient &&(
              <li>{singleingredient.ingredient}</li>
            )}
          </ul>
        ))}
      </div>
    </form>
  );
}

export default IngredientInput;