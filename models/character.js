module.exports = (sequelize, dataTypes) => {
    return sequelize.define('character', {
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
        name: {
            type: dataTypes.STRING(45),
            allowNull: true
        },
        age: {
            type: dataTypes.STRING(45),
            allowNull: true
        },
        weight: {
            type: dataTypes.STRING(45),
            allowNull: true
        },
        history: {
            type: dataTypes.STRING(300),
            allowNull: true
        },
        movieORserie: {
            type: dataTypes.STRING(45),
            allowNull: true
        }
    })
};