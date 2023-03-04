<template>
    <div >
        <h1> Liste des utilisateurs </h1> 
      <!-- {{ getLounis }} --> 
        <table>
            <caption> {{ numberOfUsers }}</caption>
            <thead>
                <tr>
                    <th> Id </th>
                    <th> Nom </th>
                    <th> Prénom </th>
                    <th> Pseudo </th>
                    <th> Date inscription</th>
                    
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in users" :key="user.id"> 
                    <td> {{ user.id }}</td>
                    <td  @click="goEdit(user.id)" class="edit"> {{ user.first_name }}</td>
                    <td> {{ user.last_name }}</td>
                    <td> {{ user.pseudo }}</td>
                    <td> {{ dateFormat[index] }}</td>
                    <td > <span class="del_btn" @click="deleteUser(user.id, index)">x</span>  </td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<script>

import { userServices } from '@/_services'
//import { mapGetters } from 'vuex'

export default {

    name: 'UserIndex',
    data () {
        return {
            users : [],
        }
    },

    mounted() {
        userServices.getAllUsers()
        .then (res => {
            console.log ("users:", res.data);
            this.users = res.data
        })
        .catch (err => console.log(err))
    },

    computed :{
        numberOfUsers () {
            return this.users.length == 0 ? 'Aucun utilisateur inscrit !': this.users.length + ' utilisateurs inscits'
        },
        dateFormat () {
            // Reconstituer un aray pour le format des dates
            return this.users.map (e => e.createdAt.split('T')[0].split('-').reverse().join('/'))
        },
    //    ...mapGetters(['getLounis'])
    },

    methods: {
        goEdit(userId) {
            this.$router.push({name:'userEdit', params:{id:userId}})
        },

        deleteUser(userId, index){
            console.log ('userId:', userId, 'Index:', index)
            userServices.deleteOneUser(userId)
                .then (response => {
                    console.log ("Response:", response)
                    this.users.splice(index,1)
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
        font-size: 1.5rem;
        margin-bottom: 20px;
    }
    caption {
        margin-bottom: 10px;
    }
    table {
        width: 100%;
        border: 2px solid purple;
        border-collapse: collapse;
    }
    th, td {
        padding: 5px;
        border: 1px solid black;
    }
    th, tr td:nth-child(1) {
        background-color: grey;
        
    }
    tr td:nth-child(1) {
       color: #fff;
       background-color: rgb(88, 85, 85); 
    }
    .edit:hover {
        font-weight: bold;
        cursor: pointer;
        background-color: black;
        color: #fff;
    }
    .del_btn {
        display: block;
        width: 20px;
        height: 20px;
        color: #fff;
        background: red;
        border-radius: 50%;
    }
    .del_btn:hover {
        cursor: pointer;
        transform: scale(1.2);
        background: #000;
    }
</style>