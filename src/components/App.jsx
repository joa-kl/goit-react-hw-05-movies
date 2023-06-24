
// import { lazy } from "react";

// export const MyComponent = lazy(() => import("path/to/MyComponent"));

const App = () => {
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

