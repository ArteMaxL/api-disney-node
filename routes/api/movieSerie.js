const router = require('express').Router();

const { MovieOrSerie } = require('../../db');

router.get('/', async (req, res)=>{
    //res.send('Entra correctamente en /movies.');
    const movie = await MovieOrSerie.findAll();
    res.json(movie);
});

module.exports = router;