<template>
  <v-container bg-color="blue lighten-5">
    <v-toolbar class="px-2">
      <v-text-field
        v-model="search"
        density="comfortable"
        placeholder="Search"
        prepend-inner-icon="mdi-magnify"
        style="max-width: 300px"
        variant="solo"
        clearable
        hide-details
      ></v-text-field>
    </v-toolbar>

    <v-slide-group v-model="selectedSlide" class="pa-2" show-arrows>
      <v-slide-item v-for="(item, index) in filteredGames" :key="index" :value="index">
        <v-col>
          <v-card class="pb-3"         
          height="250"
          width="200" >
            <v-img :src="item.img"></v-img>
            <v-list-item :subtitle="item.subtitle" class="mb-2">
              <template v-slot:title>
                <strong class="text-h6 mb-2">{{ item.title }}</strong>
              </template>
            </v-list-item>
            <div class="d-flex justify-space-between px-4">
              <div class="d-flex align-center text-caption text-medium-emphasis me-1">
                <v-icon icon="mdi-clock" start></v-icon>
                <div class="text-truncate">{{ item.duration }}</div>
              </div>
            </div>
          </v-card>

        </v-col>
      </v-slide-item>
    </v-slide-group>

  </v-container>
</template>

<script>
export default {
  name: 'GameFilter',
  data() {
    return {
      search: '',
      selectedSlide: 0,
      games: [
        {
          img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/4.png',
          title: 'The Sci-Fi Shooter Experience',
          subtitle: 'Dive into a futuristic world of intense battles and alien encounters.',
          advanced: false,
          duration: '8 minutes',
        },
        {
          img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/2.png',
          title: 'Epic Adventures in Open Worlds',
          subtitle: 'Embark on a journey through vast, immersive landscapes and quests.',
          advanced: true,
          duration: '10 minutes',
        },
        {
          img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/3.png',
          title: 'Surviving the Space Station Horror',
          subtitle: 'Navigate a haunted space station in this chilling survival horror game.',
          advanced: false,
          duration: '9 minutes',
        },
        {
          img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/5.png',
          title: 'Neon-Lit High-Speed Racing Thrills',
          subtitle: 'Experience adrenaline-pumping races in a futuristic, neon-soaked city.',
          advanced: true,
          duration: '12 minutes',
        },
        {
          img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/6.png',
          title: 'Retro-Style Platformer Adventures',
          subtitle: 'Jump and dash through pixelated worlds in this classic-style platformer.',
          advanced: false,
          duration: '11 minutes',
        },
        {
          img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/7.png',
          title: 'Medieval Strategic War Campaigns',
          subtitle: 'Lead armies into epic battles and conquer kingdoms in this strategic game.',
          advanced: true,
          duration: '10 minutes',
        },
        {
          img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/1.png',
          title: 'Underwater VR Exploration Adventure',
          subtitle: 'Dive deep into the ocean and discover the mysteries of the underwater world.',
          advanced: true,
          duration: '11 minutes',
        },
        {
          img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/8.png',
          title: '1920s Mystery Detective Chronicles',
          subtitle: 'Solve crimes and uncover secrets in the glamourous 1920s era.',
          advanced: false,
          duration: '9 minutes',
        },
      ],
    };
  },
  computed: {
    filteredGames() {
      return this.games.filter(game => game.advanced);
    },
  },
};
</script>

<style>
/* Agrega estilos personalizados aquí si es necesario */
</style>
