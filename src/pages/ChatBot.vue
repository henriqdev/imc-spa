<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row justify-center">
      <div style="width: 100%; max-width: 400px">
        <q-chat-message
          name="me"
          avatar="https://cdn.quasar.dev/img/avatar1.jpg"
          :text="['hey, how are you?']"
          stamp="7 minutes ago"
          sent
          bg-color="amber-7"
        />
        <q-chat-message
          name="Jane"
          avatar="https://cdn.quasar.dev/img/avatar5.jpg"
          :text="['doing fine, how r you?']"
          stamp="4 minutes ago"
          text-color="white"
          bg-color="primary"
        />
      </div>
      <q-input
        rounded
        outlined
        v-model="message"
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ChatBot',
  setup () {
    return {
      message: ref(''),
      data: ref([])
    }
  },
  methods: {
    async getMessageBot () {

    }
  }
})
</script>
