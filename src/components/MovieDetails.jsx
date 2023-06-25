import { Route, Routes } from "react-router-dom";
import { MovieCast } from "./MovieCast";
import {MovieReviews} from './MovieReviews'

export const MovieDetails = () => {
    return (
        <Routes>
            <Route path="/movies/:movieId/cast" element={<MovieCast />} />
            <Route path="/movies/:movieId/reviews" element={<MovieReviews/>} />

        </Routes>
    )
}