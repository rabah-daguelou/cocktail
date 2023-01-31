/********************************/
/*** Import des modules */
// Dans le module sequelize il y a plein de choses. Ici, on 
// utilise les accolades pour importer uniquement sequelize.
const {Sequelize}= require ('sequelize');



/*********************************/
// Connexion à la base de données

let sequelize= new Sequelize (
   
    // Globalement, on a besoin de:
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,

    // En options
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql',
        logging:false, // pour le debug dans la console
    }
)

// Synchronisation des modèles 
/*sequelize.sync((err)=> {
    console.log('Database Sync Error !', err)
})
*/
module.exports= sequelize
