<template>
    <div>
       Erreur 404. Cette page n'éxiste pas! 
       <div>
        <router-link to="/"> Retour à l'accueil </router-link>
       </div>
       
    </div>
</template>

<script>
export default {
    name: 'NotFound'
}
</script>

<style scoped>
    div {
        color: red;
    }
</style>