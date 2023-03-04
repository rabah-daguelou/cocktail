/***************************/
// Import des modules
const Cocktail= require ('../models/cocktail');

// Import des class erreur
const {RequestErrors, CocktailErrors} = require ('../errors/customErrors')

// 1- Récupération de tous les cocktails
exports.getAllCocktails = ((req, res, next)=> {
    Cocktail.findAll()
        .then (cocktails => res.json({data: cocktails}))
        .catch (err => next(err))
});

// 2- Récupération d'un cocktail en particulier
    // Avec Async await
exports.getOneCocktail = async (req, res, next)=> {
    try {
        let cocktailId= parseInt(req.params.id);

        // Le champs id manquant ou incohérent
        if(!cocktailId) {
            throw new RequestErrors('Request Error: Missing parameter !')
        }
        let cocktail = await Cocktail.findOne({ where: {id:cocktailId}, raw: true})
            
            // Cocktail pas trouvé
        if(cocktail===null) {
            throw new CocktailErrors('This cocktail does not exists !', 0)
        }
            // Réponse: Cocktail trouvé
        return res.json({data: cocktail})

    } catch (err) {
        next(err)
    }
}

// 3- Ajouter un cocktail // Le Post n'est pas utilisé dans les API restfull
exports.addOneCocktail = async (req, res, next) => {
    const {user_id, nom, description, recette}= req.body
    
    try {
        // Validation des données reçues
        if (!user_id || !nom || !description || !recette) {
            throw new RequestErrors('Missing parameter !')
        }
        // Vérification si le cocktail existe déjà
        let cocktail = await Cocktail.findOne({where: {nom: nom}})
        if (cocktail!== null) {
            throw new CocktailErrors(`The cocktail ${nom} already exists !`,1)
        }
        // Créer le cocktail
        cocktail = await Cocktail.create(req.body)
        return res.json({ message:"Cocktail created !", data: cocktail })
    
    } catch (err) {
        next(err)
    }
}

// 4- Modifier un cocktail défini
exports.modifyOneCocktail = async (req, res, next)=> {
    let cocktailId= parseInt(req.params.id)

    try {
        // Vérification si le champs id est présent et cohérent
    if(!cocktailId) {
        throw new RequestErrors('Missing parameter !')
    }
        // Recherche du cocktail
        let cocktail = await Cocktail.findOne({where: {id:cocktailId}, row: true})
        
        // Vérifier si le user existe
        if(cocktail===null) {
            throw new CocktailErrors ('This cocktail does not exists!', 0)
        }

        // Mise à jour du user
        cocktail = await Cocktail.update(req.body, {where: {id: cocktailId}})
        return res.json({message: " The cocktail is updated !", data:cocktail})
    
    } catch (err) {
        return next(err)
    }
};

// 5- Supprimer le cocktail et le mettre dans la corbeille (soft delete)
exports.softDeleteOneCocktail = async (req, res, next)=> {
    let cocktailId=parseInt(req.params.id);

    try {
        
        // Vérifier s'il y a un param id
        if(!cocktailId) {
            throw new RequestErrors('Missing parameter !')
        }
        // Vérifier si le cocktail existe
        let cocktail = await Cocktail.findOne({where: {id:cocktailId}, row: true})
        if(cocktail===null) {
            throw new CocktailErrors('This cocktail does not exists!', 0)
        }
        // Supprimer le cocktail
        cocktail = await Cocktail.destroy({where: {id: cocktailId }})
        
        // Réponse de la mise en poubelle
        return res.status(204).json({message: "Cocktail dans la corbeille!"})
    } catch (err) {
        next(err)
    }
}
// 6- Restaurer un cocktail supprimé dans la corbeille
exports.restaureOneCocktail = async (req, res, next) => {
    try {
        let cocktailId=parseInt(req.params.id);

        // Vérifier s'il y a un param id
        if(!cocktailId) {
            throw new RequestErrors('Missing parameter !')
        }

        // Restaurer le cocktail
        await Cocktail.restore({where: {id: cocktailId}})
            return res.status(204).json({ message: "Cocktail restauré !"})
    } catch (error) {
        next(error)
    }
}
    // 7- Suprimer définitivement le cocktail de la BDD (hard delete)
exports.hardDeleteOneCocktail = async (req, res, next)=> {
    let cocktailId=parseInt(req.params.id);
    try {
        // Vérifier s'il y a un param id
        if(!cocktailId) {
            throw new RequestErrors('Missing parameter !')
        }
        // Vérifier si le cocktail existe
        let cocktail = await Cocktail.findOne({where: {id:cocktailId}, row: true})
        if(cocktail===null) {
            throw new CocktailErrors('This cocktail does not exists !', 0)
        }
        // Supprimer le cocktail
        cocktail = await Cocktail.destroy({where: {id: cocktailId }})
        return res.status(204).json({ message: 'Cocktail définitivement supprimé !'})
    } catch (err) {
        return next(err)
    }
}


