const request = require('request');
const apiUrl = 'https://swapi-api.alx-tools.com/api/films/';
function countMoviesWithWedgeAntilles(apiUrl) {
  // Define the character ID for Wedge Antilles
  const characterId = 18;

  // Make the HTTP request to the Star Wars API films endpoint
  request(apiUrl, (error, response, body) => {
    if (error) {
      console.error('Error:', error);
      return;
    }

    // Parse the JSON response
    const data = JSON.parse(body);

    // Filter the films where Wedge Antilles appears
    const filmsWithWedgeAntilles = data.results.filter((film) =>
      film.characters.includes(apiUrl + 'people/' + characterId + '/')
    );

    // Print the count of films with Wedge Antilles
    console.log(`Number of films with Wedge Antilles: ${filmsWithWedgeAntilles.length}`);
  });
};

//countMoviesWithWedgeAntilles(apiUrl);
