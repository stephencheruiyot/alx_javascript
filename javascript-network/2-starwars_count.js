const request = require('request');

const apiUrl = 'https://swapi-api.alx-tools.com/api/films/';
const characterId = 18;

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error('API request failed with status code:', response.statusCode);
    return;
  }

  const films = JSON.parse(body).results;
  const numberOfMoviesWithWedgeAntilles = films.reduce((count, film) => {
    if (film.characters.includes(`${url/characterId}`)) {
      count++;
    }
    return count;
  }, 0);

  console.log(numberOfMoviesWithWedgeAntilles);
});
