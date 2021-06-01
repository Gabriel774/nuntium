<template>
  <div class="news">
    <router-link :to="{ name: 'News', params: { id } }">
      <div class="img-container">
        <img
          class="img-news"
          :style="{
            'background-image': `url(${notice.img})`,
          }"
        />
      </div>
    </router-link>
    <div class="news-text">
      <router-link :to="{ name: 'News', params: { id } }">
        <h1 class="news-title">
          {{ notice.title }}
        </h1>
        <p class="news-desc">
          {{ notice.desc }}
        </p>
      </router-link>
    </div>
    <div class="tags">
      <tag
        v-for="(tag, i) in notice.tags"
        :key="i"
        :style="{ background: tag.background, color: tag.color }"
        >{{ tag.name }}</tag
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["notice", "id"],
};
</script>

<style scoped>
.news {
  display: grid;
  grid-template-columns: auto 1fr;
  min-height: 198px;
  position: relative;
  border-radius: 0;
}
.img-container {
  width: 270px;
  height: 200px;
  overflow: hidden;
  position: relative;
}
.img-news {
  width: 100%;
  height: 100%;
  transition: all 0.2s;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
}
.img-news:hover {
  transform: scale(1.3);
}
.news-text {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  max-height: 150px;
  overflow: hidden;
}
.news-title {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #2b333a;
  font-size: 24pt;
  cursor: pointer;
  transition: color 0.2s;
  line-height: 35px;
}
.news-title:hover {
  color: #505f6d;
}
.news-desc {
  color: #2b333a;
  max-height: 108px;
  font-size: 14pt;
  margin-left: 2px;
  cursor: pointer;
  overflow: hidden;
  margin-bottom: 50px;
  margin-top: 5px;
}
.tags {
  position: absolute;
  bottom: 5px;
  right: 5px;
  width: auto;
  display: flex;
  flex-wrap: wrap;
}
tag {
  margin-right: 10px;
  background: #2c3e50;
  color: white;
  border-radius: 5px;
  padding: 7px;
}
a {
  text-decoration: none;
  color: initial;
}
@media (max-width: 759px) {
  .news {
    display: flex;
    flex-direction: column;
  }
  .news-text {
    margin: auto;
    margin-top: 10px;
    max-height: 180px;
  }
  .img-news:hover {
    transform: none;
  }
  .news-title {
    text-align: center;
    font-size: 20pt;
    line-height: 35px;
  }
  .news-desc {
    text-align: center;
    overflow: initial;
    font-size: 12pt;
  }
  .img-container {
    width: 100%;
    height: 300px;
  }
  .tags {
    display: none;
  }
}
</style>