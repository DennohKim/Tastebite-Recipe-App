import React, { createContext, useContext, useState, useEffect } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);
  const [recipes, setRecipes] = useState([]);
  const [user, setUser] = useState([]);

  console.log(user);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user"));

    if (userInfo) {
      setUser(userInfo);
    }
  }, []);

  useEffect(() => {

    fetch("http://127.0.0.1:5000/recipes")
      .then((res) => res.json())
      .then((recipe) => setRecipes(recipe));
  }, []);

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        screenSize,
        setScreenSize,
        recipes,
        setRecipes,
        user,
        setUser,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
