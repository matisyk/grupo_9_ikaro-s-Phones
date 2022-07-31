
module.exports = function(sequelize, dataTypes){
    let alias = 'Brand'
    let cols = {
        id : { type: dataTypes.INTEGER },
        brand : { type: dataTypes.STRING},
    }
    let config = {
        tableName : "Brand",
        timesTamps: false
    }

    let Brand = sequelize.define(alias, cols, config);

    return Brand;
}