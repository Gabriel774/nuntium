<template>
  <div id="home">
    <Carousel />
    <div class="container">
      <News v-for="(paper, i) in news" :key="i" :id="i" :notice="paper" />
      <div style="text-align: center">
        <v-btn v-if="page <= getNews.length" @click="newsAdd" elevation="3"
          >carregar mais notícias</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "../components/carousel";
import News from "../components/news";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getNews"]),
    news() {
      return this.getNews.filter((news, i) => i <= this.page);
    },
  },
  components: { Carousel, News },
  data() {
    return {
      model: 0,
      page: 20,
    };
  },
  methods: {
    newsAdd() {
      if (this.page <= this.getNews.length) this.page += 15;
    },
  },
};
</script>

<style scoped>
#home {
  margin-top: 65px;
}
.container {
  margin-top: 0;
}
* {
  margin-top: 30px;
}
</style>