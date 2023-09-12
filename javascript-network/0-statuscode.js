#!/usr/bin/env node
const request = require('request');


request.get(url, (error, response) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }

  console.log(`code: ${response.statusCode}`);
});