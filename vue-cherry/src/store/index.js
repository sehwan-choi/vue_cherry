import Vue from 'vue'
import Vuex from 'vuex'
import ask from './modules/ask.js'
import news from './modules/news.js'
import jobs from './modules/jobs.js'
import user from './modules/user.js'
import item from './modules/item.js'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    jobs,
    ask,
    news,
    user,
    item,
  }
})