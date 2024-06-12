<template>
  <v-app>
    <v-main>
      <HelloWorld/>
      <TestComponent/>
      <TabMenu/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import TestComponent from './components/TestComponent.vue';
import TabMenu from './components/TabMenu.vue';

export default {
  name: 'App',

  components: {
    HelloWorld,
    TestComponent,
    TabMenu,
  },

  data: () => ({
    //
  }),
}
</script>
