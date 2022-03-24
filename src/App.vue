<template>
  <v-app>
    <v-main class="custom-color">
        <router-view/>
        <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Vue from "vue";
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  created() {
        Vue.prototype.$vuetify = this.$vuetify;
    },
  components: {
    Footer,
  }
};
</script>

<style scoped>
.custom-color {
  background-color: #000 !important;
}
</style>
