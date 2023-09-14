const request = require('request');
const fs = require('fs');
const utf8 = 'utf-8';


const url = process.argv[2];
const filePath = process.argv[3];

// Make an HTTP request to the provided URL
request.get(url, (error, response, body) => {
  if (error) {
    console.error('Error requesting the URL:', error);
    process.exit(1);
  }

   // Write the response body to a file
   fs.writeFile(filePath, body, { encoding: utf8 }, (err) => {
    if (err) {
      console.error('Error writing to the file:', err);
      process.exit(1);
    }
  }

   )});