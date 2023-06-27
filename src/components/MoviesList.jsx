// import { result } from "lodash";
// import { replace } from "lodash";
// import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";


export const MoviesList = ({ movies }) => {
    const location = useLocation();
    return (
        <div>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                         <Link to={`/movies/${movie.id}`} state={{ from: location }}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MoviesList;

// const [searchMovie, setSearchMovie] = useState([]);
//     const navigate = useNavigate();

//     const API_KEY = "964358699754c21d74c014b561cf196c";
//     const originURL = "https://api.themoviedb.org/3/";
//     const name = props.searchName;
//      const location = useLocation();

//     const searchMovieByName = () => {
        
//         fetch(`${originURL}search/movie?api_key=${API_KEY}&query=${name}`)
//             .then(response => {
//                 if (response.ok) {
//                     return response.json();
//                     // navigate(`/${name}`, {replace: true});
//                 }
//                 return Promise.reject(new Error("Enter a movie title"));
//             })
//             .then(({ results }) => setSearchMovie(results))
//             .catch(err => console.log(err));
//     };



//     useEffect(() => {
//         if (props.searchName === "") {
//             return;
//         } else searchMovieByName();
      
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [props.searchName]);

//     //     if (!searchMovie) {
//     //     return 
//     // }

//     return (
//         <div>
//             {/* <ul>
//                 {searchMovie.map(movie => (
//                     <li key={movie.id}>
//                         <Link to={`${movie.id}`} state={{ from: location }}>{movie.title}</Link>
//                     </li>
//                 ))}
//             </ul> */}
//             <ul>
//                 {searchMovie.map(movie => (
//                     <li key={movie.id}>
//                         <Link to={`/movies/${movie.id}`} state={{ from: location }}>{movie.title}</Link>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )