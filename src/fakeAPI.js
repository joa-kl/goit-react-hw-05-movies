const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer 964358699754c21d74c014b561cf196c'
  }
};

fetch('https://api.themoviedb.org/3/authentication', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));