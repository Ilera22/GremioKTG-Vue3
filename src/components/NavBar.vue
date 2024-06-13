<template>
  <div>
      <v-row class="align-center" no-gutters>
        <v-col cols="auto" >
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </v-col>

        <v-col cols="auto">
          <v-app-bar-title>Application Bar</v-app-bar-title>
        </v-col>
<v-spacer></v-spacer>
        <v-col cols="12" md="5" >
          <v-text-field
            v-model="search"
            density="compact"
            label="Search"
            append-inner-icon="mdi-magnify"
            variant="outlined"
            flat
            hide-details
            single-line
            class="mx-2"
          ></v-text-field>
        </v-col>
      </v-row>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      search: ''
    };
  }
};
</script>

<style scoped>
@media only screen and (max-width: 767px) {

#menu {
height:250px;
background-color: thistle;
}
}

</style>
