const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzk4YmFmZTlkOGNjYmI4OTlkMDUzZTk4MTQwMTQ4NSIsInN1YiI6IjY1YTM2ZDkzMjk3MzM4MDEyMTEzMmNlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HoIHIuJ-pjpbpsqjC7BcBi4VrS3O6Kvynn2cEI1r6HI'
    }
  };


tabNomFilm = [];
tabImageFilm = [];
  
//recuperation des films populaires
  fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
  .then(response => response.json())
  .then( response  => {
    console.log(response)
    for (let i = 0; i < response.results.length; i++) {
      const element = response.results[i];
      tabNomFilm.push(element.title);
      tabImageFilm.push(element.poster_path);
    }
    //affichage des films
    for (let i = 0; i < tabNomFilm.length; i++) {
        //titre du film
        const titre = document.createElement('h1');
        titre.innerHTML = tabNomFilm[i];
        document.body.appendChild(titre);
        //image du film
        const image = document.createElement('img');
        image.src = 'https://image.tmdb.org/t/p/w500/' + tabImageFilm[i];
        document.body.appendChild(image);
    }
  }).catch(err => console.error(err));
    