import api from '../../api/index.js'

export default {
  state: {
    ask: [],
  },
  getters: {
    fetchedAsk(state) {
        return state.ask;
    },
  },
  mutations: {
    SET_ASK(state, ask) {
        state.ask = ask;
    }
  },
  actions: {
    FETCH_ASK(context) {
        api.fetchAskList()
            .then(response => {
                context.commit('SET_ASK', response.data);
            }).catch(error => console.log(error))
    }
  }
}