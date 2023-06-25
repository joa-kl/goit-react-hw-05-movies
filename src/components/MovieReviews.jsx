import { SearchMovie } from "./Api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import styles from "./MovieReviews.module.css"


export const MovieReviews = () => {
  const params = useParams();
  const paramsId = Number(params.movieId);
  const [movieReviews, setMovieReviews] = useState();

  useEffect(() => {
    SearchMovie('reviews', paramsId, setMovieReviews);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      {movieReviews && 
      <ul>
        {movieReviews.results.length > 0 ?
          movieReviews.results.map(result => (
          <li key={result.id}>
            <p className={styles.author}>Author: {result.author}</p>
            <p className={styles.reviewContent}>{result.content}</p>
          </li>
          )) : <li key={nanoid()}> We don't have any reviews for this movie</li>
        }
      </ul>
      }
    </section>
  );
};

export default MovieReviews;