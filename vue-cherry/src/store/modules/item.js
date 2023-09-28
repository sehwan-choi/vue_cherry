import api from '../../api/index.js'

export default {
    state: {
        item: {}
    },
    getters: {
        fetchedItem(state) {
            return state.item;
        }
    },
    mutations: {
        SET_ITEM(state, item) {
            state.item = item;
        }
    },
    actions: {
        FETCH_ITEM({commit}, id) {
            api.fetchItem(id)
                .then(({data}) => commit('SET_ITEM', data))
                .catch(error => console.log(error))
        }
    },
}