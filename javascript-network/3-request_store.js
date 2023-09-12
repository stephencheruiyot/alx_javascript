const request = require('request');
const fs = require('fs');
const utf8 = require('utf8'); // For UTF-8 encoding

// Check if the correct number of arguments is provided
if (process.argv.length !== 4) {
  console.error('Usage: node downloadAndSave.js <URL> <outputFilePath>');
  process.exit(1);
}

const url = process.argv[2];
const filePath = process.argv[3];

// Make the HTTP request to fetch the webpage contents
request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('Unexpected status code:', response.statusCode);
  } else {
    // Save the response body to the specified file
    fs.writeFile(filePath, utf8.encode(body), 'utf8', (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log(`Webpage content saved to ${filePath}`);
      }
    });
  }
});
