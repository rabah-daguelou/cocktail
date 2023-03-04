import axios from 'axios';
import { accountServices } from '@/_services';
import router from '@/router'
import store from '@/store'

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

// Intercepter les réponses API
Axios.interceptors.response.use(response => {
    return response.data
    
}, error => {
    console.log ("Error:", error)
    // Erreur réseau
    if (!error.response) {
        store.commit('closeNotif', {display: true, message:error.message})
        return Promise.reject(error)
    }
    // Erreur Login
    if (error.response.status == 401) {
        
        accountServices.logout()
        store.commit('closeNotif', {display: true, message:error.response.data.message})
        router.push('/login')
    }else {
        // Erreurs API
        store.commit('closeNotif', {display: true, message:error.response.data.message})
        return Promise.reject(error)
    }
    
})

export default Axios;