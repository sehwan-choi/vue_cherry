import api from '../../api/index.js'

export default {
    state: {
        list: []
    },
    mutations: {
        SET_LIST(state, data) {
            state.list = data;
        },
    },
    actions: {
        async FETCH_LIST({commit}, name) {
            try {
                var response = await api.fetchList(name);
                commit('SET_LIST', response.data);
                return response;
            } catch (error) {
                console.log(error);
            }
        },
    }
}