import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css"; // Add this line
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import colors from 'vuetify/lib/util/colors'


Vue.use(Vuetify);
const opts = {
    theme:{
        themes:{
            light:{
                primary: '#D4AF37',
                secondary: '#262a35',
                accent: '#82B1FF',
                error: '#ff4444',
                info: '#33b5e5',
                success: '#00C851',
                warning: '#ffbb33',
                background:'#e9ecee',
            },
            dark:{
                primary: colors.blue.lighten3,
            }
        }
    },
    options: {
        customProperties: true
    },
    icons: {
        iconfont: 'fa',
    },
    rtl: true,
};

export default new Vuetify(opts);