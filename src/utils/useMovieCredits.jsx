import * as API from '../utils/Api';
import { useState, useEffect } from 'react';

export const useMovieCredits = movieId => {
  const [movieCredits, setMovieCredits] = useState([]);

  useEffect(() => {
    API.getMovieCredits(movieId).then(ret => setMovieCredits(ret));
  }, [movieId]);
  return { movieCredits };
};