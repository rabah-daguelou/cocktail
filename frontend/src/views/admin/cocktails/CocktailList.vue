<template>
    <div >
       Liste des cocktails
       <table>
            <caption> {{ numberOfCocktails }} </caption>
            <thead>
                <tr>
                    <th> Id </th>
                    <th> Nom </th>
                    <th> Description </th>
                    <th> Recette </th>
                    <th> Date création </th>
                    
                </tr>
            </thead>
            <tbody>
                <tr v-for="(cocktail, index) in cocktails" :key="cocktail.id"> 
                    <td> {{ cocktail.id }}</td>
                    <td  @click="goEdit(cocktail.id)" class="edit"> {{ cocktail.nom }}</td>
                    <td> {{ cocktail.description }}</td>
                    <td> {{ cocktail.recette }}</td>
                    <td> {{ dateFormat[index] }}</td>
                    <td > <span class="del_btn" @click="deleteCocktail(cocktail.id, index)">x</span>  </td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<script>

import { cocktailServices } from '@/_services'

export default {
    name: 'CocktailList',
    data () {
        return {
            cocktails: [],
            
        }
    },
    
    mounted() {
        cocktailServices.getAllCocktails()
            .then (res => {

                console.log ('Response:', res)
                this.cocktails = res.data
                this.numberOfCocktails= this.cocktails.length
            })
            .catch (err => console.log ("Error:", err))
    },

    computed :{

        numberOfCocktails () {
            return this.cocktails.length == 0 ? 'Aucun cocktail trouvé !': this.cocktails.length + ' cocktail(s) trouvé(s) !'
        },

        dateFormat () {
            // Reconstituer un aray pour le format des dates
            return this.cocktails.map (e => e.createdAt.split('T')[0].split('-').reverse().join('/'))
        }
    },

    methods: {
        deleteCocktail(id, index) {
            console.log ("cocktailId:", id, "index:", index)
            cocktailServices.deleteOneCocktail(id)
                .then (response => {
                    console.log ("response:", response)
                    this.cocktails.splice (index, 1)
                })
                .catch (error => console.log ('Error:', error))
        },

        goEdit(id) {
            this.$router.push({ name: 'cocktailEdit', params: {id: id}})
        }
    }
   
}
</script>

<style>

</style>