import Axios from './caller_service'

// 1- Récupérer tous les utilisateurs
let getAllUsers = Axios.get('/users')


export const userServices= {
    getAllUsers,
}

