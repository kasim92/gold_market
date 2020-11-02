<template>
    <v-container>
        <v-row align="center" justify="start">
            <v-col lg="6" md="8" sm="12" class="mt-6">
                <v-card class="elevation-4 rounded-xl">
                    <v-card-title style="background-color: #D4AF37" class="mb-12 pt-12">
                        <v-row>
                            <v-col lg="12" md="12" sm="12" cols="12" class="text-center">
                                <h4 style="color: #e9ecec">تسجيل الدخول</h4>
                            </v-col>
                            <v-col lg="12" md="12" sm="12" cols="12">
                                <h2 class="text-center white--text">
                                    متجر الذهب
                                </h2>
                            </v-col>
                            <v-col lg="6"  md="6"  sm="6" class="mx-auto" cols="12">
                                <div class="logo"/>
                            </v-col>
                            <!--                        <v-col lg="12" md="12" sm="12" cols="12" class="text-center">-->
                            <!--                            <h5 style="color: #cccfd1">-->
                            <!--                                شركة الأنجاز لتكنلوجيا المعلومات-->
                            <!--                            </h5>-->
                            <!--                        </v-col>-->
                        </v-row>
                    </v-card-title>
                    <v-card-text>
                        <v-form ref="form" v-model="valid" lazy-validation>
                            <v-text-field
                                    v-model="user_name"
                                    label="أسم المستخدم"
                                    name="UserName"
                                    prepend-inner-icon="fas fa-user"
                                    type="text"
                                    outlined
                                    rounded
                            />
                            <v-text-field
                                    v-model="user_password"
                                    label="كلمة المرور"
                                    id="Password"
                                    name="password"
                                    outlined
                                    rounded
                                    prepend-inner-icon="fas fa-key"
                                    :type="show1 ? 'text' : 'password'"
                                    :append-icon="show1 ? 'fas fa-eye' : 'fas fa-eye-slash'"
                                    @click:append="show1 = !show1"
                            />
                        </v-form>
                    </v-card-text>
                    <v-card-actions class="justify-center">
                        <v-btn ripple large dark @click="login"  class="px-10 font-weight-bold ma-6"  color="primary">
                            <v-icon>
                                fas fa-sign-in-alt
                            </v-icon>
                            <span>تسجيل الدخول</span>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col lg="6" md="8" >
                <v-img
                        :src="require('../assets/illustrations/login.svg')"
                        contain
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import {mapFields} from "vuex-map-fields";
    import {mapActions} from "vuex";

    export default {
        name: "Login",
        components:{
        },
        data(){
            return{
                valid:true,
                show1:false,
            }
        },
        methods:{
            ...mapActions({
                'userLogin':'users/login',
            }),
            login(){
                this.userLogin()
            }
        },
        computed:{
            ...mapFields('users', {
                user_name: 'userLogin.user_name',
                user_password:'userLogin.user_password',
            }),
        },
    }
</script>

<style >
    .logo {
        border-bottom: 6px solid #DAB854;
    }
    .logo:after {
        content: '';
        display: block;
        border-bottom: 6px solid #F6BC00;
        margin-bottom: -6px;
        max-width: 50%;
    }
</style>