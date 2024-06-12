<template>
    <v-container>
      <v-text-field v-model="search" label="Buscar Juegos"></v-text-field>
      <v-select v-model="genre" :items="genres" label="Seleccionar Género"></v-select>
      <v-row>
        <v-col v-for="game in filteredGames" :key="game.id" cols="12" sm="6" md="4">
          <v-card>
            <v-img :src="game.image" height="200px"></v-img>
            <v-card-title>{{ game.title }}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  
  export default {
    name: 'TestComponent',
    props: {
    },
    setup() {
      const games = ref([
        { id: 1, title: 'Game One', genre: 'Acción', image: 'game-one.jpg' },
        { id: 2, title: 'Game Two', genre: 'Aventura', image: 'game-two.jpg' },
        // ... más juegos
      ]);
  
      const search = ref('');
      const genre = ref('');
      const genres = ref(['Acción', 'Aventura', 'RPG', 'Estrategia']);
  
      const filteredGames = computed(() => {
        return games.value.filter(game => {
          return (
            (!search.value || game.title.toLowerCase().includes(search.value.toLowerCase())) &&
            (!genre.value || game.genre === genre.value)
          );
        });
      });
  
      return {
        search,
        genre,
        genres,
        filteredGames
      };
    }
  };
  </script>
  
  <style>
  /* Agrega estilos personalizados aquí si es necesario */
  </style>
  