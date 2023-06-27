import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
// import { Home } from "../pages/Home/Home";
// import { Movies } from "../pages/Movies/Movies";
// import { MovieDetails } from "../pages/MovieDetails/MovieDetails";
// import { MovieCast } from "./MovieCast/MovieCast";
// import { MovieReviews } from "./MovieReviews/MovieReviews";
// import { NotFound } from "../pages/NotFound/NotFound";

import { lazy } from "react";

export const Home = lazy(() => import("../pages/Home/Home"));
export const Movies = lazy(() => import("../pages/Movies/Movies"));
export const MovieDetails = lazy(() => import("../pages/MovieDetails/MovieDetails"));
export const MovieCast = lazy(() => import("../components/MovieCast/MovieCast"));
export const MovieReviews = lazy(() => import("../components/MovieReviews/MovieReviews"));
export const NotFound = lazy(() => import("../pages/NotFound/NotFound"));


export const App = () => {
  return (
    <div>
      {/* <Suspense fallback={<p>Loading...</p>}> */}
        <Routes>
          <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}/>
          <Route path="movies" element={<Movies />}/> 
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<MovieCast/>}/>
              <Route path="reviews" element={<MovieReviews/>}/>
            </Route> 
          <Route path="*" element={<NotFound/>}/>
          </Route>
          </Routes>
        {/* </Suspense> */}
      </div>
  );
};

// export default App;
