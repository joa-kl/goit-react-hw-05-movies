
import { useParams } from "react-router-dom";
import { useMovieReviews } from '../../utils/useMovieReviews';
import { nanoid } from "nanoid";
import styles from "./MovieReviews.module.css"


export const MovieReviews = () => {
  const { movieId } = useParams();
  const { movieReviews } = useMovieReviews(movieId);

  return (
    <div>
      <ul>
        {movieReviews.length > 0 ?
          movieReviews.map(result => (
          <li key={result.id}>
            <p className={styles.author}>Author: {result.author}</p>
            <p className={styles.reviewContent}>{result.content}</p>
          </li>
          )) : <li key={nanoid()}> We don't have any reviews for this movie</li>
        }
      </ul>
    </div>
  );
};

export default MovieReviews;
