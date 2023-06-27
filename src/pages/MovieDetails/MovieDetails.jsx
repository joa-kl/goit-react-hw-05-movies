import { useParams, Link, useLocation, Outlet } from "react-router-dom";
import { nanoid } from "nanoid";
import { ButtonBack } from "../../components/ButtonBack/ButtonBack";
import styles from "./MovieDetails.module.css"
import { useMovieDetails } from '../../utils/useMovieDetails';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const { movieDetails } = useMovieDetails(movieId);
  const location = useLocation();
  
  return (
    <div className={styles.page_container}>
      <ButtonBack />
      <div className={styles.container}>
        <img
          className={styles.img}
          src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movieDetails.poster_path}`}
          alt="{movieDetails.original_title}"
        />
        <div className={styles.container_details}>
          <h2 className={styles.title}>
            {movieDetails.title} (
            {movieDetails.release_date
              ? movieDetails.release_date.substring(0, 4)
              : ''}
            )
          </h2>

          <p>
            User Score:{' '}
            {movieDetails.vote_average
              ? Math.fround(movieDetails.vote_average * 10).toFixed(0)
              : ''}
            %
          </p>
          <h3>Overview</h3>
          <p>{movieDetails.overview}</p>

          <h4>Genres</h4>
          <p>
            {movieDetails.genres
              ? movieDetails.genres.map(genre => genre.name).join(' ')
              : ''}
          </p>
        </div>
      </div>

      <p>Additional information</p>

      <ul className={styles.list}>
        <li key={nanoid()} className={styles.list_item}>
          <Link to="cast" state={{ from: location.state.from }}>
            Cast
          </Link>
        </li>
        <li key={nanoid()} className={styles.list_item}>
          <Link to="reviews" state={{ from: location.state.from }}>
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
