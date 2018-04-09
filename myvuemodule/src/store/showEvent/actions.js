export default {
    show: ({ commit }) => commit('show'),
    zt: ({ commit }) => commit('zt'),
    increment(a) {
        a.commit('increment')
    },
    decrement: ({ commit }) => commit('increment'),
}