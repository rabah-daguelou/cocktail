<template>
    <div >
        <h1 v-if="id"> Modifier le cocktail N° {{ id }}</h1>
        <h1 v-else> Ajouter un cocktail </h1>

      <form @submit.prevent="modify">
            
            <div class="formFroup">
                <label for="cocktail_name"> Nom : </label>
                <input type="text" id="cocktail_name" v-model="cocktail.nom">
            </div> <br>
            
            <div class="formFroup">
                <label for="description"> Description : </label>
                <input type="text" id="description" v-model="cocktail.description">
            </div> <br>

            <div class="formFroup">
                <label for="recette"> Recette :</label>
                <input type="text" id="recette" v-model="cocktail.recette">
            </div> <br>
            
            <div class="formFroup"> <br>
                <button type="submit" class="button" @click="modify"> Modifier </button>    
            </div>
            
            <p v-if="errorMessage" :style="'color:red'"> {{ errorMessage }}</p>
        </form>
    </div>

</template>

<script>

import { cocktailServices } from '@/_services'
import { watch } from 'vue'

export default {
    name: 'CocktailEdit',

    props: ['id'],

    data () {
        return {
            cocktail: {},
            errorMessage:'',
        }
    },

    // Paramétrer un cycle de vie pour ce composant
    setup (props) {
        console.log ("Props:", props)
        watch (props, (value, old) => {
            console.log ("value:", value, "old:", old)
        })

    },
/*
    mounted () {
        cocktailServices.getOneCocktail(this.id)
            .then ( res => {
                console.log ('Cocktail à modifier:', res.data)
                this.cocktail = res.data
            })
            .catch (err => console.log ("Error: ", err))
    },
*/
    methods: {
        modify () {

        }
    }
   
}

</script>

<style>

</style>