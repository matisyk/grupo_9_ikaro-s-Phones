
module.exports = function(sequelize, dataTypes){
    let alias = 'Camera'
    let cols = {
        id : { type: dataTypes.INTEGER },
        camera : { type: dataTypes.STRING(100)},
        frontalCamera : { type: dataTypes.INTEGER},
        recorder : { type: dataTypes.INTEGER},
    }
    let config = {
        tableName : "Camera",
        timesTamps: false
    }

    let Camera = sequelize.define(alias, cols, config);

    Camera.associate = function(models){

        Camera.hasOne(models.Specifications,{
            as:"specification",
            foreignKey: "idCamera"
        })
        
    }

    return Camera;
}