
module.exports = function(sequelize, dataTypes){
    let alias = 'Brand'
    let cols = {
        id : { type: dataTypes.INTEGER(11) },
        brand : { type: dataTypes.STRING(100)},
    }
    let config = {
        tableName : "Brand",
        timesTamps: false
    }

    let Brand = sequelize.define(alias, cols, config);

    Brand.associate = function(models){

        Brand.hasMany(models.Phones, {
            as: "phones",
            foreignKey : "idBrand"
        })
        
    }

    return Brand;
}