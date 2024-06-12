<template>
  <v-app>
    <v-main>      
      <NavBar/>
      <TabMenu/>
      <PopularGames/>
      <GameFilter/>
      <TestComponent/>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';
import PopularGames from './components/PopularGames.vue';
import GameFilter from './components/GameFilter.vue';
import TestComponent from './components/TestComponent.vue';
import TabMenu from './components/TabMenu.vue';


export default {
  name: 'App',

  components: {
    NavBar,
    GameFilter,
    TestComponent,
    TabMenu,
    PopularGames,
  },

  data: () => ({
    //
  }),
}
</script>
