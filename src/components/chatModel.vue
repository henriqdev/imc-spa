<template>
  <div class="q-pa-md">
    <q-scroll-area id="chatbox">
      <div v-for="(item, index) in items" :key="index" class="caption q-py-sm">
        <q-chat-message
          v-if="!item.sent && loadAnswer && items.length - index == 1"
          :bg-color="item.bgcolor"
          :name="`${items.length - index} - ${item.sender}`"
          :avatar="item.avatar"
        >
          <q-spinner-dots size="2rem" />
        </q-chat-message>
        <q-chat-message
          v-else
          :name="item.sender"
          :avatar="item.avatar"
          :text="item.message"
          :stamp="item.stamp"
          :sent="item.sent"
          :bg-color="item.bgcolor"
        />
      </div>
    </q-scroll-area>
  </div>
</template>

<script>
export default {
  name: "dialogThin",
  props: {
    items: {
      type: Array,
      required: false,
    },
    loadAnswer: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
};
</script>

<style scope>
#chatbox {
  width: 340px;
  height: 400px;
  overflow: scroll;
}
</style>
