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
import ProtectedRoute from "./components/ProtectedRoute";

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
      </Routes>
    </div>
  );
}

export default App;
