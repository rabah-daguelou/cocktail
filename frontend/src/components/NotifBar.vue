<template>
    <div v-if="getNotif">
        <span id="notif_close" @click="close"> x </span>
        <h1> Error notification </h1>
        <p id="notif_text"> {{ getNotifMessage }} </p>
    </div>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex'

export default {

    name: 'NotifBar',
    computed: {
        ...mapGetters(['getNotif', 'getNotifMessage'])
    },
    methods : {
        ...mapMutations(['closeNotif']),
        close() {
            this.closeNotif(false)
        }
    }
    
}

</script>

<style scoped>
    div {
        margin: 0 auto;
        width: 50%;
        background: rgb(245, 132, 132);
        color: #fff;
        position: relative;
        margin-bottom: 20px;
    }
    h1 {
        font-size: 20px;
    }
    div span {
        position: absolute;
        right: 5px;
        top: 5px;
        display: block;
        width: 20px;
        height: 20px;
        background: red;
        border-radius: 50%;
        cursor: pointer;
    }
    #notif_text {
        color:rgb(253, 17, 5)
    }
</style>