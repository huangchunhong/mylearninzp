export default {
    show(state) {
        state.ifShow = state.ifShow ? false : true;
    },
    zt(state) {
        state.zt = state.zt ? false : true;
    },
    increment(state){
        state.count = state.count + 5
    },
    decrement(state){
        state.count = state.count - 3
    },
}