import { Route, Routes, useParams, Link, useLocation, Outlet } from "react-router-dom";
// import { MovieCast } from "./MovieCast";
// import {MovieReviews} from './MovieReviews'
import { useState, useEffect, Suspense } from "react";
import { nanoid } from "nanoid";
import { ButtonBack } from "../components/ButtonBack";
import styles from "./MovieDetails.module.css"

export const MovieDetails = () => {

    const API_KEY = "964358699754c21d74c014b561cf196c";
    const originURL = "https://api.themoviedb.org/3/";
    const params = useParams();
    const paramsId = Number(params.movieId)
    const [movieDetails, setMovieDetails] = useState();
    const baseImgUrl = 'https://image.tmdb.org/t/p/w500/';
    const location = useLocation();

    const searchMovieById = () => {
        fetch(`${originURL}/movie/${paramsId}?api_key=${API_KEY}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                return Promise.reject(new Error("Enter a movie title"));
            })
            .then(results => setMovieDetails(results))
            .catch(err => console.log(err));
    }

    useEffect(() => {
        searchMovieById();
    }, []);

    return (
        <section className={styles.section}>
        <ButtonBack />
        {movieDetails && (
          <div className={styles.container}>
            {movieDetails.poster_path ? <img className={styles.img}
              src={`${baseImgUrl}${movieDetails.poster_path}`}
              alt={movieDetails.title}
            /> : <img className={styles.img} src={Image} alt="No foto" />}
            <div className={styles.movieDetails}>
              <p className={styles.title} key={nanoid()}>
                {movieDetails.title}
                {movieDetails.release_date ? (
                  <span> ({movieDetails.release_date.slice(0, 4)})</span>
                ) : (<span>(----)</span>
                )}
              </p>
              <p  key={nanoid()}>
                User score:
                <span > {Number.parseInt(movieDetails.vote_average * 10)} &#37;</span>
              </p>
              <p className={styles.paragraph} key={nanoid()}>
                Overview <br/><span className={styles.span}>{movieDetails.overview}</span>
              </p>
              <p className={styles.paragraph} key={nanoid()}>
                Genres <br />
                {movieDetails.genres.map(genre => (
                  <span className={styles.span}>{genre.name}</span>
                  ))}
              </p>
            </div>
          </div>
        )}
        <p>Additional information</p>
        <ul className={styles.list} >
          <li  key={nanoid()}><Link to="cast" state={{ from: location.state.from }}>Cast</Link></li>
          <li key={nanoid()}><Link to="reviews" state={{ from: location.state.from }}>Reviews</Link></li>
        </ul>

        <Suspense fallback={<p>Loading.....</p>}>
          <Outlet />
        </Suspense>
      </section>
    );
  };

        // <section>
        //     {movieDetails && (
        //         <div>
        //             {movieDetails.poster_path && <img
        //                 src={`${baseImgUrl}${movieDetails.poster_path}`}
        //                 alt={movieDetails.title} />}
        //             <div>
        //                 <p key={nanoid()}>
        //                     {movieDetails.title}
        //                     {movieDetails.release_date}
        //                 </p>
        //                 <p key={nanoid()}> 
        //                     User score:
        //                     <span>{movieDetails.vote_average * 10} %</span>
        //                 </p>
        //                 <p key={nanoid()}>
        //                     Overview:
        //                     <span>{movieDetails.overview}</span>
        //                 </p>
        //                 <p key={nanoid()}>
        //                     Genres:
        //                     {movieDetails.genres.map(genre => (
        //                         <span>{genre.name}</span>
        //                     ))}
        //                 </p>
        //             </div>
        //         </div>
        //     )}
        //     <ul>
        //         <li key={nanoid()}><Link to="cast" state={{ from: location.state.from }}>Cast</Link></li>
        //         <li key={nanoid()}><Link to="reviews" state={{ from: location.state.from }}>Reviews</Link></li>
        //     </ul>
        //     <Outlet/>
        // </section>
               
        
     
//     );
// };