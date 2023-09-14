const request = require('request');

// Check if a movie ID is provided as a command-line argument
if (process.argv.length < 3) {
  console.error('Usage: node 5-starwars_characters.js <Movie ID>');
  process.exit(1);
}

// Extract the movie ID from the command-line argument
const movieId = process.argv[2];

// URL to fetch movie details from SWAPI
const movieUrl = `https://swapi.dev/api/films/${movieId}/`;

// Function to fetch and print characters from a movie
function printCharacters(movieUrl) {
  request(movieUrl, (error, response, body) => {
    if (error) {
      console.error('Error fetching movie details:', error);
      return;
    }

    if (response.statusCode !== 200) {
      console.error('Failed to fetch movie details. Status code:', response.statusCode);
      return;
    }

    const movie = JSON.parse(body);
    console.log(`Characters in "${movie.title}":`);
    movie.characters.forEach((characterUrl) => {
      request(characterUrl, (charError, charResponse, charBody) => {
        if (charError) {
          console.error('Error fetching character details:', charError);
        } else if (charResponse.statusCode === 200) {
          const character = JSON.parse(charBody);
          console.log(character.name);
        } else {
          console.error('Failed to fetch character details. Status code:', charResponse.statusCode);
        }
      });
    });
  });
}

// Start fetching and printing characters
printCharacters(movieUrl);
