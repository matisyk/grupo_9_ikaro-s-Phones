module.exports = function(sequelize, dataTypes){
    let alias = 'System'
    let cols = {
        id : { type: dataTypes.INTEGER },
        system : { type: dataTypes.STRING}
    }
    let config = {
        tableName : "System",
        timesTamps: false
    }

    let System = sequelize.define(alias, cols, config);

    System.associate = function(models){
        System.hasMany(models.Phones, {
            as: "phones",
            foreignKey : "idSystem"
        })
    }

    return System;
}