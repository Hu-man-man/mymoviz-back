var express = require('express');
var router = express.Router();
const fetch = require('node-fetch')
require('dotenv').config();

const api = process.env.NPMJS_API_KEY;

//requête vers le webservice The Movie Database afin de récupérer les dernières "découvertes"
router.get('/movies', (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur 404 : la ressource est introuvable');
        }
        return response.json();
    })
    .then(apiData => {
        console.log('fetch', apiData.page)
        res.json(apiData.results);  
    })
    .catch((error) => {
        console.log(error.message);
        res.status(404).send(error.message);
    });
})

module.exports = router;
