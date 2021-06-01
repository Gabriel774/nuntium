import Vue from 'vue'
import Vuex from 'vuex'
import News from './news'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    news: News.news
  },
  getters: {
    getNews(state) {
      return state.news
    },
  }
})