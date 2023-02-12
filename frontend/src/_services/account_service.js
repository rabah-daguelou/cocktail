import Axios from './caller_service'


// Fonction de connexion
let login = (credentials) => {
    return Axios.post(`/auth/login`, credentials)
}

// Fonction de déconnexion
let logout = () => {
    localStorage.removeItem('token')
}

// Intercepter le token
let getToken = () => {
    return localStorage.getItem('token')
}
// Fonction de sauvegarde du token
let saveToken = (token) => {
    localStorage.setItem('token', token)
}

// Fonction de test de connexion
let islogged = () => {
    let token = localStorage.getItem('token')
    // Le !! token transforme token en booléen
    return !! token 
}

export const accountServices = {
    login,
    logout,
    getToken,
    saveToken,
    islogged
}
