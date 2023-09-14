// Import the 'request' module
const request = require('request');

// Define the API URL for Star Wars films
const apiUrl = 'https://swapi-api.alx-tools.com/api/films/';

// Character ID for "Wedge Antilles"
const characterId = 18;

// Function to count movies with "Wedge Antilles"
function countMoviesWithWedgeAntilles(apiUrl, characterId) {
  // Send a GET request to the Star Wars API
  request(apiUrl, (error, response, body) => {
    // Check for any errors in the request
    if (error) {
      console.error('Error:', error);
    } else {
      // Parse the JSON response
      const data = JSON.parse(body);

      // Check if the 'results' property exists and contains an array
      if (data.results && Array.isArray(data.results)) {
        const films = data.results;

        // Initialize a counter for movies with "Wedge Antilles"
        let count = 0;

        // Iterate through the films
        films.forEach((film) => {
          // Check if the character ID is present in the 'characters' array
          if (film.characters.includes(`https://swapi-api.alx-tools.com/api/people/18/`)) {
            count++;
          }
        });

        // Print the count of movies with "Wedge Antilles"
        console.log(count);
      } else {
        console.error('Invalid API response format');
      }
    }
  });
}

// Call the function to count movies with "Wedge Antilles"
countMoviesWithWedgeAntilles(apiUrl, characterId);
