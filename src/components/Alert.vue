<template>
    <v-snackbar
            :value="show"
            :color="snakeBarInfo.color"
            :timeout="4000"
            top
            centered
            multi-line
            right
            rounded
    >
        <h1>
            <v-icon left color="white">
                {{snakeBarInfo.icon}}
            </v-icon>
            {{message}}
        </h1>
    </v-snackbar>
</template>

<script>
    export default {
        props:['show','message','type'],
        name: "Alert",
        data(){
            return{
            }
        },
        computed: {
            snakeBarInfo() {
                let result;
                switch (this.type) {
                    case "success":
                        result = {color: 'success', icon: 'far fa-check-circle'};
                        break;
                    case "error":
                        result = {color: 'error', icon: 'fas fa-times'};
                        break;
                    case "info":
                        result = {color: 'cyan darken-2', icon: 'fas fa-info'};
                        break;
                    default:
                        result = {color: '', icon: ''};
                }
                return result
            }
        }
    }
</script>

<style scoped>

</style>