<template>
  <v-app>
    <v-main>
        <router-view/>
        <Footer/>
    </v-main>
  </v-app>
</template>

<script>
    import Footer from "./components/Footer";
    export default {
        name : 'App',
        components:{
            Footer
        },
        data(){
            return{
            }
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Cairo&display=swap');

    #app{
        font-family: 'Cairo', sans-serif;
    }

</style>
