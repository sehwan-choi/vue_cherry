import api from '../../api/index.js'

export default {
  state: {
    news: [],
  },
  getters: {
    fetchedNews(state) {
        return state.news;
    },
  },
  mutations: {
    SET_NEWS(state, news) {
        state.news = news;
    },
  },
  actions: {
    async FETCH_NEWS({commit}) {
      try {
        var response = await api.fetchNewsList();
         commit('SET_NEWS', response.data);
         return response;
      } catch (error) {
        console.log(error);
      }
    },
  }
}