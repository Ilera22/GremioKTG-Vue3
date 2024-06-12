<template>
    <v-row class="hero-container">
      <!-- Columna Izquierda -->
      <v-col cols="12" md="7" >
        <v-card>
          <v-img height="300px" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-img>
          <v-card-title>Top western road trips</v-card-title>
          <v-card-subtitle>1,000 miles of wonder</v-card-subtitle>
          <div class="d-flex justify-end">
            <v-btn color="orange" class="mr-3 mb-3">Explore</v-btn>
          </div>
        </v-card>
      </v-col>
  
      <!-- Columna Derecha -->
      <v-col cols="12" md="5">
        <v-card>
          <v-tabs v-model="tab" bg-color="primary" align-tabs="center">
            <v-tab value="one">News</v-tab>
            <v-tab value="two">Reviews</v-tab>
            <v-tab value="three">Hot</v-tab>
          </v-tabs>
  
          <v-card-text>
            <v-window v-model="tab">
              <v-window-item value="one">
                <v-row>
                  <v-col v-for="(item, index) in items" :key="index" cols="12">
                    <v-card color="#1F7087">
                      <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                          <v-card-title class="text-h6">{{ item.title }}</v-card-title>
                          <v-card-actions>
                            <v-btn class="ms-1" size="small" text="Leer Mas" variant="outlined"></v-btn>
                          </v-card-actions>
                        </div>
                        <v-avatar rounded="0" size="100">
                          <v-img :src="item.image"></v-img>
                        </v-avatar>
                      </div>
                    </v-card>
                  </v-col>
                </v-row>
              </v-window-item>
  
              <v-window-item value="two">
                Two
              </v-window-item>
  
              <v-window-item value="three">
                Three
              </v-window-item>
            </v-window>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </template>
  
  <script>
  export default {
    name: 'TabMenu',
    data() {
      return {
        tab: 'one',
        items: [
          {
            title: 'Articulo1',
            image: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          },
          {
            title: 'Articulo2',
            image: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          },
          {
            title: 'Articulo3',
            image: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          },
          {
            title: 'Articulo4',
            image: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          },
        ],
      };
    },
  };
  </script>
  
  <style>
  .hero-container {
    width: 85%;
    margin: 0 auto; /* Opcional: Centrar el contenedor */
  }
  </style>
  