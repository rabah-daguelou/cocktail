<template>
    <div>
        <img class="logo" alt="Vue logo" src="../assets/logo.png">
        <nav>
            <router-link to="/"> Accueil </router-link>|
            <router-link to="/Cocktail"> Cocktail </router-link>|
            <router-link to="/Contact"> Contact </router-link> |
            <router-link to="admin/dashboard"> Admin </router-link>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'PublicNav'
}
</script>

<style scoped>
    .logo {
        position: absolute;
        left: 0;
        width: 60px;
    }
</style>