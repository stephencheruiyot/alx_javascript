const request = require('request');
request('https://intranet.alxswe.com', function (error, response) {
    console.log('Code:', response && response.statusCode);
});