<template>
    <div >
        <h1> Edition d'un utilisateur </h1>
    
        <form @submit.prevent="modify">
            
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
                
            </div>
            
            <div class="formFroup"> <br>
                <button type="submit" class="button" @click="modify"> Modifier </button>    
            </div>
            
            <p v-if="errorMessage" :style="'color:red'"> {{ errorMessage }}</p>
        </form>
         
    </div>

</template>

<script>

import { userServices } from '@/_services'

export default {

    name: 'UserEdit',
    props: ['id'],
    data () {
        return {
            user: {},
            errorMessage:''
        }
    },

    // Affichage de l'utilisateur demandé
    mounted () {
        console.log('userId:', this.id)
        userServices.getOneUser(this.id)
            .then(response => {
                console.log('Utilisateur demandé:', response.data)
                this.user = response.data
        })
            .catch(error => {
                console.log( 'Error:', error)
                this.errorMessage = err.response.data.message   
            })
    },

// Modifier l'utilisateur 
    methods: {
        modify() {
            console.log ("Utilisateur à modifier:", this.user )
            userServices.modifyOneUser(this.user)
                .then (respose => {
                    console.log (' Response:', respose)
                    this.$router.push({name: 'usersList'})
                })
                .catch (error => {
                    console.log ("Error:", error)
                })
        }
    }
}

</script>

<style>

    h1 {
        margin-bottom: 40px;
    }
    form {
        text-align: left;
        margin-left: 20px;
    }
    label {
        font-weight: bold;
        margin-right: 20pxn;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
    }

    input {
        width: 200px;
        height: 40px;
        padding: 4px;
    }

    .button {
        width: 100px;
        height: 40px;
        text-align: center;
    }

</style>