import React, { createContext, useContext, useState, useEffect } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);
  const [recipes, setRecipes] = useState([]);
  const [favouriteRecipes, setFavouriteRecipes] = useState([]);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [search, setSearch ] = useState("");

  console.log(user);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user"));
    if (userInfo) {
      setUser(userInfo);
      // setRecipes(user.recipes)
    }
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:3001/recipes")
      .then((res) => res.json())
      .then((recipe) => setRecipes(recipe));
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:3001/favorite_recipes")
      .then((res) => res.json())
      .then((favourite) => setFavouriteRecipes(favourite));
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:3001/users")
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
        favouriteRecipes, 
        setFavouriteRecipes,
        search,
        setSearch
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
