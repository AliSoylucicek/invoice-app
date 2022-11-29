<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-spacer />
      <h4 class="text-h4">Ortogoloso</h4>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
