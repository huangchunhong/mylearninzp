import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)
// const state = {
//     count:0,
//     ifShow:false,
// }
// const mutations ={
//     increment(state){
//         state.count = state.count + 5
//     },
//     decrement(state){
//         state.count = state.count - 3
//     },
//     show(state){
//         state.ifShow = state.ifShow?false:true;
//     },
// }

// const actions = {
//     increment (a) {
//         a.commit('increment')
//     },
//     decrement :({commit}) => commit('increment'),
//     show :({commit}) => commit('show')

// }

// const getters ={
//    noshow(state){
//     return !state.ifShow;
//    }
// }
// export default new Vuex.Store({
//     state,
//     mutations,
//     actions,
//     getters
// })
import showEvent from './showEvent/index';
// import otherEvent from './otherEvent';

export default new Vuex.Store({
    modules: {
        showEvent,
        // otherEvent
    }
});
