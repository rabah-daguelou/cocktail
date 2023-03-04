<template>
    <div >
        <h1> Ajouter un utilisateur </h1>

        <div class="errors" v-if="errors.length">
            <b> Merci de corriger les erreurs suivantes </b>
            <ul>
                <li v-for="error in errors" :key="error"> {{ error }}</li>
            </ul>
        </div>
        <form @submit.prevent="add">
            
            <div class="formFroup">
                <label for="last_name"> Nom : </label>
                <input type="last_name" id="last_name" v-model="user.last_name">
            </div> <br>
            
            <div class="formFroup">
                <label for="first_name"> Prénom : </label>
                <input type="first_name" id="first_name" v-model="user.first_name">
            </div> <br>

            <div class="formFroup">
                <label for="email"> Email :</label>
                <input type="email" id="email" v-model="user.email">
            </div> <br>

            <div class="formFroup">
                <label for="pseudo"> Pseudo : </label> 
                <input type="text" id="pseudo" v-model="user.pseudo">   
            </div> <br>
            
            <div class="formFroup">
                <label for="password"> Mot de passe : </label> 
                <input type="password" id="password" v-model="user.password">   
            </div> <br>

            <div class="formFroup">
                <label for="confirmPassword"> Confirmer : </label> 
                <input type="password" id="confirmPassword" v-model="confirmPassword">   
            </div>

            <div class="formFroup"> <br>
                <button type="submit" class="button" @click="addUser"> Créer </button>    
            </div>

        </form>
    </div>

</template>

<script>

import { userServices } from '@/_services'


export default {
    name: 'userAdd',
    data() {
        return {
            user: {
                last_name: '',
                first_name: '',
                email: '',
                pseudo:'',
                password:''
            },
            confirmPassword:'',
            errors: [],
        }
    },

    methods: {
        addUser () {
            this.errors = []
            console.log ('user à ajouter:', this.user)
            if (this.user.password != this.confirmPassword) {
                this.errors.push('Mots de passe ne correspondent pas !')
            }
            if (this.user.password.length<6) {
                this.errors.push('Le mot de passe doit contenir au moins 6 caractères!')
            }
            if (this.errors.length==0) {
                userServices.addOneUser(this.user) 
                .then (response => {
                    console.log(response)
                    this.errors.push (' Utilisateur créé!')
                    this.$router.push({name: 'usersList'})
                })
                .catch (error => {
                    console.log( "error:", error)
                })
            }
        }
    }
}
</script>

<style>

</style>