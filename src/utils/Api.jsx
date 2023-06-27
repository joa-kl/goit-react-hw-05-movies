import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const API_KEY = "964358699754c21d74c014b561cf196c";

export const getTrending = async () => {
  const response = await axios.get(`/trending/movie/day${API_KEY}`);
  return response.data.results.map(({ id, title }) => {
    return {
      id,
      title,
    };
  });
};

export const searchMovies = async inputValue => {
  const response = await axios.get(
    `/search/movie${API_KEY}&query=${inputValue}&language=en-US&page=1`
  );
  return response.data.results.map(({ id, title }) => {
    return {
      id,
      title,
    };
  });
};

export const getMovieDetails = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}${API_KEY}&language=en-US`
  );
  return response.data;
};

export const getMovieCredits = async moviesId => {
  const response = await axios.get(
    `/movie/${moviesId}/credits${API_KEY}&language=en-US`
  );

  return response.data.cast.map(({ name, character, profile_path, id }) => {
    return {
      name,
      character,
      profile_path,
      id,
    };
  });
};

export const getMoviesReviews = async moviesId => {
  const response = await axios.get(
    `/movie/${moviesId}/reviews${API_KEY}&language=en-US&page=1`
  );
  return response.data.results.map(({ author, content, id }) => {
    return {
      author,
      content,
      id,
    };
  });
};


// export const SearchMovie = (value, paramsId, setFoo) => {
//     const API_KEY = "964358699754c21d74c014b561cf196c";
//     const originURL = "https://api.themoviedb.org/3/";

//     fetch(`${originURL}movie/${paramsId}/${value}?api_key=${API_KEY}`)
//         .then(response => {
//         if (response.ok) {
//             return response.json();
//         } 
//         return Promise.reject(new Error('Enter another name'))
//     })
//         .then(results => setFoo(results))
//         .catch(err => console.error(err));
// }
