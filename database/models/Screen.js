module.exports = function(sequelize, dataTypes){
    let alias = 'Screen'
    let cols = {
        id : { 
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        resolution : { 
            type: dataTypes.STRING(45),
            allowNull: true,
        },
        size : { 
            type: dataTypes.STRING(45),
            allowNull: true,
        }
    }
    let config = {
        tableName : "screen",
        timestamps: false
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