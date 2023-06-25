import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export const Home = () => {
    const API_KEY = "964358699754c21d74c014b561cf196c";
    const originURL = "https://api.themoviedb.org/3/";
    const [movieList, setMovieList] = useState([]);

    const trendingMovies = () => {
        fetch(`${originURL}trending/movie/day?api_key=${API_KEY}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                return Promise.reject(new Error('Enter another name'));
            })
            .then(({ results }) => {
                setMovieList(results);
                console.log(results);
            })
            .catch(error => console.log(error));
    };

     const nameMovie = movie => {
        if (movie.title) {
        return movie.title;
        } else return movie.name;
    };
    

    useEffect(() => {
        trendingMovies();
        }, []);
    
    return (
        <div className={styles.container}>
            <h1>Trending movies today</h1>
            <ul>
                {movieList.map(movie => (
                    <li key={movie.id}>
                        <Link to={`movies/${movie.id}`} state={{ from: "/home" }}>
                            {nameMovie(movie)}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}