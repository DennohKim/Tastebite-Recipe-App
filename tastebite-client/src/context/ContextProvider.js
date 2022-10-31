import React, { createContext, useContext, useState, useEffect } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);
  const [recipes, setRecipes] = useState([]);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  console.log(user);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user"));
    if (userInfo) {
      setUser(userInfo);
      // setRecipes(user.recipes)
    }
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/recipes")
      .then((res) => res.json())
      .then((recipe) => setRecipes(recipe));
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/users")
      .then((res) => res.json())
      .then((user) => setUsers(user));
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
        users,
        setUsers,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
