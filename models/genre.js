module.exports = (sequelize, dataTypes) => {
    return sequelize.define('genre', {
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
            type: dataTypes.STRING(45),
            allowNull: true
        },
        date: {
            type: dataTypes.DATEONLY(),
            allowNull: true
        },
        associedMovies: {
            type: dataTypes.STRING(100),
            allowNull: true
        }
    })
};