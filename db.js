const Sequelize = require('sequelize');

const CharModel = require('./models/character');
const GenreModel = require('./models/genre');
const MovieModel = require('./models/movieSerie');

const sequelize = new Sequelize('heroku_b4fa3f59072f20b', 'b6ec5b96d879a4', 'a64262c7',{
    host: 'us-cdbr-east-05.cleardb.net',
    dialect: 'mysql'
});

const Character = CharModel(sequelize, Sequelize);
const Genre = GenreModel(sequelize, Sequelize);
const MovieOrSerie = MovieModel(sequelize, Sequelize);

sequelize.sync({force: false})
    .then(()=>{
        console.log('Tablas Sincronizadas.');
    });

module.exports = {
    Character,
    Genre,
    MovieOrSerie
}