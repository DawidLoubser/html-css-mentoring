/** A tiny node server that prints out
 * HTTP request parameters, and submitted Form or
 * JSON data, to the server's console.
 * 
 * To run: In the project root, run `npm install`
 * and then GET or POST to: http://localhost:3000/something
 */
const express = require('express')
const bodyParser = require('body-parser');

// Set up Node Express middleware
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


/** Handles a request, logs params to server console */
const printParams = (req, res) => {
  console.log('Received', 
    req.body,  // Form data or JSON
    req.query) // HTTP GET query params
  res.send('Thank you')
}

// Wire up to URLs
app.get('/something', printParams)
app.post('/something', printParams)

app.listen(3000)
console.log('Server running on port 3000')