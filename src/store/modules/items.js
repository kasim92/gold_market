import { getField, updateField } from 'vuex-map-fields';
import shortid from  'shortid';
// import Vue from 'vue'

export const namespaced = true;

export const initState =()=>{
    return{
        itemForm:{
            id:shortid.generate(),
            item_name:'',
            item_weight:0,
            item_description:'',
            item_price:0,
            rating:4.5,
            item_images:require('../../assets/slider/jwl3.png')
        },
        allItems:[
            {id:1,item_name:'مجوهرات',item_price:21000,item_description:'تحتوي على نقوش و مرصعة بالأحجار الكريمة',rating:4,item_images:require('../../assets/slider/jwl1.jpg')},
            {id:2,item_name:'مجوهرات',item_price:24000,item_description:'تحتوي على نقوش و مرصعة بالأحجار الكريمة',rating:4.3,item_images:require('../../assets/slider/jwl2.jpg')},
            {id:3,item_name:'مجوهرات',item_price:25000,item_description:'تحتوي على نقوش و مرصعة بالأحجار الكريمة',rating:4.2,item_images:require('../../assets/slider/jwl3.png')},
            {id:4,item_name:'مجوهرات',item_price:26000,item_description:'تحتوي على نقوش و مرصعة بالأحجار الكريمة',rating:2.5,item_images:require('../../assets/slider/jwl4.png')},
            {id:5,item_name:'مجوهرات',item_price:27000,item_description:'تحتوي على نقوش و مرصعة بالأحجار الكريمة',rating:3.5,item_images:require('../../assets/slider/jwl3.png')},
            {id:6,item_name:'مجوهرات',item_price:28000,item_description:'تحتوي على نقوش و مرصعة بالأحجار الكريمة',rating:4.5,item_images:require('../../assets/slider/jwl1.jpg')},
            ],
        statistics:{
            loose:21,
            profit:82,
            remainingAmount:43,
            solidItems:340,
        },
    }
}

export const state = initState()

export const actions = {
    add({commit,dispatch}){
        commit('ADD_ITEM')
        dispatch('alert/showAlert',{
            message:'تمت الأضافة بنجاح',
            type:'success'
        },{root:true})
        commit('CLEAR_STATE')
    },
    clearState({commit}){
        commit('CLEAR_STATE')
    },
    calculatePrice({commit}){
        commit('PRICE')
    },
}

export const mutations = {
    updateField,
    ADD_ITEM(state){
        state.allItems.push(Object.assign({},state.itemForm))
        state.statistics.remainingAmount += 1;
    },
    PRICE(state){
        state.itemForm.item_price = state.itemForm.item_weight * 60000;
    },
    CLEAR_STATE(state){
        Object.assign(state.itemForm,initState().itemForm)
    }
}

export const getters = {
    getField,
    getItems     :      state=>state.allItems,
    getStatisticsItems: state=>state.statistics,
    getCountItems:      state=>state.allItems.length,
    getSlider:state=>state.slider,
    getPrice:state=> state.itemForm.item_price
}
