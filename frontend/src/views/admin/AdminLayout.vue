<template>

  <div class="admin">
    <AdminHeader />

    <div class="ad_contain">
      
      <div class="ad_side">
        <AdminNav />
      </div>

      <div class="ad_display">
        <router-view />
      </div>

    </div>

  </div>
</template>

<script>

import AdminHeader from "@/components/AdminHeader.vue";
import AdminNav from "@/components/AdminNav.vue";

export default {
  
  name: "AdminLayout",

  components: {
    AdminHeader,
    AdminNav,
  },
};
</script>

<style scoped>
    .ad_contain {
      display: flex;
    }
    .ad_side {
      width: 40%;
      border-right: solid 1px black;
    }
    .ad_display {
      width: 100%;
      padding: 10px;
    }
</style>
