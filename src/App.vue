<template>
  <v-app>
    <NavBar />
    <router-view />
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  },
};
</script>

<style>
/* Aquí puedes agregar estilos globales o específicos para tu App.vue */
</style>
