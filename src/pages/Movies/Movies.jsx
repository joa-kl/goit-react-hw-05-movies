// import { useState, useEffect } from "react";
// import MoviesList from "../components/MoviesList";
// import styles from "./Movies.module.css"
// // import { SearchMovie } from "../components/Api";
// // import { useLocation } from "react-router-dom";
// import Notiflix from "notiflix";
// import { Navigate, useSearchParams } from "react-router-dom";
// import * as API from "../components/Api";
import { SearchForm } from "../../components/SearchForm/SearchForm";


export const Movies = () => {
      return <SearchForm />;
};

export default Movies;

//     const [searchName, setSearchName] = useState("");
//     const [movies, setMovies] = useState([]);
//     const [searchParams, setSearchParams] = useSearchParams();
//     const query = searchParams.get("query");

//     const handleSubmitSearchMovie = evt => {
//         evt.preventDefault();
//         if (evt.currentTarget.value === "") {
//             evt.currentTarget.reset();
//             Notiflix.Notify.warning(
//             'No movies found! Please change your request and try again');
//             return;
//         }
//             // setSearchName(evt.currentTarget.value.trim());
//             setSearchParams({ query: evt.target[0].value });
//         // return;
//         // evt.preventDefault();
//         // const firstValue = evt.currentTarget.elements.name.value;
//         // if (firstValue.trim() === '') {
//         //     evt.currentTarget.reset();
//         //     Notiflix.Notify.warning(
//         //     'No movies found! Please change your request and try again');
//         //     return;
//         // }
         
//         // setSearchName(firstValue.trim());
//         // evt.currentTarget.reset();
//     };

//     useEffect(() => {
//     const movieTitle = searchParams.get('query');
//     if (movieTitle) {
//       API.SearchMovie(movieTitle).then(ret => setMovies(ret));
//     }
//   }, [searchParams]);


    
//     return (
//         <div>
//             <form onSubmit={handleSubmitSearchMovie}>
//                 <input
//                     type="text"
//                     name="query"
//                     // onChange={e => setSearchParams({ name: e.target.value })}
//                     className={styles.input}
//                     placeholder="enter a movie title"
//                     autoComplete="off"
//                     autoFocus />
//                 <button type="submit">Search</button>
//             </form>
//             <MoviesList searchName={searchParams} />
//             {/* <MoviesList products={visibleMovies} /> */}
//         </div>
//     );


