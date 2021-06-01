<template>
  <div id="search" class="container">
      <v-row></v-row>
      <h1 style="text-align: center">Resultados da pesquisa</h1>
      <h2 v-if="searchResult.length == 0" style="text-align:center">Nenhum resultado encontrado</h2>
      <News  v-for="(news, i) in searchResult" :key="i" :id="news.i" :notice="news.news" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import News from '../components/news'
export default {
    computed: {
        ...mapGetters(['getNews']),
        searchResult() {
            let originalNews = []
            originalNews = this.getNews.filter((news,i) => i<=30)
            let indexNews = []
            originalNews.forEach((news,i) => {
                indexNews.push({news,i})
            })
            let filterNews = []
            filterNews = indexNews.filter(notice => notice.news.title.match(this.search))
            return filterNews
        }
    },
    props: ['search'],
    components: {News}
}
</script>

<style scoped>
    #search {
        margin-top: 75px;
        margin-bottom: 300px;
    }
    * {
        margin-top: 30px;
    }
</style>