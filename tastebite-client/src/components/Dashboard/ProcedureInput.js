import React, { useState } from 'react';
import "./ProcedureInput.css";

const ProcedureInput = ({procedureList, setProcedureList}) => {


    console.log(procedureList);
  
    //Helper Method to add procedure
    const handleProcedureAdd = () => {
      setProcedureList([...procedureList, { procedure: "" }]);
    };
  
    //Helper function to remove procedure button
  
    const handleProcedureRemove = (index) => {
      const list = [...procedureList]
      list.splice(index, 1);
      setProcedureList(list)
    }
  
    const handleProcedureChange = (e, index) => {
      const { name, value } = e.target
      const list = [...procedureList]
      list[index][name] = value;
      setProcedureList(list);
  
  
    }
  
    return (
      <form autoComplete="off" className="main-container">
        <div className="form-field">
          <label htmlFor="">procedure(s)</label>
  
          {procedureList.map((singleProcedure, index) => (
            <div key={index} className="procedures">
              <div className="first-division">
                <input className="procedure" id="procedure" required type="text" name="procedure" value={singleProcedure.procedure} onChange={(e) => handleProcedureChange(e, index)} />
  
                {/* Conditionally render add button to appear once */}
                {procedureList.length - 1 === index && procedureList.length < 4 && (
                  <button type="button" className="add-btn" onClick={handleProcedureAdd}>
                    <span>Add steps</span>
                  </button>
                )}
              </div>
              <div className="second-division">
                {/* conditionally render remove button to appear with more than one input */}
  
                {procedureList.length > 1 && (
                  <button type="button" className="remove-btn" 
                  onClick={() => handleProcedureRemove(index)}>
                    <span>Remove</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="output">
          <h2>Output</h2>
          {procedureList.map((singleProcedure, index ) => (
            <ul key={index}>
              {singleProcedure.procedure &&(
                <li>{singleProcedure.procedure}</li>
              )}
            </ul>
          ))}
        </div>
      </form>
    );
  
}

export default ProcedureInput