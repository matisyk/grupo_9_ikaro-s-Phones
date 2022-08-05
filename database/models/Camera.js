
module.exports = function(sequelize, dataTypes){
    let alias = 'Camera'
    let cols = {
        id: { 
            type: dataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        camera: { 
            type: dataTypes.STRING(100),
            allowNull: true,
        },
        frontalCamera : { 
            type: dataTypes.INTEGER,
            allowNull: true,
        },
        recorder: { 
            type: dataTypes.INTEGER,
            allowNull: true,
        },
    }
    let config = {
        tableName : "camera",
        timestamps: false
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