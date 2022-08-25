<template>
  <v-card class="mx-auto" max-width="300" tile>
    <v-list disabled>
      <v-subheader>Messages</v-subheader>
        <v-list-item v-for="(message, i) in messages" :key="i">
          <v-list-item-content>
            <v-list-item-title v-text="message"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
    </v-list>
  </v-card>
</template>
<script>
import {getMessages} from "../../api/message";
export default {
    data: () => ({
        messages: []
    }),
    async created() {
        this.messages = await getMessages();
    },
};
</script>