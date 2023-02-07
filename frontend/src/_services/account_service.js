import Axios from './caller_service'

// Fonction de connexion
let login = (credentials) => {
    return Axios.post('/auth/login', credentials)
}

// Fonction de déconnexion
let logout = () => {
    localStorage.removeItem('token')
}

// Fonction de sauvegarde du token
let saveToken = () => {
    localStorage.setItem('token', token)
}

// Fonction de test de connexion
let islogged = () => {
    let token = localStorage.getItem('token')
    return !! token // !! token transforme token en booléen
}

export const accountService = {
    login,
    logout,
    saveToken,
    islogged
}
