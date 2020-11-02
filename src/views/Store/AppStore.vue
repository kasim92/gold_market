<template>
  <v-container class="app" fluid>
    <StoreNav/>
    <router-view/>
  </v-container>
</template>

<script>
  import StoreNav from "../../components/Store/StoreNavbar";

export default {

  name: 'Home',
  components: {
    StoreNav
  },
  data(){
    return{

    }
  }
}
</script>
<style scoped>

  .app{
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: #F0F4F5 !important;
  }
</style>
