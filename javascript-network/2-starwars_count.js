const request = require('request');

const apiUrl = 'https://swapi-api.alx-tools.com/api/films/'

// Make a GET request to the Star Wars API
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }

  // Parse the API response
  const data = JSON.parse(body);

  // Filter the movies where "Wedge Antilles" (character ID 18) is present
  const moviesWithWedge = data.results.filter((movie) =>
    movie.characters.includes('https://swapi-api.alx-tools.com/api/people/18/')
  );

  // Print the count of movies with Wedge Antilles
  console.log(moviesWithWedge.length);
});
