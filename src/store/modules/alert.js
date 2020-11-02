import { getField, updateField } from 'vuex-map-fields';
export const namespaced = true;

export const initState =()=>{
    return {
        alertStatus:{
            show:false,
            type:null,
            message:null
        },
    }
}


export const state = initState()

export const actions = {
    showAlert({commit},payload){
        commit('SET_ALERT',
            {
                message:payload.message,
                type:payload.type
            })
    },
};

export const mutations = {
    updateField,
    SET_ALERT(state,{message,type}){
        state.alertStatus = {
            show:true,
            type:type,
            message:message
        }
        setTimeout(()=>{
            state.alertStatus = initState().alertStatus
        },4000)
    }
};

export const getters = {
    getField,
    getAlert       : state=>state.alertStatus,
};