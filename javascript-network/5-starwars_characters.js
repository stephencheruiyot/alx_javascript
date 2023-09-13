const request = require('request');

if (process.argv.length !== 3) {
  console.log('Usage: node starwars_characters.js <Movie ID>');
  process.exit(1);
}

const movieId = process.argv[2];

// Define the URL to fetch characters from the Star Wars API.
const apiUrl = `https://swapi.dev/api/films/${movieId}/`;

// Function to fetch characters from the API.
function getCharacters(url) {
  request(url, (error, response, body) => {
    if (error) {
      console.error('Error fetching data:', error);
      process.exit(1);
    }
    
    if (response.statusCode !== 200) {
      console.error(`Error: ${response.statusCode} - ${response.statusMessage}`);
      process.exit(1);
    }

    const filmData = JSON.parse(body);
    console.log(`Characters in "${filmData.title}":`);
    filmData.characters.forEach(characterUrl => {
      // Fetch character data and print the character's name.
      request(characterUrl, (error, response, body) => {
        if (error) {
          console.error('Error fetching character data:', error);
          process.exit(1);
        }
        
        if (response.statusCode !== 200) {
          console.error(`Error: ${response.statusCode} - ${response.statusMessage}`);
          process.exit(1);
        }

        const characterData = JSON.parse(body);
        console.log(characterData.name);
      });
    });
  });
}

// Start by fetching movie data and then characters.
getCharacters(apiUrl);
