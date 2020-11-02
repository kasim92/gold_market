<template>
    <v-toolbar>
        <v-toolbar-title>
            <v-icon right color="primary">
                fas fa-gem
            </v-icon>
            متجر الذهب
        </v-toolbar-title>

        <v-toolbar-items class="hidden-md-and-down">
            <v-btn
                    v-for="item in items"
                    :key="item.title"
                    :to="item.title"
                    text

            >{{ item.title }}</v-btn>
        </v-toolbar-items>
        <v-spacer/>
        <v-badge

                color="error"
                icon="mdi-lock"
                content="4"
                overlap
                left
        >
            <v-btn text>
                <v-icon>fas fa-shopping-basket</v-icon>
            </v-btn>
        </v-badge>
        <v-btn text to="/login">
            <v-icon>fas fa-user</v-icon>
        </v-btn>
        <v-menu offset-y class="hidden-md-and-up">
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                        color="primary"
                        dark
                        v-bind="attrs"
                        v-on="on"
                        class="hidden-lg-and-up"
                >
                    القائمة
                </v-btn>
            </template>
            <v-list>
                <v-list-item
                        v-for="(item, index) in items"
                        :key="index"
                >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-toolbar>
</template>

<script>
    export default {
        name: "StoreNav",
        data(){
            return{
                items: [
                    { title: 'الرئيسية' },
                    { title: 'أخر المنتجات' },
                    { title: 'عن المتجر' },
                ],
            }
        }
    }
</script>

<style scoped>
.top-header{
    margin: 0;
    padding: 0;
    height: 100px;
    background-color: #313131 ;
}
.app-bar-color{
    background-image: linear-gradient(160deg, #EDB40D 0%, #A57110 100%)!important;
}

</style>