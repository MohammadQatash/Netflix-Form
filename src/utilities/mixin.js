import Vue from "vue"

export const genericMixins = {
    methods: {
    },
    computed: {
        mdAndUp() {
            return this.$vuetify.breakpoint.mdAndUp;
        },
        smAndDown() {
            return this.$vuetify.breakpoint.smAndDown;
        },
        xsOnly() {
            return this.$vuetify.breakpoint.xsOnly;
        },
        isMobile() {
            return this.$vuetify.breakpoint.xsOnly;
        },
        isRtl() {
            return Vue.prototype.$vuetify.rtl;
        }
    },
};