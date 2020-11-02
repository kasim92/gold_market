<template>
    <nav>
        <!--start app bar-->
        <v-app-bar  color="nav-bar-color" dark app >
            <!--start app bar Icon-->
            <v-app-bar-nav-icon @click.stop="drawer=!drawer">
            </v-app-bar-nav-icon>
            <!--end app bar Icon-->
            <!--start toolbar title-->
            <v-toolbar-title class="text-uppercase">
                <span>متجر الذهب</span>
            </v-toolbar-title>
            <!--end toolbar title-->
            <v-spacer/>
            <!--start app bar left Menu-->
<!--            <v-menu offset-y-->

<!--            >-->
<!--                <template v-slot:activator="{on}">-->
<!--                    <v-btn icon class="text-center" v-on="on">-->
<!--                        <v-badge-->
<!--                                v-if="getTotalNotify > 0"-->
<!--                                color="pink"-->
<!--                                :content="getTotalNotify"-->
<!--                                left-->
<!--                        >-->

<!--                        </v-badge>-->
<!--                        <v-icon>notifications</v-icon>-->
<!--                    </v-btn>-->
<!--                </template>-->
<!--                <v-card >-->
<!--                    <v-toolbar color="pink"  dark>-->
<!--                        <v-icon large>notifications</v-icon>-->
<!--                        <v-toolbar-title>الأشعارات</v-toolbar-title>-->
<!--                        <v-spacer/>-->
<!--                        <v-icon @click="load">refresh</v-icon>-->
<!--                    </v-toolbar>-->
<!--                    <v-skeleton-loader-->
<!--                            v-if="loading"-->
<!--                            :loading="loading"-->
<!--                            width="450"-->
<!--                            type="list-item-three-line,divider, button"-->
<!--                    />-->
<!--                    <v-list v-else  style="max-height: 500px" class="overflow-y-auto">-->
<!--                        <v-list-item-group >-->
<!--                            <template  v-for="(item, index) in getNotifyData">-->
<!--                                <v-list-item :key="index+'A'">-->
<!--                                    <v-list-item-content @click="loadNotifyPage">-->
<!--                                        <v-list-item-title>-->
<!--                                            <v-icon small>collections_bookmark</v-icon>-->
<!--                                            <strong>{{item.book?'كتاب':'عقد'}}</strong>-->
<!--                                        </v-list-item-title>-->
<!--                                        <v-list-item-subtitle class="text&#45;&#45;primary">-->
<!--                                            <span>{{item.book ? item.book.title : item.contract.title}}</span>-->
<!--                                        </v-list-item-subtitle>-->
<!--                                        <v-list-item-subtitle>-->
<!--                                            <v-icon small>account_circle</v-icon>-->
<!--                                            {{item.user.name}}-->
<!--                                        </v-list-item-subtitle>-->
<!--                                    </v-list-item-content>-->
<!--                                    <v-list-item-action>-->
<!--                                        <v-icon-->
<!--                                                :color="iconBasedOnNotifyType(item).color">-->
<!--                                            {{iconBasedOnNotifyType(item).name}}-->
<!--                                        </v-icon>-->
<!--                                        <v-list-item-action-text v-text="convertTime(item)"/>-->
<!--                                    </v-list-item-action>-->
<!--                                </v-list-item>-->
<!--                                <v-divider :key="'B'+ index"/>-->
<!--                            </template>-->
<!--                        </v-list-item-group>-->
<!--                    </v-list>-->
<!--                    <v-card-actions>-->
<!--                        <v-btn text @click="pushItems">عرض المزيد</v-btn>-->
<!--                    </v-card-actions>-->
<!--                </v-card>-->
<!--            </v-menu>-->
            <!--end app bar left Menu-->
<!--            <v-menu offset-y>-->
<!--                <template v-slot:activator="{on}">-->
<!--                    <v-btn-->
<!--                            text-->
<!--                            dark-->
<!--                            v-on="on">-->
<!--                        <v-icon left>assignment_ind</v-icon>-->
<!--                        {{getUser.userName}}-->
<!--                    </v-btn>-->
<!--                </template>-->
<!--                <v-list>-->
<!--                    <v-list-item>-->
<!--                        <v-list-item-icon>-->
<!--                            <v-icon> verified_user</v-icon>-->
<!--                        </v-list-item-icon>-->
<!--                        <v-list-item-title>{{getUser.role}}</v-list-item-title>-->
<!--                    </v-list-item>-->
<!--                    <v-divider class="mx-4"/>-->
<!--                    <v-list-item @click="logout">-->
<!--                        <v-list-item-icon>-->
<!--                            <v-icon> exit_to_app</v-icon>-->
<!--                        </v-list-item-icon>-->
<!--                        <v-list-item-title>تسجيل الخروج</v-list-item-title>-->
<!--                    </v-list-item>-->
<!--                </v-list>-->
<!--            </v-menu>-->
        </v-app-bar>
        <!--end app bar -->
        <v-navigation-drawer v-model="drawer" right dark app class="nav-drawer-color" >
            <v-layout>
                <v-flex class="my-3">
<!--                    <v-avatar>-->
<!--                        <v-img-->
<!--                                :src="require('../../assets/dms2.png')"-->
<!--                                contain-->
<!--                                height="75"-->
<!--                                width="75"-->
<!--                        />-->
<!--                    </v-avatar>-->
                    <span class="white--text">لوحة التحكم</span>
                </v-flex>
            </v-layout>
            <v-divider/>
            <v-list dense nav link>
                <template v-for="item in items">
                    <v-list-group
                            v-if="item.children"
                            :key="item.text"
                            no-action
                            color = "selected-link"
                    >
                        <template v-slot:activator>
                            <v-list-item-icon class="ml-1">
                                <v-icon>{{ item.icon }}</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>
                                    {{ item.text }}
                                </v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item
                                v-for="(child, i) in item.children"
                                :key="i"
                                :to="child.route"
                                class="pr-11"

                        >
                            <v-list-item-icon class="ml-1">
                                <v-icon>{{ child.icon }}</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>
                                    {{ child.text }}
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-group>
                    <v-list-item
                            v-else
                            :key="item.text"
                            link
                            :disabled="item.disabled"
                            :to="item.route"
                            exact
                    >
                        <v-list-item-icon class="ml-1">
                            <v-badge
                                    color="pink"
                                    left
                                    dot
                                    v-if="item.badge"
                            >
                                <v-icon v-text="item.icon"/>
                            </v-badge>

                            <v-icon v-else v-text="item.icon"/>

                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ item.text }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </template>
            </v-list>
            <template v-slot:append>
                <div class="pa-2">
                    <v-btn block color="primary" >تسجيل خروج</v-btn>
                </div>
            </template>
        </v-navigation-drawer>
    </nav>
</template>

<script>
    // import {mapGetters,mapActions} from 'vuex'
    // import moment from 'moment';
    export default {
        name: "Navbar",
        components:{
        },
        data:()=>({
            valid:true,
            drawer:true,
            loading:false,
        }),
        computed: {
            // ...mapGetters({
            //     isLoggedIn: "auth/isLoggedIn",
            //     getUser:'auth/getUser',
            //     getNotifyData:'notifications/getSearchResult',
            //     getTotalNotify:'notifications/getTotal',
            //     isLastPage : 'notifications/isLastPage',
            //     editModalShow:'books/showModal',
            //     getImages:'books/getImages',
            //     overlayStatus:'books/overlayStatus',
            // }),
            // compEditModal () {
            //     return this.editModalShow
            // },
            items(){
                return  [
                    {icon: 'fas fa-home', text: 'الرئيسية' ,route:'/dashboard'},
                    { icon: 'fas fa-gem', text: 'المواد',
                        children: [
                            {icon:'fas fa-plus',text:'إضافة مادة',route:'/dashboard/add_item'},
                            {icon:'fas fa-boxes',text:'عرض المواد',route:'/search_contracts'},
                        ],
                    },
                ];
            }
        },

        methods:{
            // ...mapActions({
            //     getOut:'auth/logout',
            //     moreNotify:'notifications/showMoreNotifications',
            //     showNotifications:'notifications/showNotifications',
            //     showInModal :'books/showInModal',
            //     clearState  :'books/clearState',
            // }),
            // loadNotifyPage(){
            //     this.$route.path!=='/notify'?this.$router.push('/notify'):false
            // },
            // onCloseDialog(){
            //     this.clearState()
            // },
            // logout(){
            //     this.getOut()
            // },
            // load(){
            //     this.loading = true
            //     this.showNotifications();
            //     setTimeout(()=>{
            //         this.loading = false;
            //     },2000);
            // },
            // pushItems(){
            //     if(!this.isLastPage){
            //         this.loading = true
            //         this.moreNotify();
            //         setTimeout(()=>{
            //             this.loading = false;
            //         },2000);
            //     }
            // },
            // iconBasedOnNotifyType(item){
            //     if(item.book){
            //         switch (item.book.state_id || item.contract.state_id) {
            //             case 1:
            //                 return {name:'done',color:'success'}
            //             case 2:
            //                 return {name:'close',color:'error'}
            //             case 3:
            //                 return  {name:'history',color:'warning'}
            //         }
            //     }else {
            //         switch (item.contract.state_id) {
            //             case 1:
            //                 return {name:'done',color:'success'}
            //             case 2:
            //                 return {name:'close',color:'error'}
            //             case 3:
            //                 return  {name:'history',color:'warning'}
            //         }
            //     }
            // },
            // convertTime(item){
            //     return  moment(item.created_at).fromNow();
            // },
            // onEditDialog(item){
            //     let editedItem = Object.assign({},item)
            //     this.showInModal(editedItem)
            // },
        },
        mounted() {

        }
    }

</script>

<style scoped>
    .menu-border{
        border-right: 6px solid #395c82;
    }
    .selected-link{
        color: #ffffff !important;
    }
    .nav-bar-color{
        background-image: linear-gradient(160deg, #EDB40D 0%, #A57110 100%)!important;
    }
    .nav-drawer-color{
        background-image: linear-gradient(160deg, #A57110 0%, #EDB40D  100%)!important;
    }

</style>