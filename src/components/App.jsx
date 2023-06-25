import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "./SharedLayout";
import { Home } from "../pages/Home";
import { Movies } from "../pages/Movies";
import { MovieDetails } from "../pages/MovieDetails";
import { MovieCast } from "./MovieCast";
import { MovieReviews } from "./MovieReviews";
import { NotFound } from "../pages/NotFound";
import { Suspense } from "react";

// export const Home = lazy(() => import("../pages/Home"));
// export const Movies = lazy(() => import("../pages/Movies"));
// export const MovieDetails = lazy(() => import("../pages/MovieDetails"));
// export const MovieCast = lazy(() => import("../components/MovieCast"));
// export const MovieReviews = lazy(() => import("../components/MovieReviews"));
// export const NotFound = lazy(() => import("../pages/NotFound"));


export const App = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}/>
          <Route path="movies" element={<Movies />}/>
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<MovieCast/>}></Route>
              <Route path="reviews" element={<MovieReviews/>}></Route>
            </Route> 
          <Route path="*" element={<NotFound/>}/>
          </Route>
          </Routes>
        </Suspense>
      </div>
  );
};

// export default App;
