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
        camera: {
            type: dataTypes.STRING(45),
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
        size : { 
            type: dataTypes.STRING(45),
            allowNull: true,
        },
        resolution : { 
            type: dataTypes.STRING(45),
            allowNull: true,
        }
    }
    let config = {
        timestamps: false
    }

    let Specifications = sequelize.define(alias, cols, config);

    Specifications.associate = function(models){

        Specifications.hasOne(models.Phones,{
            as:"phone",
            foreignKey: "idSpecification"
        })
        
    }

    return Specifications;
}