<template>
    <v-container>
      <v-row>
        <v-col cols="6" md="3" v-for="(item, index) in images" :key="index">
          <v-img
            :width="300"
            aspect-ratio="16/9"
            cover
            :style="{ borderRadius: '15px' }"
            :src="item.src"
          ></v-img>
          <h3 class="text-center">{{ item.title }}</h3>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: "PopularGames",
    data() {
      return {
        images: [
          { src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg", title: "Image 1" },
          { src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg", title: "Image 2" },
          { src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg", title: "Image 3" },
          { src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg", title: "Image 4" }
        ]
      };
    }
  };
  </script>
  
  <style>
  .rounded-img {
    border-radius: 15px;
  }
  </style>
  