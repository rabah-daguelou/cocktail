<template>
    <div>
        <nav>
            <ul>
                <li><router-link to='/'>Accueil</router-link></li>
                <li>&nbsp;</li>
                <li><router-link to='/admin/dashboard'>Dashboard</router-link></li>
                <li>&nbsp;</li>
                <li><router-link to='/admin/users/index'>User list</router-link></li>
                <li><router-link to='/admin/users/edit/12'>User 12</router-link></li>
                <li><router-link to="/" @click="disconnection"> Se déconnecter </router-link> </li>
                
            </ul>
        </nav>
        
    </div>
</template>

<script>

export default {
    name: 'AdminNav',
    methods: {
        disconnection() {
            localStorage.clear()
        }
    }
}
</script>

<style scoped>
    nav { 
        padding:0 0 0 10px;
        
    }
    ul li {
        list-style: none;
        color: blue;
        font-weight: 800;
        cursor: pointer;
        margin-bottom: 10px;
        text-align: left;
        width: 100%;
    }
    ul li:hover {
        color: black
    }
    router-link {
        text-decoration: none;
    }
</style>