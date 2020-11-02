<template>
    <v-card class="elevation-4 rounded-xl">
        <v-card-title style="background-color: #D4AF37" class="mb-12 ">
            <v-icon right>{{icon_name}}</v-icon>
            <span>{{title}}</span>
        </v-card-title>
        <v-card-text>
            <slot name="content"/>
        </v-card-text>
        <v-card-actions class="justify-center">
            <slot name="action"/>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: "FormDesign",
        props:{
            title:{
                type:String,
            },
            icon_name:{
                type:String,
            },
        }
    }
</script>

<style scoped>

</style>