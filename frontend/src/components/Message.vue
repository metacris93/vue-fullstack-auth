<template>
  <v-flex class="my-2" sm8 offset-sm2>
    <v-card>
      <v-list disabled>
        <v-toolbar dark dense>
          <v-toolbar-title>Message</v-toolbar-title>
        </v-toolbar>
        <v-card-text>{{message.text}}</v-card-text>
      </v-list>
    </v-card>
  </v-flex>
</template>
<script>

export default {
  name: "Message",
  data: () => ({
    message: "",
  }),
  async created() {
    this.message = await this.$store.dispatch("getMessage", this.$route.params.id);
  }
};
</script>