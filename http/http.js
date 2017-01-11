var request = require('request');

import { createFetch, base, accept, parse } from 'http-client'

const fetch = createFetch(
  base('http://www.google.com'),  // Prefix all request URLs
  accept('application/json'),         // Set "Accept: application/json" in the request headers
  parse('json')                       // Read the response as JSON and put it in response.body
)

fetch(request).then(response => {
  console.log(response.jsonData)
})
/*
request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage. 
  }
}) */