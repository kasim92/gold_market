<template>
    <v-container fluid>
        <v-row align="center" justify="start">
            <v-col lg="6" md="8" sm="12" class="mt-6">
                <formDesign
                        title="إضافة مواد"
                        icon_name="fas fa-plus">
                    <template #content>
                        <v-form ref="form" v-model="valid" lazy-validation>
                            <v-text-field
                                    v-model="item_name"
                                    label="أسم المادة"
                                    prepend-inner-icon="fas fa-gem"
                                    type="text"
                                    outlined
                                    dense
                            />
                            <v-text-field
                                    v-model="item_weight"
                                    label="وزن المادة (غرام)"
                                    prepend-inner-icon="fas fa-weight-hanging"
                                    type="number"
                                    outlined
                                    dense
                                    @input="calculatePrice"
                            />
                            <v-text-field
                                    label="سعر المادة"
                                    prepend-inner-icon="fas fa-money-bill-wave"
                                    type="number"
                                    outlined
                                    dense
                                    disabled
                                    :value="getPrice"
                            />
                            <v-textarea
                                    v-model="item_description"
                                    label="وصف المادة"
                                    prepend-inner-icon="fas fa-scroll"
                                    type="text"
                                    outlined
                                    dense
                            />
                            <vue-dropzone
                                    ref="myVueDropzone"
                                    id="dropzone"
                                    :options="dropzoneOptions"
                                    v-on:vdropzone-sending="sendingEvent"/>
                        </v-form>
                    </template>
                    <template #action>
                        <v-btn
                                ripple
                                large
                                dark
                                block
                                @click="add"
                                class="px-10 font-weight-bold ma-6"
                                color="primary"
                        >
                            <v-icon right>
                                fas fa-save
                            </v-icon>
                            <span>حفظ</span>
                        </v-btn>
                    </template>
                </formDesign>
            </v-col>
            <v-col lg="6" md="8" >
                <v-img
                        :src="require('../../assets/illustrations/add_item.svg')"
                        contain
                />
            </v-col>

        </v-row>

        <Alert  :type   ="getAlert.type"
                :message="getAlert.message"
                :show   ="getAlert.show"
        />
    </v-container>
</template>

<script>
    import {mapActions,mapGetters} from "vuex";
    import {mapFields} from "vuex-map-fields";
    import vue2Dropzone from 'vue2-dropzone'
    import 'vue2-dropzone/dist/vue2Dropzone.min.css'
    import FormDesign from "../../components/Dashboard/FormDesign";
    import Alert from "../../components/Alert";

    export default {
        name: "AddItem",
        components: {
            vueDropzone: vue2Dropzone,
            formDesign:FormDesign,
            Alert,
        },
        data(){
            return{
                valid:true,
                dropzoneOptions: {
                    url: "example/src/assets/",
                    thumbnailWidth: 150,
                    maxFilesize: 10,
                    headers: { "My-Awesome-Header": "header value" },
                    autoProcessQueue:false
                }
            }
        },
        methods:{
            ...mapActions({
                'addItem':'items/add',
                'calculatePrice':'items/calculatePrice',
                'clearState':'items/clearState'
            }),
            add(){
                this.addItem()
            },
            processQueue(){
               // this.$refs.myVueDropzone.processQueue()
               //  console.log('uploaded')

            },
            sendingEvent (file, xhr, formData) {
                formData.append('name', this.name);
                console.log(file.name)
            }
        },
        computed:{
            ...mapFields('items', {
                item_name: 'itemForm.item_name',
                item_weight:'itemForm.item_weight',
                item_description:'itemForm.item_description',
            }),
            ...mapGetters({
                getAlert:'alert/getAlert',
                getPrice:'items/getPrice'
            })
        },
        mounted() {
            this.clearState()
        }
    }
</script>

<style scoped>

</style>