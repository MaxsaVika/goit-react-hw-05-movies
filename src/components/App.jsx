import HomePage from "pages/HomePage";
import MoviesPage from "pages/MoviesPage";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar/NavBar";

const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/movies" element={<MoviesPage />}/>
      </Routes>
    </div>
  );
};

export default App