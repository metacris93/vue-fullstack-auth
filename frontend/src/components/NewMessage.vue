<template>
  <v-flex class="my-4" sm8 offset-sm2>
    <v-card>
      <v-toolbar dark dense>
        <v-toolbar-title>New Message</v-toolbar-title>
      </v-toolbar>
      <v-form>
        <v-container>
          <v-text-field
            v-model="message"
            :counter="20"
            label="Message"
            required
          ></v-text-field>
          <v-btn class="mr-4" @click="submit"> submit </v-btn>
        </v-container>
      </v-form>
    </v-card>
  </v-flex>
</template>
<script>
import { createNewMessage } from "../../api/message";
export default {
  name: "NewMessage",
  data: () => ({
    message: "",
  }),
  methods: {
    async submit() {
        await createNewMessage({message: this.message});
    },
  },
};
</script>