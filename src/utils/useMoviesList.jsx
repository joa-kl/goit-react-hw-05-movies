import * as API from '../utils/Api';
import { useState, useEffect } from 'react';

export const useMoviesList = () => {
  const [trendingMovies, setMovies] = useState([]);

  useEffect(() => {
    API.getTrending().then(ret => setMovies(ret));
  }, []);

  return { trendingMovies };
};

