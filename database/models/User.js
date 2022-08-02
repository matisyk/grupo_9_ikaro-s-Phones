module.exports = function(sequelize, dataTypes){
    let alias = 'Users'
    let cols = {
        id : { type: dataTypes.INTEGER },
        fullName : { type: dataTypes.STRING},
        email : { type: dataTypes.STRING},
        password : { type: dataTypes.STRING},
        avatar : { type: dataTypes.STRING},
        admin : { type: dataTypes.BOOLEAN}
    }
    let config = {
        tableName : "Users",
        timesTamps: false
    }

    let Users = sequelize.define(alias, cols, config);

    return Users;
}