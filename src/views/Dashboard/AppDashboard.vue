<template >
    <v-container class="app" fluid >
        <Navbar/>
        <router-view/>
    </v-container>
</template>

<script>
    import Navbar from "../../components/Dashboard/DashboardNavbar";
    export default {
        name: "Dashboard",
        components: {
            Navbar
        },

    }
</script>

<style scoped>
    .app{
        margin: 0;
        height: 100%;
        background-color: #F9FBFD !important;
    }
</style>