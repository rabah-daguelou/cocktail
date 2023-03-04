import Axios from './caller_service'

// 1- Récupérer tous les utilisateurs
let getAllUsers = () => {
    return Axios.get('/users')
}

// 2- Récupérer un seul utilisateur
let getOneUser = (id) => {
    return Axios.get(`/users/${id}`)
}

// 3- Modifier un utilisateur
let modifyOneUser = (user) => {
    return Axios.patch(`users/${user.id}`, user)
}

// 4- Créer un utilisateur
let addOneUser = (user) => {
    return Axios.put ('users', user)
}

// -5 Supprimer un utilisateur
let deleteOneUser = (userId) => {
    return Axios.delete ('users/trash/'+userId)
}

// Exporter les fonctions
export const userServices= {
    getAllUsers,
    getOneUser,
    modifyOneUser,
    addOneUser,
    deleteOneUser
}

