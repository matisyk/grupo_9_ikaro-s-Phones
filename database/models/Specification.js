module.exports = function(sequelize, dataTypes){
    let alias = 'Specifications'
    let cols = {
        id : { 
            type: dataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        internalMemory : { 
            type: dataTypes.INTEGER,
            allowNull: true,
        },
        externalMemory : { 
            type: dataTypes.INTEGER,
            allowNull: true,
        },
        ram : { 
            type: dataTypes.INTEGER,
            allowNull: true,
        },
        idCamera:{
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        idScreen:{
            type: dataTypes.INTEGER,
            allowNull: false,
        }
    }
    let config = {
        tableName : "specifications",
        timestamps: false
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