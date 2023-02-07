import router from "@/router"

export default function authGuard () {
    
    let token = localStorage.getItem('token')
    
    if(token) {
        console.log(" Vous avez un Token !");
        console.log( "Token:", token)
        return true
    }
    console.log("Pas de Token, pas de Admin");
    router.push('/login')
}