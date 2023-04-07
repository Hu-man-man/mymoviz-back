
var express = require('express');
var router = express.Router();
const fetch = require('node-fetch')
require ('dotenv').config();

const api = process.env.NPMJS_API_KEY;


//requête vers le webservice The Movie Database afin de récupérer les dernières "découvertes"

router.get('/movies', (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api}`)
    .then(response =>response.json())
    .then(apiData=> {
        res.json(apiData.results);
        
    })
})



module.exports = router;
