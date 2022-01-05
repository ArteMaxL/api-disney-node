module.exports = (sequelize, dataTypes) => {
    return sequelize.define('movieSerie', {
        id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            initialAutoIncrement: 1
        },
        image: {
            type: dataTypes.STRING(100),
            allowNull: true
        },
        title: {
            type: dataTypes.STRING(100),
            allowNull: true
        },
        date: {
            type: dataTypes.DATEONLY(),
            allowNull: true
        },
        rate: {
            type: dataTypes.INTEGER(11),
            validate: {
                min: 1,
                max: 5
            },
            allowNull: true
        },
        movieORserie: {
            type: dataTypes.STRING(100),
            allowNull: true
        },
        associateChar: {
            type: dataTypes.STRING(100),
            allowNull: true
        }
    })
};