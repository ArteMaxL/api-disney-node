const router = require('express').Router();

const { MovieOrSerie, Character } = require('../../db');

router.get('/', async (req, res) => {
    //res.send('Entra correctamente en /movies.');
    console.log(req.userId);
    const movies = await MovieOrSerie.findAll({
        attributes: ['image', 'title', 'date']
    });
    res.json(movies);
});

router.post('/', async (req, res) => {
    const movie = await MovieOrSerie.create(req.body);
    res.json(movie);
});

router.put('/:id', async (req, res) => {
    await MovieOrSerie.update(req.body, {
        where: { id: req.params.id }
    });
    res.json({ success: 'Movie updated.' });
});

router.delete('/:id', async (req, res) => {
    await MovieOrSerie.destroy({
        where: { id: req.params.id }
    });
    res.json({ success: 'Movie deleted.' })
});

module.exports = router;