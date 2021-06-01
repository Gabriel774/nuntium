<template>
  <div id="news">
    <div class="img-container">
      <img
        class="img-news"
        :style="{ 'background-image': `url(${news.img})` }"
      />
    </div>
    <div id="news-text">
      <h2 id="title">{{ news.title }}</h2>
      <p class="sub-title">{{ news.desc }}</p>
      <div class="tags">
        <tag
          v-for="(tag, i) in news.tags"
          :key="i"
          :style="{ background: tag.background, color: tag.color }"
          >{{ tag.name }}</tag
        >
      </div>
      <p class="news-article" v-html="news.text" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getNews"]),
    news() {
      return this.getNews[this.id];
    },
  },
  props: ["id"],
};
</script>

<style scoped>
#news {
  margin-top: 64px;

}
.img-container {
  width: 100%;
  height: 550px;
  overflow: hidden;
  position: relative;
}
.img-news {
  width: 100%;
  height: 100%;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
#title {
  margin-top: 15px;
  font-family: Oswald;
  font-size: 28pt;
  color: #2c3e50;
}
.sub-title {
  font-size: 16pt;
  margin-top: 5px;
  color: rgb(56, 56, 56);
  font-style: italic;
}
#news-text {
  margin-left: 10%;
  margin-right: 10%;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 3px;
  transform: translateY(-60px);
  background: white;
}
.news-article {
  margin-top: 50px;
  font-size: 16pt;
}
tag {
  margin-right: 10px;
  background: #2c3e50;
  color: white;
  border-radius: 5px;
  padding: 7px;
  margin-bottom: 5px;
}
.tags {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
}
@media (max-width: 599px) {
  #news-text {
    margin-left: 2%;
    margin-right: 2%;
  }
}
</style>