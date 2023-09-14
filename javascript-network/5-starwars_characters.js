const request = require('request');

// Function to fetch and print characters from a Star Wars movie
function printCharactersFromMovie(movieId) {
  // Construct the URL to fetch movie details
  const movieUrl = `https://swapi.dev/api/films/${movieId}/`;

  // Make a request to get movie details
  request(movieUrl, (error, response, body) => {
    if (error) {
      console.error('Error:', error);
    } else if (response.statusCode !== 200) {
      console.error('Invalid status code:', response.statusCode);
    } else {
      const movie = JSON.parse(body);

      console.log(`Characters in "${movie.title}":`);
      console.log('------------------------');

      // Iterate through characters in the movie
      movie.characters.forEach((characterUrl) => {
        // Make a request to get character details
        request(characterUrl, (error, response, body) => {
          if (error) {
            console.error('Error:', error);
          } else if (response.statusCode !== 200) {
            console.error('Invalid status code:', response.statusCode);
          } else {
            const character = JSON.parse(body);
            console.log(character.name);
          }
        });
      });
    }
  });
}

// Usage example: Specify the movie ID as an argument (e.g., 3 for "Return of the Jedi")
const movieId = process.argv[2];
if (!movieId) {
  console.error('Please provide a movie ID as an argument.');
} else {
  printCharactersFromMovie(movieId);
}
