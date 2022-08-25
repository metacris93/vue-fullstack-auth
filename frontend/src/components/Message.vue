<template>
  <v-flex class="my-2" sm8 offset-sm2>
    <v-card>
      <v-list disabled>
        <v-toolbar dark dense>
          <v-toolbar-title>Message</v-toolbar-title>
        </v-toolbar>
        <v-list-item v-for="(message, i) in messages" :key="i">
          <v-list-item-content>
            <v-list-item-title v-text="message"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-flex>
</template>
<script>
import { getMessages } from "../../api/message";
export default {
  name: "Message",
  data: () => ({
    messages: [],
  }),
  async created() {
    this.messages = await getMessages();
  },
};
</script>