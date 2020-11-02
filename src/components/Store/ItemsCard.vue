<template>
    <v-card  class="card-style elevation-0">
        <v-img
                height="250"
                class="d-flex align-end style"
                :src="img"
        >
            <div class="d-flex justify-start pr-6 mb-3 star">
                <v-icon right color="primary">
                    fa fa-star
                </v-icon>
                <h2 style="color: white">{{rating}}</h2>
            </div>
        </v-img>
        <v-card-title>
            <h3>{{title}}</h3>
        </v-card-title>
        <v-card-text>
            <h3>{{description}}</h3>
        </v-card-text>
        <v-card-actions>
            <v-row no-gutters>
                <v-col lg="3">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                    color="primary"
                                    dark
                                    icon
                                    v-bind="attrs"
                                    v-on="on"
                            >
                                <v-icon>
                                    fas fa-cart-plus
                                </v-icon>
                            </v-btn>
                        </template>
                        <span>أضف الى السلة</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                    color="primary"
                                    dark
                                    icon
                                    v-bind="attrs"
                                    v-on="on"
                            >
                                <v-icon>
                                    fas fa-share-alt-square
                                </v-icon>
                            </v-btn>
                        </template>
                        <span>مشاركة</span>
                    </v-tooltip>
                </v-col>
                <v-col lg="9">
                    <h2 class=" text-left pl-1">{{price}} د.ع</h2>
                </v-col>
            </v-row>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: "ItemsCard",
        props:['img','rating','title','description','price']
    }
</script>

<style scoped>

</style>