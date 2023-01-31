/********************/
// Import des modules 
const {DataTypes}= require ('sequelize');
const DB= require ('../db.config');


/*******************/
// Définition du modèle Cocktail

const Cocktail = DB.define('Cocktail', {
    id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
    },
    nom: {
        type: DataTypes.STRING(100),
        defaultValue:'',
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        defaultValue:'',
        allowNull:false,
    },
    recette: {
        type: DataTypes.TEXT,
        defaultValue:'',
        allowNull:false,
        }
    },
{paranoid: true }) // Ici pour faire du softdelete (mettre à la corbeille)

// Synchronisation du modèle Cocktail avec la DB
/*
Cocktail.sync((err)=> {
    console.log('Database Sync Error !', err)
})
Cocktail.sync({force:true});
Cocktail.sync({alter:true});
*/
module.exports= Cocktail;