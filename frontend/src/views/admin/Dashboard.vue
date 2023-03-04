<template>
    <div>
      Dashboard works!
    <!--
    <p> {{ getLounis }} <span> <button @click="changeName"> Changer </button></span> </p>  
    <p> {{ getLina(1) }} </p>
    <p> <button @click="action"> Action Lounis</button> </p>
    -->
  
    </div>

</template>

<script>
//import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
    name: 'Dashboard',
    computed: {
    //  ...mapGetters(['getLounis', 'getLina']),
     
    },
    methods: { 
  /*    ...mapMutations(['changeLounis']),
      ...mapActions(['changeLina']),
      changeName () {
        this.changeLounis({firstName: 'Lina'}) 
      },
      action () {
        this.changeLina({lastName:"Daguelou"})
      }
  */
    }
}

</script>

<style scoped>

</style>