
// Import des modules
const express= require ('express')

// Récupération du router d'express
let router= express.Router();

// Récupération du controlleur auth.js
const authCtrl = require ( '../controllers/auth')

/********************/
// Routage de la ressource auth
router.post('/login', authCtrl.login) 

module.exports = router;