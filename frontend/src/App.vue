<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-btn
        to="/"
        text
      >
        <span>Messages</span>
      </v-btn>
      <v-btn
        to="/NewMessage"
        text
      >
        <span>New Message</span>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        href="#"
        text
      >
        <span>Login</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
