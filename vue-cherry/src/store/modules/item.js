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
        async FETCH_ITEM({commit}, id) {
            try{
                var response = await api.fetchItem(id);
                commit('SET_ITEM',response.data);
                return response;
            }catch(error) {
                console.log(error);
            }
        }
    },
}