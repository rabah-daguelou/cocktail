<template>
    <div>
        <h1> Connexion </h1>

        <form @submit.prevent="login">
            <div class="formFroup">
                <label for="user_email"> Email </label><br>
                <input type="user_email" id="email" v-model="user.email">

            </div> <br>
            <div class="formFroup">
                <label for="user_password"> Mot de passe </label> <br>
                <input type="passwrd" id="user_password" v-model="user.password">
                
            </div>
            <div class="formFroup"> <br>
                <button type="submit" class="button"> Se connecter </button>    
            </div>
        </form>
    </div>
</template>

<script>
// Importer tous les services
import { accountServices } from '@/_services'

export default {
    name: 'Login',

    data () {
        return {
            user: {
                email: "",
                password: "",
            }
        }
    },

    methods: {
        login() {
           fetch('http://localhost:8888/auth/login', {
           headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json'
           },
            method: 'POST',
            body: JSON.stringify(this.user)
           } )
            .then (blob=> blob.json())
            .then (data=> {
                console.log (data)
                localStorage.setItem('token', data.access_token)
                this.$router.push('admin/dashboard')
            })
           
            .catch(error=>console.log(error))
            
        }
    }

}
</script>

<style scoped>
h1 {
    margin-bottom: 40px;
}
    input {
        width: 200px;
        height: 40px;
    }
    .button {
        width: 100px;
        height: 40px;
    }
</style>