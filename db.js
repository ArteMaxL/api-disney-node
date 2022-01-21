const Sequelize = require('sequelize');

const CharModel = require('./models/character');
const GenreModel = require('./models/genre');
const MovieModel = require('./models/movieSerie');
const UserModel = require('./models/user');

const sequelize = new Sequelize('disney_api', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres'
  });
  

const Character = CharModel(sequelize, Sequelize);
const Genre = GenreModel(sequelize, Sequelize);
const MovieOrSerie = MovieModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);


sequelize.sync({ force: false })
    .then(() => {
        console.log('Tablas Sincronizadas.');
    });

module.exports = {
    Character,
    Genre,
    MovieOrSerie,
    User
}