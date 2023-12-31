import * as API from '../utils/Api';
import { useState, useEffect } from 'react';

export const useSearchMovies = input => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    API.searchMovies(input).then(ret => setMovies(ret));
  }, [input]);
  return { movies };
};