<template>
    <div class="public">
        <!-- {{ getLounis }}-->      
        <PublicNav/>
        <router-view/>
    </div>

</template>

<script>
import PublicNav from '@/components/PublicNav.vue'
import { mapGetters } from 'vuex';

export default {
    name: 'PublicLayout',
    components: {
        PublicNav,
    },
    
    computed: {
    //    ...mapGetters(['getLounis'])
    }
}
</script>

<style scoped>
    .public {
        border: 2px dashed red;
    }
</style>