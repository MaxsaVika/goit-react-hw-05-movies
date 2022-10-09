import HomePage from "pages/HomePage";
import CastPage from "pages/MovieInfoPage/CastPage/CastPage";
import MovieInfoPage from "pages/MovieInfoPage/MovieInfoPage";
import ReviewsPage from "pages/MovieInfoPage/ReviewsPage/ReviewsPage";
import MoviesPage from "pages/MoviesPage";
import { Route, Routes } from "react-router-dom";
// import NavBar from "./NavBar/NavBar";
import SharedLayout from "./SharedLayout/SharedLayout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />}/>
          <Route path="/movies" element={<MoviesPage />}/>
          <Route path="/movies/:id" element={<MovieInfoPage />}>
            <Route path="cast" element={<CastPage />}/>
            <Route path="reviews" element={<ReviewsPage />}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App