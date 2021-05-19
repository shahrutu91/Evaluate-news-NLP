// Api Key and URL for meaning cloud
const api_key = process.env.API_KEY;
const baseUrl = "https://api.meaningcloud.com/sentiment-2.1?key=";

// requirements/configuration  in project
const mockAPIResponse = require('./mockAPI.js');
const path = require('path');
const fetch = require('node-fetch');

// dotenv config
const dotenv = require('dotenv');
dotenv.config();

// express to run server and routes
const express = require('express');
const app = express();
app.use(express.json()); 

// middlewear
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// cors for cross origin allowance
const cors = require('cors');
const { response } = require('express');
app.use(cors());

// Initializing the project folder
// app.use(express.static('src/client'))
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html', { root: __dirname })
    // res.sendFile(path.resolve('dist/index.html'));
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('App listening on port 8081!')
})

// mocking the express.js request
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})



// Fetching API data with POST Request
app.post('/submit', (req, res) => {
    
    fetch (`${baseUrl}${api_key}&lang=auto&url=${req.body.url}`, {
        method: 'POST'
    })
        .then(res => res.json())
        .then(data => res.send(data))
        .catch(error => console.log('error', error));
})