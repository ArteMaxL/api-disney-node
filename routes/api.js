const router = require('express').Router();
const apiCharacterRouter = require('./api/character');
const apiGenreRouter = require('./api/genre');
const apiMovieRouter = require('./api/movieSerie');

router.use('/characters', apiCharacterRouter);
router.use('/movies', apiMovieRouter);



module.exports = router;