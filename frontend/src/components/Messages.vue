<template>
  <v-flex class="my-2" sm8 offset-sm2>
    <v-card>
      <v-list flat>
        <v-toolbar dark dense>
          <v-toolbar-title>Message</v-toolbar-title>
        </v-toolbar>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item
            v-for="(message, index) in this.$store.state.messages"
            :key="index" :to="'message/'+index"
          >
            <v-list-item-content to>
              <v-list-item-title v-text="message"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-flex>
</template>
<script>
export default {
  name: "Messages",
  data: () => ({
    selectedItem: 1
  }),
  async created() {
    // this.$root.$on('newMessage', message => {
    //     this.messages.push(message);
    // });
    try {
        await this.$store.dispatch("getMessages");
    } catch (error) {
        console.error(error.message);
    }
  },
};
</script>