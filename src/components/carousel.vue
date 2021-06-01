<template>
  <div id="carousel-container">
    <v-carousel class="news" v-model="model" cycle show-arrows-on-hover>
      <v-carousel-item v-for="(news, i) in carouselFilterNews" :key="i">
        <router-link :to="`noticia/${news.i}`">
          <div
            :style="{ 'background-image': `url(${news.value.img})` }"
            class="carousel-banner"
          >
            <h1 class="news-title">{{ news.value.title }}</h1>
          </div>
        </router-link>
      </v-carousel-item>
    </v-carousel>
    <div class="mini-news">
      <router-link
        style="height: 100%; width: 100%"
        :to="`noticia/${sideNews[0].i}`"
      >
        <div
          class="mini-news-banner"
          :style="{ 'background-image': `url(${sideNews[0].value.img})` }"
        >
          <h3 class="news-title mini-news-title">
            {{ sideNews[0].value.title }}
          </h3>
        </div>
      </router-link>
    </div>
    <div class="mini-news">
      <router-link
        style="height: 100%; width: 100%"
        :to="`noticia/${sideNews[1].i}`"
      >
        <div
          class="mini-news-banner"
          :style="{ 'background-image': `url(${sideNews[1].value.img})` }"
        >
          <h3 class="news-title mini-news-title">
            {{ sideNews[1].value.title }}
          </h3>
        </div>
      </router-link>
    </div>
    <v-row></v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getNews"]),
    carouselGetNews() {
      let arrayNews = [];
      for (let i = 0; i < 5; ) {
        let random = parseInt(Math.random() * 30);
        if (!arrayNews.includes(random)) {
          arrayNews.push(random);
          i++;
        }
      }

      return arrayNews;
    },
    carouselFilterNews() {
      let filterNews = [];
      this.carouselGetNews.forEach((news) =>
        filterNews.push({ value: this.getNews[news], i: news })
      );
      return filterNews;
    },
    sideNews() {
      let arrayNews = [];
      for (let i = 0; i < 2;) {
        let random = parseInt(Math.random() * 30);
        if (!this.carouselGetNews.includes(random) && !arrayNews.includes(random)) {
          arrayNews.push(random);
          i++;
        }
      }
      let filterNews = [];
      arrayNews.forEach((news) =>
        filterNews.push({ value: this.getNews[news], i: news })
      );
      return filterNews;
    },
  },
  data() {
    return {
      model: 0,
      colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
    };
  },
};
</script>

<style scoped>
* {
  text-decoration: none;
  color: initial;
}
.news {
  grid-column-start: inicio;
  grid-row-start: inicio;
  grid-row-end: fim;
  text-shadow: 0px 0px 2px #000;
  z-index: 0;
}
.mini-news {
  background: rgb(57, 57, 68);
  grid-column: 2;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}
#carousel-container {
  display: grid;
  width: 100%;
  grid-template-columns: [inicio] 2fr [metade meio] 1fr [fim];
  grid-template-rows: [inicio] 1fr [metade meio] 1fr [fim];
  grid-gap: 10px;
}
.carousel-banner {
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  text-align: center;
  display: flex;
}
.news-title {
  width: 88%;
  max-height: 100px;
  overflow: hidden;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 90px;
  padding-left: 1%;
  padding-right: 1%;
  background-color: rgba(0, 0, 0, 0.486);
  align-self: flex-end;
  color: rgb(238, 238, 238);
  border-radius: 5px;
}
.mini-news-title {
  margin: auto;
}
.mini-news-banner {
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  position: relative;
  text-align: center;
}
@media (max-width: 995px) {
  .mini-news {
    display: none;
  }
  #carousel-container {
    display: initial;
  }
}
</style>