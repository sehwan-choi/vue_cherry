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
    FETCH_NEWS(context) {
        api.fetchNewsList()
            .then(response => {
                context.commit('SET_NEWS', response.data);
            })
            .catch(error => console.log(error))

    },
  }
}