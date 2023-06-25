import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "./SharedLayout";
import { Home } from "../pages/Home";
import { Movies } from "../pages/Movies";
import { MovieDetails } from "./MovieDetails";
import { MovieCast } from "./MovieCast";
import { MovieReviews } from "./MovieReviews";


// import { lazy } from "react";

// export const MyComponent = lazy(() => import("path/to/MyComponent"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
      <Route path="/" element={<Home />}/>
      {/* <Route path="movies" element={<Movies />} >
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<MovieCast/>}></Route>
          <Route path="reviews" element={<MovieReviews/>}></Route>
        </Route>
      {/* <Route path="*" element={<NotFound/>}/> */}
      </Route> */
      
    </Routes>
  );
};

// export default App;
