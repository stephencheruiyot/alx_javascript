#!/usr/bin/env node
const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

// Make the HTTP request to fetch the webpage contents
request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('Unexpected status code:', response.statusCode);
  } else {
    const content = body.trim(); // Trim whitespace
    fs.writeFile(filePath, content, 'utf8', (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log;
      }
    });
  }
});
