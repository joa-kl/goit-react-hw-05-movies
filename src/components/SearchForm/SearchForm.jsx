import { useSearchParams } from 'react-router-dom';
import * as API from '../../utils/Api';
import { useEffect, useState } from 'react';
import { MoviesList } from '../MoviesList/MoviesList';
// import Notiflix from 'notiflix';

export const SearchForm = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = e => { 
      setSearchParams({ query: e.target[0].value });
      e.preventDefault();
    return;
    
  };

  useEffect(() => {
    const movieTitle = searchParams.get('query');
    if (movieTitle) {
      API.searchMovies(movieTitle).then(ret => setMovies(ret));
    }
    // else {
    //   Notiflix.Notify.warning("Enter a movie title")
    // } 

  }, [searchParams]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search..."></input>
        <button type="submit">Search</button>
      </form>
      <MoviesList movies={movies} />
    </div>
  );
};

export default SearchForm;