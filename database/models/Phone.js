
module.exports = function(sequelize, dataTypes){
    let alias = 'Phones'
    let cols = {
        id : { 
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        model : { type: dataTypes.STRING(100) },
        category : { type: dataTypes.STRING(100)},
        description : { type: dataTypes.STRING(100)},
        image : { type: dataTypes.STRING(100)},
        video : { type: dataTypes.STRING(100)},
        price : { type: dataTypes.DECIMAL(8,2)},
        discount : { type: dataTypes.INTEGER(11)},
        
    }
    let config = {
        tableName : "Phones",
        timesTamps: false
    }

    let Phones = sequelize.define(alias, cols, config);

    Phones.associate = function(models){

        Phones.belongsTo(models.Brands, {
            as: "brand",
            foreignKey : "idBrand"
        })

        Phones.belongsTo(models.System, {
            as: "system",
            foreignKey : "idSystem"
        })

        Phones.belongsTo(models.Specifications,{
            as:"specification",
            foreignKey: "idSpecifications"
        })
        
    }

    return Phones;
}