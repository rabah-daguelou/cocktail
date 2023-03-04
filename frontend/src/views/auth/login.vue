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
                <button type="submit" class="button" @click="login"> Se connecter </button>    
            </div>
            <p v-if="errorMessage" :style="'color:red'"> {{ errorMessage }}</p>
        </form>
    </div>
</template>

<script>
// Importer tous les services
import { accountServices } from '@/_services'
//import axios from 'axios'

export default {
    name: 'Login',

    data () {
        return {
            user: {
                email: "",
                password: "",
            },
            errorMessage:""
        }
    },

    methods: {
        login() {
            accountServices.login(this.user)
         //  axios.post('http://localhost:8888/auth/login', this.user)
                .then (res => {
                    console.log (res)
                    accountServices.saveToken(res.access_token);
                    this.$router.push('/admin/dashboard')
                })

                .catch (err =>  {
                    console.log(err)
                  //  this.errorMessage = err.response.data.message
                })
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