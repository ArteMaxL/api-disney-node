module.exports = (sequelize, dataTypes) => {
    return sequelize.define('movieSerie', {
        id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        image: {
            type: dataTypes.STRING(100),
            allowNull: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: true
        },
        movieORserie: {
            type: dataTypes.STRING(100),
            allowNull: true
        }
    })
};