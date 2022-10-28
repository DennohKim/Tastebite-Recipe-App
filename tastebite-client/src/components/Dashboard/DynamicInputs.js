import React, { useState } from 'react'

const DynamicInputs = () => {
    const [procedureList, setProcedureList] = useState([{ procedure: "" }]);
    const [ingredientList, setIngredientList] = useState([{ ingredient: "" }]);

    const handleingredientAdd = () => {
        setIngredientList([...ingredientList, { ingredient: "" }]);
      };
    
      //Helper function to remove ingredient button
    
      const handleIngredientRemove = (index) => {
        const list = [...ingredientList];
        list.splice(index, 1);
        setIngredientList(list);
      };
    
      const handleIngredientChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...ingredientList];
        list[index][name] = value;
        setIngredientList(list);
      };
    
      //Helper Method to add procedure
      const handleProcedureAdd = () => {
        setProcedureList([...procedureList, { procedure: "" }]);
      };
    
      //Helper function to remove procedure button
    
      const handleProcedureRemove = (index) => {
        const list = [...procedureList];
        list.splice(index, 1);
        setProcedureList(list);
      };
    
      const handleProcedureChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...procedureList];
        list[index][name] = value;
        setProcedureList(list);
      };
    
  return (
    <div>
        <div className="flex">
                        <div className="ingredients">
                          <div className="form-field">
                            <label htmlFor="">ingredient(s)</label>

                            {ingredientList.map((singleingredient, index) => (
                              <div key={index} className="ingredients">
                                <div className="first-division">
                                  <input
                                    className="ingredient"
                                    id="ingredient"
                                    required
                                    type="text"
                                    name="ingredient"
                                    value={singleingredient.ingredient}
                                    onChange={(e) =>
                                      handleIngredientChange(e, index)
                                    }
                                  />

                                  {/* Conditionally render add button to appear once */}
                                  {ingredientList.length - 1 === index &&
                                    ingredientList.length < 4 && (
                                      <button
                                        type="button"
                                        className="add-btn"
                                        onClick={handleingredientAdd}
                                      >
                                        <span>Add a ingredient</span>
                                      </button>
                                    )}
                                </div>
                                <div className="second-division">
                                  {/* conditionally render remove button to appear with more than one input */}

                                  {ingredientList.length > 1 && (
                                    <button
                                      type="button"
                                      className="remove-btn"
                                      onClick={() =>
                                        handleIngredientRemove(index)
                                      }
                                    >
                                      <span>Remove</span>
                                    </button>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="output">
                            <h2>Output</h2>
                            {ingredientList.map((singleingredient, index) => (
                              <ul key={index}>
                                {singleingredient.ingredient && (
                                  <li>{singleingredient.ingredient}</li>
                                )}
                              </ul>
                            ))}
                          </div>
                        </div>
                        <div className="procedure">
                          <div className="form-field">
                            <label htmlFor="">procedure(s)</label>

                            {procedureList.map((singleProcedure, index) => (
                              <div key={index} className="procedures">
                                <div className="first-division">
                                  <input
                                    className="procedure"
                                    id="procedure"
                                    required
                                    type="text"
                                    name="procedure"
                                    value={singleProcedure.procedure}
                                    onChange={(e) =>
                                      handleProcedureChange(e, index)
                                    }
                                  />

                                  {/* Conditionally render add button to appear once */}
                                  {procedureList.length - 1 === index &&
                                    procedureList.length < 4 && (
                                      <button
                                        type="button"
                                        className="add-btn"
                                        onClick={handleProcedureAdd}
                                      >
                                        <span>Add steps</span>
                                      </button>
                                    )}
                                </div>
                                <div className="second-division">
                                  {/* conditionally render remove button to appear with more than one input */}

                                  {procedureList.length > 1 && (
                                    <button
                                      type="button"
                                      className="remove-btn"
                                      onClick={() =>
                                        handleProcedureRemove(index)
                                      }
                                    >
                                      <span>Remove</span>
                                    </button>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="output">
                            <h2>Output</h2>
                            {procedureList.map((singleProcedure, index) => (
                              <ul key={index}>
                                {singleProcedure.procedure && (
                                  <li>{singleProcedure.procedure}</li>
                                )}
                              </ul>
                            ))}
                          </div>
                        </div>
                      </div>
    </div>
  )
}

export default DynamicInputs