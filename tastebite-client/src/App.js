import { Route, Routes } from "react-router-dom";
import { useStateContext } from "../src/context/ContextProvider";
import { useEffect } from "react";

import {
  AllRecipes,
  Dashboard,
  LandingPage,
  MyRecipes,
  Profile,
  Signin,
  Signup,
  Favourites,
  ShowRecipe,
  CreateRecipe,
  ShowMyRecipes,
  EditRecipes


} from "./pages";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";
import ShowMyFavourites from "./pages/ShowMyFavourites";


function App() {
  const { user, setUser } = useStateContext();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user"));

    if (userInfo) {
      setUser(userInfo);
      // setRecipes(user.recipes)
    }
  }, []);

  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute user={user}>
              <Dashboard />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/allrecipes"
          element={
            <ProtectedRoute user={user}>
              <AllRecipes />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/allrecipes/:id"
          element={
            <ProtectedRoute user={user}>
              <ShowRecipe />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/myrecipes"
          element={
            <ProtectedRoute user={user}>
              <MyRecipes />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/account"
          element={
            <ProtectedRoute user={user}>
              <Profile />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/favourites"
          element={
            <ProtectedRoute user={user}>
              <Favourites />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/favourites/:id"
          element={
            <ProtectedRoute user={user}>
              <ShowMyFavourites />
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="dashboard/create"
          element={
            <ProtectedRoute user={user}>
              <CreateRecipe />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/myrecipes/:id"
          element={
            <ProtectedRoute user={user}>
              <ShowMyRecipes />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/myrecipes/create"
          element={
            <ProtectedRoute user={user}>
              <CreateRecipe />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/myrecipes/:id/edit"
          element={
            <ProtectedRoute user={user}>
              <EditRecipes />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;