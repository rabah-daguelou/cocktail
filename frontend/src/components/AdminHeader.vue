<template>
    <div class="ad_head">
         AdminHeader
         <button @click="disconnection">  Se déconnecter </button> 
    </div>
</template>

<script>
import {accountServices} from '@/_services'
export default {
    name:" AdminHeader",
    methods: {
        disconnection() {
            accountServices.logout();
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
    .ad_head {
        border-bottom: 2px solid black;
        padding: 10px;
    }
    button {
        float: right;
        color: red;
    }
</style>