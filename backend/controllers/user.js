// Import des modules

const bcrypt= require ('bcrypt');
const User= require ('../models/user');
const {UserErrors, RequestErrors} = require ('../errors/customErrors')

// 1- Récupération de tous les utilisateurs
exports.getAllUsers = ((req, res)=> {
    User.findAll()
        .then (users => res.json ({users}))
        .catch (err => res.status(500).json({message: " Database Error", error: err}))
})

// 2- Récupération d'un utilisateur en particulier
exports.getOneUser = async (req, res, next)=> {
    
    try {
        let userId= parseInt(req.params.id);

    // Vérifier si le champs id est présent et cohérent
    if(!userId) {
        throw new UserErrors ('Missing parameter !', 0)
    }

    // Récupération de l'utilisateur
    let user = await User.findOne({ where: {id:userId}, raw: true})
        
    // Utilisateur pas trouvé
        if(user===null) {
            throw new UserErrors ('This user does not exists !', 1)
        }
        // Utilisateur trouvé
        return res.json({data: user})
    } catch (error) {
        next(error)
    }
};

// 3- Ajouter un utilisateur
exports.addOneUser = async (req, res, next) => {
    // Validation des données reçues
    try {
        const {first_name, last_name, pseudo, email, password}= req.body
    if (!first_name || !last_name || !pseudo || !email || !password) {
        throw new UserErrors (' Missing Datas !', 0)
        //return res.status(400).json({message: " Missing Datas !"});
    }

    let user = await User.findOne({ where: {email: email}, row: true})
        
        // Vérification si user existe déjà
        if(user !==null) {
            throw new UserErrors (`The user ${first_name} already exists !`, 1)
        }
        
        // Créer le user
        user = await User.create(req.body)
        return res.json({ message:"User created !", data: user })
    } catch (error) {
        next (error)
    }
};

// 4- Modifier un utilisateur défini
exports.modifyOneUser = async (req, res, next)=> {
    try {
        let userId= parseInt(req.params.id)

    // Vérification si le champs id est présent et cohérent
    if(!userId) {
        throw new UserErrors (" This user does not exists !", 1)
    }

    // Recherche du user
    let user = await User.findOne({where: {id:userId}, row: true})
    
        // Vérifier si le user existe
        if(user===null) {
            throw new UserErrors (" This user does not exists !", 1)
        }
    
        // Mise à jour du user
        user = await User.update(req.body, {where: {id: userId}})
        res.json({message: " The user is updated !", data:user})
        
    } catch (error) {
        next(error)
    }
}

// 5- Supprimer le user et le mettre dans la corbeille
    // Soft delete
exports.deleteOneUser =  async (req, res, next)=> {
    
    try {
        let userId=parseInt(req.params.id);

    // Vérifier s'il y a un param id
    if(!userId) {
        throw new RequestErrors ('Missing parameter !')
    }

    
    // Vérifier si le user existe
    let user = await User.findOne({where: {id: userId}, row:true})
        if(user===null) {
            throw new UserErrors ('This user does not exists !', 1)
        }   
        // Mettre l'utilisateur dans la corbeille
        user = await User.destroy({where: {id: userId }})
            return res.status(200).json({message:'The user is in the Corbeille !'})
    } catch (error) {
        next(error)
    }
};

// 6- Suprimer définitivement le user de la BDD
    // Hard delete
exports.deleteOneUser = async (req, res, next)=> {

    try {
        let userId=parseInt(req.params.id);

    // Vérifier s'il y a un param id
    if(!userId) {
        throw new RequestErrors ('Missing parameter !')
    }
    // Supression de l'utilisateur
    // Vérifier si le user existe
    let user = await User.findOne({where: {id:userId}, row: true})
        if(user===null) {
           throw new UserErrors ('This user does not exists !', 1)
        }
        // User supprimé
        user = await User.destroy({where: {id: userId }, force: true})
            return res.status(204).json({})
    } catch (error) {
        next(error)
    }
}

// 7- Restaurer un user supprimé dans la corbeille

exports.restaureOneUser = async (req, res, next) => {
    
    try {
        let userId=parseInt(req.params.id);

        // Vérifier s'il y a un param id
        if(!userId) {
            throw new RequestErrors ('Missing parameter !')
        }

        let user = await User.restore({where: {id: userId}})
        return res.status(204).json({})
       
    } catch (error) {
        next(error)
    }
}