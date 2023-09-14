const request = require('request');

// Check if the API URL is provided as a command line argument
if (process.argv.length !== 3) {
  console.error('Usage: node starwars_count.js <API_URL>');
  process.exit(1);
}

// Get the API URL from the command line argument
const apiUrl = process.argv[2];

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
