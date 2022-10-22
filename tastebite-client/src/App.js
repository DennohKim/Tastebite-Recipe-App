import { Route, Routes } from 'react-router-dom';
import { AllRecipes, Dashboard, LandingPage, MyRecipes, Profile, Signin, Signup } from './pages';

function App() {
  return (
    <div className="App">
       
       <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/all_recipes" element={<AllRecipes />}></Route>
        <Route path="/my_recipes" element={<MyRecipes />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
                
      </Routes>
       
       
    </div>
  );
}

export default App;
