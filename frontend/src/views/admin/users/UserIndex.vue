<template>
    <div >
        Liste des utilisateurs
        
    </div>

</template>

<script>

import { userServices } from '@/_services'

export default {
    name: 'UserIndex',
    data () {
        return {
            users : [],
        }
    },

    mounted() {
        userServices.getAllUsers
        .then (res => {
            console.log (res.data)
        })
        .catch (err => console.log(err))
    },
    methods: {

    }
}

</script>

<style>

</style>