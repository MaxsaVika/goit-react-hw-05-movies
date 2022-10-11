import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const CastPage = lazy(() => import ("pages/MovieInfoPage/CastPage/CastPage"));
const HomePage = lazy(() => import ("pages/HomePage"));
const MovieInfoPage = lazy(() => import ("pages/MovieInfoPage/MovieInfoPage"));
const ReviewsPage = lazy(() => import ("pages/MovieInfoPage/ReviewsPage/ReviewsPage"));
const MoviesPage = lazy(() => import ("pages/MoviesPage"));
const SharedLayout = lazy(() => import ("./SharedLayout/SharedLayout"));

const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />}/>
            <Route path="/movies" element={<MoviesPage />} />
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