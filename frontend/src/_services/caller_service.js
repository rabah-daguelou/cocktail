import axios from 'axios';
import { accountServices } from '@/_services'

// Instance axios 
const Axios = axios.create ({
    baseURL: 'http://localhost:8888'
})

// Intercepter les requetes
Axios.interceptors.request.use(request => {
    
    // Si connecté on ajoute le token à la requete
    if (accountServices.islogged()) {
        request.headers.Authorization = 'Bearer ' + accountServices.getToken()
    }
    
    return request
})

export default Axios;