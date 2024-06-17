<template>
  <v-app>
    <v-main>
      <TabMenu />
      <PopularGames />
      <GameFilter />
      <TestComponent />
    </v-main>
  </v-app>
</template>

<script>
import PopularGames from '../components/PopularGames.vue';
import GameFilter from '../components/GameFilter.vue';
import TestComponent from '../components/TestComponent.vue';
import TabMenu from '../components/TabMenu.vue';

export default {
  name: 'HomePage',

  components: {
    PopularGames,
    GameFilter,
    TestComponent,
    TabMenu,
  },
};
</script>

<style>
/* Aquí puedes agregar estilos específicos para tu HomePage.vue */
</style>
