<template>
  <div id="main">
    <router-link to="/">
      <p class="logo"><span class="logo-blue">N</span>UNTIUM</p>
    </router-link>
    <v-dialog v-model="modal" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-icon large color="white" class="pesquisa" v-bind="attrs" v-on="on">
          mdi-magnify
        </v-icon>
      </template>

      <v-card id="search-container">
        <h1 class="center">Pesquisar Notícia</h1>
        <v-text-field
          :rules="rules"
          v-model="search"
          label="Título da notícia"
        />
        <router-link :to="`/pesquisar/${search}`">
          <v-btn
            color="primary"
            @click="disableModal"
            :disabled="disable"
            elevation="2"
            >Pesquisar</v-btn
          >
        </router-link>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modal: false,
      rules: [
        (value) => !!value || "Campo requerido.",
        (value) =>
          (value && value.length >= 3) || "Digite pelo menos 3 caracteres",
      ],
      search: "",
    };
  },
  computed: {
    disable() {
      return this.search == "" || this.search.length < 3 ? true : false;
    },
  },
  methods: {
    disableModal() {
      if (!this.disable) {
        this.modal = false;
      }
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
#main {
  background: #2b2d42;
  color: white;
  display: flex;
  justify-content: space-between;
  height: 65px;
  width: 100%;
  position: fixed;
  top: 0;
  user-select: none;
  z-index: 99;
}
.logo {
  font-size: 28pt;
  font-family: Oswald;
  padding: 5px;
  padding-left: 25px;
  color: white;
  cursor: pointer;
  transition: all 0.2s;
}
.logo-blue {
  color: #3498db;
  background: transparent;
}
.pesquisa {
  align-self: center;
  margin-right: 25px;
  cursor: pointer;
  font-size: 22pt;
}
#search {
  background: white;
  width: 90%;
}
#search-container {
  height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
}
</style>