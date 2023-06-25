// import { result } from "lodash";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const MovieList = (props) => {
    const [searchMovie, setSearchMovie] = useState([]);

    const API_KEY = "964358699754c21d74c014b561cf196c";
    const originURL = "https://api.themoviedb.org/3/";
    const name = props.searchName;
    //  const location = useLocation();

    const searchMovieByName = () => {
        fetch(`${originURL}search/movie?api_key=${API_KEY}&query=${name}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                return Promise.reject(new Error("Enter a movie title"));
            })
            .then(({ results }) => setSearchMovie(results))
            .catch(err => console.log(err));
    };

    useEffect(() => {
        if (props.searchName === "") {
            return;
        } else searchMovieByName();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.searchName]);

    return (
        <div>
            {/* <ul>
                {searchMovie.map(movie => (
                    <li key={movie.id}>
                        <Link to={`${movie.id}`} state={{ from: location }}>{movie.title}</Link>
                    </li>
                ))}
            </ul> */}
            <ul>
                {searchMovie.map(movie => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`} state={{ from: "/movies" }}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MovieList;