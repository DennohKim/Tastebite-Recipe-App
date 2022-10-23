import { Route, Routes } from 'react-router-dom';
import { AllRecipes, Dashboard, LandingPage, MyRecipes, Profile, Signin, Signup } from './pages';
import Favourites from './pages/Favourites';
import './App.css'

function App() {
  return (
    <div className="App">
       
       <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/allrecipes" element={<AllRecipes />}></Route>
        <Route path="/myrecipes" element={<MyRecipes />}></Route>
        <Route path="/account" element={<Profile />}></Route>
        <Route path="/favourites" element={<Favourites />}></Route>
        
                
      </Routes>
       
       
    </div>
  );
}

export default App;
