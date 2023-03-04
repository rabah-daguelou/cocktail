import router from "@/router"
import store from '@/store'

export default function authGuard () {
    
    let token = localStorage.getItem('token')
    
    if(token) {
        return true
    }
    store.commit('closeNotif', {display: true, message:'Not Token!'})
    router.push('/login')
}