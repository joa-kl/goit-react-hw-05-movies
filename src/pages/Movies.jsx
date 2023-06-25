import { useState } from "react";
import MoviesList from "../components/MoviesList"

export const Movies = () => {
    const [searchMovie, setSearchMovie] = useState("");

    return (
        <div>
            <form>
                <input type="text" placeholder="enter a movie title" />
                <button type="submit">Search</button>
            </form>
            <MoviesList searchname={searchMovie}/>
        </div>
    )

}