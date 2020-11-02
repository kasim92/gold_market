import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";


import * as items from './modules/items'
import * as alert from './modules/alert'
import * as users from './modules/users'

Vue.use(Vuex)

const persistedStateOptions = {
  paths: [
    'items',
  ]
}

export default new Vuex.Store({
  modules:{
    items,
    users,
    alert
  },
  plugins: [createPersistedState(persistedStateOptions)],
})
