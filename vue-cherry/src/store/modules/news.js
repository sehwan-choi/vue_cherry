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
    FETCH_NEWS({commit}) {
        return api.fetchNewsList()
            .then(response => {
                commit('SET_NEWS', response.data);
            })
            .catch(error => console.log(error))

    },
  }
}