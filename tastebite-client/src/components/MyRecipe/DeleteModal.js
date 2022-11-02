import React, { useEffect }  from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useStateContext } from "../../context/ContextProvider";

export default function DeleteModal({recipeName, recipeId}) {

  const { recipes, setRecipes, user, setUser } = useStateContext();
  const [showModal, setShowModal] = React.useState(false);
  const { id } = user;

  function onHandleDelete(deleteRecipe) {
    const updatedRecipe= recipes.filter((recipe) => {
      return recipe.id !== deleteRecipe;
    });
    setRecipes(updatedRecipe);
  }

  function handleDelete(){
    fetch(`https://tastebite.herokuapp.com/recipes/${recipeId}`,{
      method:'DELETE'
    })
    .then((response) => response.json())
      .then(() => onHandleDelete(recipeId));

    
  }

  useEffect(() => {
    const interval = setInterval(() => {
      fetch(`https://tastebite.herokuapp.com/me/${id}`)
        .then((r) => r.json())
        .then((data) => {
          setUser(data);

          localStorage.setItem("user", JSON.stringify(data));
        });
      
    }, 1000);
    return () => clearInterval(interval);
  }, [id, setUser]);
  
  return (
    <>
      <div className="flex gap-2 align-center bg-red-500 text-white active:bg-red-800 uppercase text-md px-4 ml-2 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150">
        <AiOutlineDelete className="self-center" />
        <button className="self-center" onClick={() => setShowModal(true)}>
          Delete
        </button>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Are you sure?</h3>
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
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    <span className="font-bold">{recipeName}</span> will be permanently deleted.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="flex gap-2 align-center bg-red-500 text-white active:bg-red-800 text-md px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleDelete}  
                  >
                    Delete
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
