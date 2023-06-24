import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "./SharedLayout";
import { Home } from "../pages/Home";
import { Movies } from "../pages/Movies";
import { MovieDetails } from "./MovieDetails";
import { Cast } from "./Cast";
import { Reviews } from "./Reviews";

// import { lazy } from "react";

// export const MyComponent = lazy(() => import("path/to/MyComponent"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews/>} />
      </Route>
    </Routes>
  );
};

export default App;
