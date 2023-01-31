
// Import des modules
const express = require('express');

// Import du middleware checkToken pour fermeture de routes
const checkTokenMiddleware = require ('../jsonWebToken/check')

// Récupération du router d'express
let router= express.Router();

// Récupération du controlleur cocktail
const cocktailCtrls = require ( '../controllers/cocktail');

/*******************************/
// Middleware pour loguer la date des requêtes
router.use((req, res, next) => {
    const event = new Date()
    console.log (' cocktail Time:', event);
    next ();
});

/********************************/
// Routage de la ressource Cocktail

// 1- Récupération de tous les cocktails
router.get('', cocktailCtrls.getAllCocktails);

// 2- Récupération d'un cocktail en particulier
router.get('/:id', cocktailCtrls.getOneCocktail);

// 3- Ajouter un cocktail // Le Post n'est pas utilisé dans les API restfull
router.put('', checkTokenMiddleware,  cocktailCtrls.addOneCocktail)

// 4- Modifier un cocktail défini
router.patch('/:id', checkTokenMiddleware,  cocktailCtrls.modifyOneCocktail);

// 5- Supprimer le cocktail et le mettre dans la corbeille
    router.delete('/trash/:id', checkTokenMiddleware, cocktailCtrls.softDeleteOneCocktail)

// 6- Restaurer un cocktail supprimé dans la corbeille
router.post('/untrash/:id',  checkTokenMiddleware, cocktailCtrls.restaureOneCocktail)

// 7- Suprimer définitivement le cocktail de la BDD
router.delete('/:id', checkTokenMiddleware, cocktailCtrls.hardDeleteOneCocktail)


module.exports= router;







module.exports= router