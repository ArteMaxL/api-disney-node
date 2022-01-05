const router = require('express').Router();
const apiCharacterRouter = require('./api/character');
const apiGenreRouter = require('./api/genre');
const apiMovieRouter = require('./api/movieSerie');
const apiUsersRouter = require('./api/user');


router.use('/characters', apiCharacterRouter);
router.use('/movies', apiMovieRouter);
router.use('/auth', apiUsersRouter);



module.exports = router;