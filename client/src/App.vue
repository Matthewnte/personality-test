<template>
  <v-app>
    <v-app-bar app color="primary" dark
      ><a href="/" class="text-decoration-none white--text"
        ><b>Personality</b>Test</a
      ></v-app-bar
    >

    <v-main>
      <v-container :fluid="$vuetify.breakpoint.smAndDown">
        <router-view />
      </v-container>
    </v-main>

    <app-footer />
  </v-app>
</template>

<script>
import AppFooter from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    AppFooter,
  },
  data: () => ({
    //
  }),
};
</script>
