module.exports = function(sequelize, dataTypes){
    let alias = 'Screen'
    let cols = {
        id : { type: dataTypes.INTEGER },
        resolution : { type: dataTypes.INTEGER},
        size : { type: dataTypes.INTEGER}
    }
    let config = {
        tableName : "Screen",
        timesTamps: false
    }

    let Screen = sequelize.define(alias, cols, config);

    Screen.associate = function(models){

        Screen.hasOne(models.Specifications,{
            as:"specification",
            foreignKey: "idScreen"
        })
        
    }

    return Screen;
}