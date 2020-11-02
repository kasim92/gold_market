<template>
    <v-hover v-slot:default="{ hover }">
        <v-card :elevation="hover ? 12 : 1" class="rounded-xl">
            <v-card-title class="gold-color pb-0"/>
            <v-card-text>
                <v-row>
                    <v-col class="text-right">
                        <h2 class="text--disabled mb-0">
                           {{title}}
                        </h2>
                        <h1 class="pt-5" style="font-weight: bold; font-size: 50px" >
                            {{number}}
                        </h1>
                    </v-col>
                    <v-col class="col-auto">
                        <v-icon  size="50" color="primary">
                            {{icon_name}}
                        </v-icon>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-hover>
</template>

<script>
    export default {
        name: "StatisticsCard",
        props:['title','number','icon_name']
    }
</script>

<style scoped>
    .gold-color{
        background: linear-gradient(147deg, rgba(255,248,220,1) 0%, rgba(218,170,86,1) 45%, rgba(175,116,42,1) 100%);
    }
</style>