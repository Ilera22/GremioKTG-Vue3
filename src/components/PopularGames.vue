<template>
  <v-container>
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
</style>
