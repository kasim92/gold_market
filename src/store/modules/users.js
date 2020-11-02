import { getField, updateField } from 'vuex-map-fields';
import _ from 'lodash'
import shortid from  'shortid';
import router from "../../router";


export const namespaced = true;

export const initState =()=>{
    return{
        userLogin:{
            id:shortid.generate(),
            user_name:'',
            user_password:'',
            user_type:'',
        },
        allUsers:[{
            id:1,
            user_name:'qasim',
            user_password:'123',
            user_type:'admin',
        },{
            id:2,
            user_name:'ibrahim',
            user_password:'123',
            user_type:'user',}]
    }
}


export const state = initState()

export const actions = {
    login({commit}){
        commit('LOGIN',state.userLogin)
    },
    clearState({commit}){
        commit('CLEAR_STATE')
    },
}

export const mutations = {
    updateField,
    LOGIN(state,user){
         let userFound = _.find(state.allUsers,
             {
                 user_name:user.user_name,
                 user_password:user.user_password
             })

        if(userFound){
            userFound.user_type === 'admin' ? router.push('/dashboard') : router.push('/')
        }else{
            console.log('no useer')
        }
    },
}

export const getters = {
    getField,
    getCountUsers: state=>state.allUsers.length,
}
