<template>
  <v-footer class="bg-f">
    <v-container class="h-100 w-100">
      <div class="d-flex flex-column h-100 w-100 white--text">
        <v-row :class="xsOnly && this.$route.name === 'home' ? 'custome-divider' : ''">
          <v-col cols="12 d-flex align-center">
            <v-hover v-slot="{ hover }">
              <a
                  href="/"
                  :class="{
                      'text-decoration-underline': hover,
                  }"
                  class="grey--text text--darken-1 text-decoration-none"
                  >{{ $t('questions-contact-us') }}</a
              >
            </v-hover>
          </v-col>
          <v-col cols="12 d-flex flex-wrap">
            <v-row>
              <v-col v-for="(link, i) in links" :key="i" cols="6" sm='4' md='3' class="pt-0 pb-0 mt-0 mb-0">
                <v-hover v-slot="{ hover }">
                    <a
                        href="/"
                        :class="{
                            'text-decoration-underline': hover,
                        }"
                        class="subtitle-2 grey--text text--darken-1 text-decoration-none"
                        >{{ $t(link) }}</a
                    >
                </v-hover>
              </v-col>
            </v-row>
          </v-col>
          <v-row class="h-100px">
            <v-col cols="8" class="mx-3 mt-4">
              <v-select
                v-model="lang"
                class="custom-select"
                outlined
                :items="langs"
                dense
                solo
                background-color="#000"
                dark
                item-color='grey--text'
                @change="changeLang(lang)"
              ></v-select>
            </v-col>
          </v-row>
        </v-row>
      </div>
    </v-container>
  </v-footer>
</template>
<script>
export default {
    name: 'Footer',
    data() {
      return {
        links: ['FAQ', 'help-center', 'terms-of-use', 'Privacy', 'cookie-preferences', 'corporate-information'],
        langs: ['English', 'العربية'],
        lang:"English",
      }
    },
    methods: {
      changeLang(lang) {
        if(lang === 'English') {
          this.$router.push({params: {lang: 'en'}});
          return this.$store.dispatch('setLang', 'en');
        } else {
          this.$router.push({params: {lang: 'ar'}});
          return this.$store.dispatch('setLang', 'ar');
        }
      }
    },
}
</script>
<style scoped>
    .bg-f {
        background-color: rgba(0,0,0,.75) !important;
        position: absolute;
        bottom: -300px;
        left: 0;
        max-width: 100vw;
        width: 100vw;
        height: 238px;
    }
    .custom-select {
      width: 124.49px;
    }
    .custome-divider::before {
      content: '';
      position: absolute;
      top: -12px;
      left: 0;
      width: 100%;
      border-bottom: 1px solid #757575 ;
    }
</style>