import { Route, Routes } from "react-router-dom";
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
import CreateRecipe from "./pages/CreateRecipe";
import EditRecipes from "./pages/EditRecipes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="dashboard/create" element={<CreateRecipe />}></Route>
        <Route path="/allrecipes" element={<AllRecipes />}></Route>
        <Route path="/myrecipes" element={<MyRecipes />}></Route>
        <Route path="/myrecipes/:id/edit" element={<EditRecipes />}></Route>
        <Route path="/account" element={<Profile />}></Route>
        <Route path="/favourites" element={<Favourites />}></Route>
      </Routes>
    </div>
  );
}

export default App;
