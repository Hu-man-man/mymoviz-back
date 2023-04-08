
var express = require('express');
var router = express.Router();
const fetch = require('node-fetch')
require ('dotenv').config();

const api = process.env.NPMJS_API_KEY;

router.use((req, res, next) => {
    res.status(404).json({ message: "La page demandée n'a pas été trouvée" });
  });
//requête vers le webservice The Movie Database afin de récupérer les dernières "découvertes"

router.get('/movies', (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api}`)
    .then(response =>response.json())
    .then(apiData=> {
        console.log('fetch', apiData.page)
        res.json(apiData.results);  
    })
    .catch((error) => console.log("error", error))
})



module.exports = router;
