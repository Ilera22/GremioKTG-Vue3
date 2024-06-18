<template>
  <v-container class="container-background">
    <h1>Popular games</h1>
    <v-row>
      <v-col cols="6" md="3" v-for="(item, index) in images" :key="index">
        <v-img
          class="hover-zoom"
          :width="300"
          aspect-ratio="16/9"
          cover
          :style="{ borderRadius: '15px' }"
          :src="item.src"
          @mouseover="setBackground(item.src)"
          @mouseleave="clearBackground"
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
  },
  methods: {
    setBackground(src) {
      document.body.style.backgroundImage = `url(${src})`;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundPosition = "center center";
      document.body.style.transition = "background-image 0.5s ease-in-out";
    },
    clearBackground() {
      document.body.style.backgroundImage = "";
    }
  }
};
</script>

<style scoped>
.hover-zoom {
  transition: transform 0.3s ease-in-out;
}

.hover-zoom:hover {
  transform: scale(1.05);
}

.rounded-img {
  border-radius: 15px;
}

/* Asegurar que el contenedor tenga un fondo transparente */
.container-background {
  background-color: transparent;
  transition: background-color 0.5s ease-in-out;
}

body {
  transition: background-image 0.5s ease-in-out;
}
</style>
