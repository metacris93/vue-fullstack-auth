<template>
  <v-flex class="my-4" sm8 offset-sm2>
    <v-card>
      <v-toolbar dark dense>
        <v-toolbar-title>Login</v-toolbar-title>
      </v-toolbar>
      <v-form>
        <v-container>
          <v-text-field
            v-model="username"
            label="User Name"
            required
          ></v-text-field>
          <v-text-field
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            @click:append="show = !show"
            v-model="password"
            label="Password"
            required
          ></v-text-field>
          <v-btn class="mr-4" @click="login">Sign In</v-btn>
        </v-container>
      </v-form>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    username: "",
    password: "",
    show: false,
  }),
  methods: {
    async login() {
        const user = {
            username: this.username,
            password: this.password
        }
        this.$store.dispatch('login', user);
    }
  },
};
</script>