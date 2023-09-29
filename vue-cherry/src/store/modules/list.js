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
        FETCH_LIST({commit}, name) {
            return api.fetchList(name)
                .then(({data}) => {
                    console.log('FETCH_LIST');
                    commit('SET_LIST', data);
                })
                .catch(error => console.log(error));
        },
    }
}