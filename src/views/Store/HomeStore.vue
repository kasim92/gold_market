<template>
    <v-container fluid>
        <v-carousel
                v-model="model"
                cycle
                progress
                hide-delimiter-background
                show-arrows-on-hover
                height="500"
        >
            <v-carousel-item
                    v-for="(slider) in getItems"
                    :key="slider.id"
            >
                <v-img :src="slider.item_images"  height="500" />
            </v-carousel-item>
        </v-carousel>
        <v-row class="mt-10">
            <v-col lg="12" md="12" sm="12"  cols="12" >
               <div class="d-flex align-end justify-lg-space-between">
                   <h1>الأكثر طلبا</h1>
                   <a href="#" style="text-decoration: none;font-size: 28px">المزيد
                       <v-icon>
                           fas fa-chevron-left
                       </v-icon>
                   </a>
               </div>
           </v-col>
            <v-col v-for="item in getItems" :key="item.id" lg="3"  md="4"  sm="6"   cols="12">
               <ItemsCard
                       :title="item.item_name"
                       :description="item.item_description"
                       :price="item.item_price"
                       :img="item.item_images"
                       :rating="item.rating "
               />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import ItemsCard from "../../components/Store/ItemsCard";
    import {mapGetters} from 'vuex'

    export default {
        name: "HomeStore",
        components:{
            ItemsCard
        },
        data(){
            return{
                model: 0,
            }
        },
        computed:{
            ...mapGetters({
                'getItems':'items/getItems',
                'getSlider':'items/getSlider'
            }),
        },
    }
</script>

<style scoped>
    .style{
        border-radius: 25px!important;
        box-shadow: 2px 1px 30px 1px #888888;
    }
    .card-style{
        border-radius: 25px 25px 25px 25px !important;
        border-bottom: 2px solid #EDB40D!important;
    }

    .ss{
        background-color: #2AFADF;
        padding: 10px;
        margin: 10px;
    }
    .my-span {
        background-color: blue;
        color: white;
        font-weight: bold;
    }

    .price{
        color:white;
        background-color: #EDB40D;
        font-size: 30px;
    }
    .star{
        color: orange;
    }
</style>