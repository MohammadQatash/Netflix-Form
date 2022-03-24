<template>
        <v-card class="card d-flex flex-column">
            <v-card-title class="white--text display-1 mt-30">{{signUp ? $t("create-an-account") : $t("sign-in")}}</v-card-title>
            <v-form v-model="valid" @keyup.native.enter="validate" class="w-100">
                <ValidationObserver ref="form">
                    <ValidationProvider
                        v-slot="{  errors }"
                        :name="$t('username')"
                        rules="required|email_or_phone"
                    >
                        <v-row class="mx-2 mt-1">
                            <v-col cols="12" class="pb-0">
                                <v-text-field
                                    background-color="#444"
                                    color="#999"
                                    :label="$t('email-or-phone')"
                                    filled
                                    name="username"
                                    v-model.trim="loginInfo.username"
                                    required
                                    type="text"
                                    :error-messages="errors"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </ValidationProvider>
                    <ValidationProvider
                        v-slot="{ valid, errors }"
                        :name="$t('password')"
                        rules="required|min:8|custom_password"
                    >
                        <v-row class="mx-2 mt-1">
                            <v-col cols="12" class="pb-0">
                                <v-text-field
                                    background-color="#444"
                                    color="#999"
                                    v-model="loginInfo.password"
                                    @click:append="showPass = !showPass"
                                    :append-icon="
                                        showPass ? 'mdi-eye' : 'mdi-eye-off'
                                    "
                                    :type="showPass ? 'text' : 'password'"
                                    :label="$t('password')"
                                    filled
                                    name="password"
                                    required
                                    :error-messages="errors"
                                    :success="valid"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </ValidationProvider>
                </ValidationObserver>
            </v-form>
            <v-card-actions class="h-250">
                <v-row  class="h-100">
                    <v-col class="d-flex align-start flex-column justify-center align-center pb-0">
                        <v-btn @click="validate" height='50px' color="red accent-4" class="d-flex align-center w-btn white--text text-capitalize title font-weight-bold rounded-md">
                            {{signUp ? $t("create-an-account") : $t("sign-in")}}
                        </v-btn>
                        <div class="gray align-self-start pointer my-2 mx-3">
                            {{ $t("forgot-password") }}
                        </div>
                    </v-col>
                    <v-col class="gray d-flex text-left pb-5 mx-2 h-72">
                        <span>{{$t("new-to-netflix")}}?</span>
                        <span 
                            @click="signUp = !signUp"
                            class="white--text pointer px-2 font-weight-bold"
                        > {{$t("sign-up")}}</span> 
                    </v-col>
                </v-row>
            </v-card-actions>
        </v-card>
</template>
<script>
export default {
    name: 'LoginForm',
    data() {
        return {
            loginInfo: {
                username: null,
                password: null,
            },
            showPass: false,
            password: "",
            valid: true,
            sendingRequest: false,
            signUp: false,
        }
    },
    methods: {
        async validate() {
            const valid = await this.$refs.form.validate();
            if (valid) {
                this.sendingRequest = true;
                setTimeout(() => {
                    this.$store.dispatch("login", this.loginInfo);
                    this.$router.push({ name: "user" });
                }, 1100);
            }
        },
    },
}
</script>
<style scoped>
    .card {
        background-color: rgba(0,0,0,.75) !important;
        width: 384px;
        height: 532px;
        z-index: 20 !important;
    }
    input:valid {
        color: red;
    }
</style>
