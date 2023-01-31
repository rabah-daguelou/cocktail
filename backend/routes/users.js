/***************************/
// Import des modules
const express = require('express');

// Récupération du router d'express
let router= express.Router();

/*******************************/
// Middleware pour loguer la date des requêtes
router.use((req, res, next) => {
    const event = new Date()
    console.log (' User Time:', event);
    next ();
});

// Import du middleware checkToken
const checkTokenMiddleware = require ('../jsonwebtoken/check')

// Import du controlleur des users
const usersCtrl = require ('../controllers/user')

// -----  Routage de la ressource User ----------

// 1- Récupération de tous les utilisateurs
router.get('', usersCtrl.getAllUsers)

// 2- Récupération d'un utilisateur en particulier
router.get('/:id', checkTokenMiddleware, usersCtrl.getOneUser)

// 3- Ajouter un utilisateur // Le Post n'est pas utilisé dans les API restfull
router.put('', usersCtrl.addOneUser)

// 4- Modifier un utilisateur défini
router.patch('/:id', checkTokenMiddleware, usersCtrl.modifyOneUser);

// 5- Supprimer un utilisateur défini

    // 5-1 Supprimer un utilisateur et le mettre dans la corbeille
        // Soft delete
router.delete('/trash/:id', checkTokenMiddleware, usersCtrl.deleteOneUser)

    // 5-2 Suprimer définitivement un utilisateur de la BDD
router.delete('/:id', checkTokenMiddleware, usersCtrl.deleteOneUser)

// 6- Restaurer un utilisateur de la corbeille
router.post('/untrash/:id', checkTokenMiddleware, usersCtrl.restaureOneUser)

module.exports= router;