import { Route, Routes } from "react-router-dom";
import { useStateContext } from "../src/context/ContextProvider";

import {
  AllRecipes,
  Dashboard,
  LandingPage,
  MyRecipes,
  Profile,
  Signin,
  Signup,
  Favourites,
} from "./pages";
import "./App.css";

import ShowRecipe from "./pages/ShowRecipe";
import ProtectedRoute from "./components/ProtectedRoute";
import CreateRecipe from "./pages/CreateRecipe";
import EditRecipes from "./pages/EditRecipes";

function App() {
  const { user } = useStateContext();

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
          path="dashboard/create"
          element={
            <ProtectedRoute user={user}>
              <CreateRecipe />
            </ProtectedRoute>
          }
        ></Route>
        {/* <Route
          path="/myrecipes/:id/edit"
          element={
            <ProtectedRoute user={user}>
              <EditRecipes />
            </ProtectedRoute>
          }
        ></Route> */}
      </Routes>
    </div>
  );
}

export default App;