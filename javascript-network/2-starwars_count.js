const request = require('request');

if (process.argv.length !== 3) {
  console.error('Usage: node 2-starwars_count.js <API_URL>');
  process.exit(1);
}

const apiUrl = process.argv[2];

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error(`Error: Status code ${response.statusCode}`);
    process.exit(1);
  }

  try {
    const filmData = JSON.parse(body);
    const wedgeAntillesFilms = filmData.results.filter(film =>
      film.characters.includes('https://swapi-api.alx-tools.com/api/people/18/')
    );

    console.log(wedgeAntillesFilms.length);
  } catch (parseError) {
    console.error('Error parsing JSON response:', parseError.message);
    process.exit(1);
  }
});
