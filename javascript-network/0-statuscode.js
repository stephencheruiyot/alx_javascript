#!/usr/bin/env node
const request = require('request');

// Define the URL you want to request
const urlToRequest = 'https://intranet.alxswe.com';

// Make the GET request
request('urlToRequest', (error, response) => {
    if (error){
        console.error('Error: ${error.message}');
    } else {
        // Display the status code
    console.log('Code:, ${response.statusCode}');
    }
});