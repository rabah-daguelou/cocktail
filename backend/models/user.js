/********************/
// Import des modules 
const {DataTypes}= require ('sequelize');
const DB= require ('../db.config');
const bcrypt = require ('bcrypt')


/*******************/
// Définition du modèle User

const User = DB.define('User', {
    id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
    },
    first_name: {
        type: DataTypes.STRING(100),
        defaultValue:'',
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING(100),
        defaultValue:'',
        allowNull: false,
    },
    pseudo: {
        type: DataTypes.STRING(100),
        allowNull:false,
        unique:true,
    },
    email: {
        type: DataTypes.STRING,
        validate: {         // Imposer un email
            isEmail: true, // Ici une validation de données
        }
    },
    password: {
        type: DataTypes.STRING(64), // Le hachage sortira 64 caractères
        is:/^[0-9a-f](64)$/i // Ici une contrainte
    },

}, {paranoid: true }) // Ici pour faire du softdelete (mettre à la corbeille)

// Utilisation du hook befforeCreate pour hacher le mot de passe
User.beforeCreate ( async (user, options) => {
    let hash = await bcrypt.hash (user.password, parseInt(process.env.BCRYPT_SALT_ROUND))
    user.password=hash;
})

// Comparaison de mots de passes
User.checkPassword = async (password, originel) => {
    return await bcrypt.compare(password, originel)
}


// Synchronisation du modèle User
User.sync();
/*
User.sync((err)=> {
    console.log('Database Sync Error !', err)
})
User.sync({force:true});
User.sync({alter:true});
*/
module.exports= User;