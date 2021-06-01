<template>
  <div id="footer">
    <div class="content">
      <h1>Siga nossas redes sociais!</h1>
      <div id="logos">
        <img v-for="logo in logos" :key="logo" :src="logo" class="logo" />
      </div>
      <h2>Contato comercial: contato@nuntium.com.br</h2>
      <h3>&copy;Nuntium All rights reserved 2009 - 2021</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logos: [
        require("../assets/instagram.png"),
        require("../assets/facebook.png"),
        require("../assets/youtube.png"),
        require("../assets/twitter.png"),
        require("../assets/linkedin.png"),
      ],
    };
  },
};
</script>

<style scoped>
#footer {
  background: #2b2d42;
  color: white;
  margin-top: 50px;
}
.content {
  margin: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}
#logos {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
}
.logo {
  height: 50px;
  margin: 10px;
  cursor: pointer;
  transition: all .2s;
}
.logo:hover {
    transform: translateY(-10px);
}
</style>