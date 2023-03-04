<template>
    <div >
        <h1> Ajouter un cocktail {{ id }}</h1>
        
        <form @submit.prevent="add">
            
            <div class="formFroup">
                <label for="cocktail_name"> Nom : </label>
                <input type="text" id="cocktail_name" v-model="cocktail.nom">
            </div> <br>

            <div class="formFroup">
                <label for="description"> Description :</label>
                <input type="text" id="description" v-model="cocktail.description">
            </div> <br>

            <div class="formFroup">
                <label for="recette"> Recette : </label> 
                <input type="text" id="recette" v-model="cocktail.recette">   
            </div> <br>
            
            <div class="formFroup"> <br>
                <button type="submit" class="button" @click="addCocktail"> Créer </button>    
            </div>

        </form>
    </div>

</template>

<script>

import { cocktailServices } from '@/_services';

export default {
    name: 'CocktailAdd',
    data () {
        return {
            cocktail: {
                user_id:3,
                nom: '',
                description: '',
                recette: '',
            }
        }
    },

    methods: {
        addCocktail () {
            console.log(this.cocktail)
            cocktailServices.addOneCocktail(this.cocktail)
                .then (res => {
                    console.log ("Res:", res);
                    this.$router.push({name:'cocktailsList'})
                })
                .catch (err => console.log("Error:", err))
        }
    }
   
}
</script>

<style>

</style>