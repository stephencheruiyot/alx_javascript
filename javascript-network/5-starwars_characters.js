const request = require('request');

// Get the Movie ID from command-line arguments
const movieId = process.argv[2];

if (!movieId || isNaN(movieId)) {
  console.log('Please provide a valid Movie ID as the first argument.');
  process.exit(1);
}

// Define the URL to fetch movie details from SWAPI
const movieUrl = `https://swapi.dev/api/films/${movieId}/`;

// Function to fetch characters for a given movie
function fetchCharactersForMovie(url) {
  request(url, (error, response, body) => {
    if (error) {
      console.error('Error:', error);
    } else if (response.statusCode !== 200) {
      console.error(`HTTP Error: ${response.statusCode}`);
    } else {
      const movieData = JSON.parse(body);
      console.log(`Characters in "${movieData.title}":`);
      movieData.characters.forEach((characterUrl) => {
        fetchCharacterName(characterUrl);
      });
    }
  });
}

// Function to fetch and print character names
function fetchCharacterName(url) {
  request(url, (error, response, body) => {
    if (error) {
      console.error('Error:', error);
    } else if (response.statusCode !== 200) {
      console.error(`HTTP Error: ${response.statusCode}`);
    } else {
      const characterData = JSON.parse(body);
      console.log(characterData.name);
    }
  });
}

// Fetch characters for the specified movie
fetchCharactersForMovie(movieUrl);
