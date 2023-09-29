import api from '../../api/index.js'

export default {
    state: {
        user: {}
    },
    getters: {
        fetchedUser(state) {
            return state.user;
        }
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user;
        }
    },
    actions: {
        async FETCH_USER({commit}, username) {
            try {
                var response = await api.fetchUserInfo(username);
                commit('SET_USER', response.data);
                return response;
            } catch (error) {
                console.log(error);
            }
        }
    }
}