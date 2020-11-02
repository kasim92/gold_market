<template>
    <v-container fluid>
        <v-row class="mt-5">
            <v-col lg="3" md="6" sm="12" cols="12">
               <StatisticsCard
                       title="المنتجات المباعة"
                       icon_name="fas fa-gem"
                       :number="getStatisticsItems.solidItems"
               />
            </v-col>
            <v-col lg="3" md="6" sm="12" cols="12">
                <StatisticsCard
                        title="المنتجات المتبقية"
                        icon_name="fas fa-boxes"
                        :number="getCountItems"
                />
            </v-col>
            <v-col lg="3" md="6" sm="12" cols="12">
                <StatisticsCard
                        title="عدد المستخدمين"
                        icon_name="fas fa-user"
                        :number="getCountUsers"
                />
            </v-col>
            <v-col lg="3" md="6" sm="12" cols="12">
                <StatisticsCard
                        title="الخسائر"
                        icon_name="fas fa-chart-bar"
                        number="23"
                />
            </v-col>
        </v-row>
        <v-row>
            <v-col lg="6" md="6" sm="12">
                <formDesign
                        title="أحصائية الأرباح خلال الأشهر"
                        icon_name="fas fa-chart-line"
                        class="mt-10"
                >
                    <template #content>
                        <apexchart
                                   id="barChart"
                                   type="bar"
                                   :options="barOptions"
                                   :series="barSeries"
                        />
                    </template>
                </formDesign>
            </v-col>

            <v-col lg="6" md="6" sm="12">
                <formDesign
                        title="أحصائية نسب الأرباح والخسائر والمتبقي"
                        icon_name="fas fa-chart-pie"
                        class="mt-10"
                >
                    <template #content>
                        <apexchart
                                type="donut"
                                height="365"
                                :options="donutOptions"
                                :series="donutSeries"/>
                    </template>
                </formDesign>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import StatisticsCard from "../../components/Dashboard/StatisticsCard";
    import FormDesign from "../../components/Dashboard/FormDesign";
    import {mapGetters} from 'vuex'

    export default {
        name: "Admin",
        components:{
            StatisticsCard,
            formDesign:FormDesign
        },
        data() {
            return {
                barOptions: {
                    xaxis: {
                        categories: [
                            ["كانون الأول"],
                            ["شباط"],
                            ["يوليو"],
                            ["حزيران"],
                        ]
                    },
                    chart: {
                        width: '100%',
                    },
                },
                barSeries: [{
                    name: 'أرباح الشهر',
                    data: [30, 90, 45, 75,]
                }],
                donutOptions: {
                    labels: ["ربح", "خسارة", "متبقي",],
                    chart: {
                        width: '100%',
                    },
                },
                donutSeries: [80, 31, 50]
            }
        },
        computed:{
            ...mapGetters({
                'getStatisticsItems':'items/getStatisticsItems',
                'getCountItems':'items/getCountItems',
                'getCountUsers':'users/getCountUsers'
            }),
        },
        methods:{
            getStatistics(){
                this.donutSeries= [this.getStatisticsItems.profit,this.getStatisticsItems.loose,this.getStatisticsItems.remainingAmount]
            }
        },
        mounted() {
            this.getStatistics();
        }
    }
</script>

<style scoped>
    #barChart {
        letter-spacing:normal;
    }
</style>