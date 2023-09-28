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
        FETCH_USER({commit}, username) {
            api.fetchUserInfo(username)
                .then(({data}) => commit('SET_USER', data))
                .catch(error => console.log(error))
        }
    }
}