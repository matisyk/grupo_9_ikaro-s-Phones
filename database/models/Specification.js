module.exports = function(sequelize, dataTypes){
    let alias = 'Specifications'
    let cols = {
        id : { 
            type: dataTypes.INTEGER,
            autoIncrement: true
        },
        internalMemory : { type: dataTypes.STRING(100)},
        externalMemory : { type: dataTypes.INTEGER},
        ram : { type: dataTypes.INTEGER}
    }
    let config = {
        tableName : "Specifications",
        timesTamps: false
    }

    let Specifications = sequelize.define(alias, cols, config);

    Specifications.associate = function(models){

        Specifications.hasOne(models.Phones,{
            as:"phone",
            foreignKey: "idSpecification"
        })

        Specifications.belongsTo(models.Camera,{
            as:"camera",
            foreignKey: "idCamera"
        })

        Specifications.belongsTo(models.Screen,{
            as:"screen",
            foreignKey: "idScreen"
        })
        
    }

    return Specifications;
}