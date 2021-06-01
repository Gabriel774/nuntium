<template>
  <v-app>
    <router-view />
    <Footer />
    <Header />
  </v-app>
</template>

<script>
import Header from "./components/header";
import Footer from "./components/footer";
export default {
  components: { Header, Footer },
  data() {
    return {};
  },
};
</script>

<style>
* {
  text-shadow: none;
}
</style>