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
    async FETCH_ASK(context) {
      try{
        var response = await api.fetchAskList();
        context.commit('SET_ASK', response.data);
        return response;
      }catch(error){
        console.log(error)
      }
    }
  }
}