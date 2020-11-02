<template>
    <v-footer dark padless app inset>
        <v-card class="flex" flat tile color="primary" :elevation="10">
            <v-card-text class="py-2 white--text text-center">
                <strong>متجر الذهب العراقي - جميع الحقوق محفوظة</strong> - {{new Date().getFullYear()}}
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<style scoped>
    .my-color{
        background: #535456 !important;
    }
</style>