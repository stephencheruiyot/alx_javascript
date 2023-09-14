const request = require('request');
const fs = require('fs');
const utf8 = 'utf-8';

// Check if the correct number of arguments is provided
if (process.argv.length !== 4) {
  console.error('Usage: node fetchAndSave.js <URL> <filePath>');
  process.exit(1);
}

const url = process.argv[2];
const filePath = process.argv[3];

// Make an HTTP request to the provided URL
request.get(url, (error, response, body) => {
  if (error) {
    console.error('Error requesting the URL:', error);
    process.exit(1);
  }

});