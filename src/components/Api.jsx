// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer 964358699754c21d74c014b561cf196c'
//   }
// };

export const SearchMovie = (value, paramsId, setFoo) => {
    const API_KEY = "964358699754c21d74c014b561cf196c";
    const originURL = "https://api.themoviedb.org/3/";

    fetch(`${originURL}movie/${paramsId}/${value}?api_key=${API_KEY}`)
        .then(response => {
        if (response.ok) {
            return response.json();
        } 
        return Promise.reject(new Error('Enter another name'))
    })
        .then(results => setFoo(results))
        .catch(err => console.error(err));
}
