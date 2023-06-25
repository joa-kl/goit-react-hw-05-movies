import { useState, useSearchParams } from "react";
import MoviesList from "../components/MoviesList";
import styles from "./Movies.module.css"
import { SearchMovie } from "../components/Api";


export const Movies = () => {
    const [searchName, setSearchName] = useState("");

    const handleSubmitSearchMovie = evt => {
        evt.preventDefault();
        const firstValue = evt.currentTarget.elements.name.value;
        if (firstValue.trim() === '') {
            evt.currentTarget.reset();
            return;
        }
         
        setSearchName(firstValue.trim());
        evt.currentTarget.reset();
    };

//       const movies = SearchMovie();
//   const [searchParams, setSearchParams] = useSearchParams();
//   const productName = searchParams.get("value") ?? "";

//   const visibleMovies = movies.filter((product) =>
//     product.value.toLowerCase().includes(productName.toLowerCase())
//   );

//   const updateQueryString = (value) => {
//     const nextParams = value !== "" ? { value } : {};
//     setSearchParams(nextParams);
//   };
    
    
    return (
        <div>
            <form onSubmit={handleSubmitSearchMovie}>
                <input
                    type="text"
                    name="name"
                    className={styles.input}
                    placeholder="enter a movie title"
                    autoComplete="off"
                    autoFocus />
                <button type="submit">Search</button>
            </form>
            <MoviesList searchName={searchName} />
            {/* <MoviesList products={visibleMovies} /> */}
        </div>
    );
};

