const axios = require('axios');

// Function to fetch and print characters from a Star Wars movie
async function printCharactersFromMovie(movieId) {
  try {
    // Fetch movie details
    const movieResponse = await axios.get(`https://swapi.dev/api/films/${movieId}/`);
    const movie = movieResponse.data;

    console.log(`Characters in "${movie.title}":`);
    console.log('------------------------');

    // Create an array of character request promises
    const characterRequests = movie.characters.map(async (characterUrl) => {
      const characterResponse = await axios.get(characterUrl);
      const character = characterResponse.data;
      return character.name;
    });

    // Wait for all character requests to complete
    const characterNames = await Promise.all(characterRequests);

    // Print character names
    characterNames.forEach((name) => {
      console.log(name);
    });

  } catch (error) {
    console.error('Error:', error);
  }
}

// Usage example: Specify the movie ID as an argument (e.g., 3 for "Return of the Jedi")
const movieId = process.argv[2];
if (!movieId) {
  console.error('Please provide a movie ID as an argument.');
} else {
  printCharactersFromMovie(movieId);
}
