
module.exports = function(sequelize, dataTypes){
    let alias = 'Phones'
    let cols = {
        id : { type: dataTypes.INTEGER },
    
        model : { type: dataTypes.STRING },
        category : { type: dataTypes.STRING},
       
        description : { type: dataTypes.STRING},
        image : { type: dataTypes.STRING},
        video : { type: dataTypes.STRING},
        price : { type: dataTypes.INTEGER},
        discount : { type: dataTypes.INTEGER},
        
    }
    let config = {
        tableName : "Phones",
        timesTamps: false
    }

    let Phones = sequelize.define(alias, cols, config);

    return Phones;
}