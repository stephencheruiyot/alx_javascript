const request = require('request');

// Replace 'YOUR_API_KEY' with your actual API key if needed (not always required)
const API_KEY = 'YOUR_API_KEY';

// Movie ID
const movieId = process.argv[2];

if (!movieId) {
  console.error('Please provide a movie ID as the first argument.');
  process.exit(1);
}

// Define the URL to fetch the movie details
const movieURL = `https://swapi.dev/api/films/${movieId}/`;

// Function to fetch and print character names for a given movie
function fetchCharacters(movieURL) {
  request(movieURL, { json: true }, (error, response, body) => {
    if (error) {
      console.error('Error fetching movie data:', error);
      return;
    }

    if (response.statusCode !== 200) {
      console.error('Error:', response.statusCode, body);
      return;
    }

    console.log(`Characters in Star Wars Episode ${body.episode_id}: ${body.title}`);
    console.log('------------------------');

    body.characters.forEach((characterURL) => {
      request(characterURL, { json: true }, (charError, charResponse, charBody) => {
        if (charError) {
          console.error('Error fetching character data:', charError);
          return;
        }

        if (charResponse.statusCode !== 200) {
          console.error('Error:', charResponse.statusCode, charBody);
          return;
        }

        console.log(charBody.name);
      });
    });
  });
}

fetchCharacters(movieURL);
