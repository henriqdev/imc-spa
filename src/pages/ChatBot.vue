<template>
  <q-page class="flex flex-center">
    <q-header class="bg-white" elevated>
      <q-toolbar>
        <q-btn flat dense text-color="primary" icon="fa fa-arrow-left" />
      </q-toolbar>
    </q-header>
    <div>
      <ChatModel :items="items" :loadAnswer="loadAnswer" />
    </div>
    <q-input
      rounded
      outlined
      dense
      v-model="message"
      v-on:keyup.enter="sendQuestion(message)"
    >
      <template v-slot:after>
        <q-btn
          color="primary"
          rounded
          icon-color="white"
          icon="fa fa-paper-plane"
          @click="sendQuestion(message)"
        />
      </template>
    </q-input>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { date } from "quasar";
import ChatModel from "components/chatModel.vue";

import ChatService from "../services/ChatBot";

export default defineComponent({
  name: "ChatBot",
  components: {
    ChatModel,
  },
  setup() {
    const items = ref([]);
    return {
      timeout: ref(null),
      loadAnswer: ref(false),
      message: ref(""),
      stepflow: ref("1"),
      name: ref("Eu"),
      age: ref(null),
      height: ref(null),
      weight: ref(null),
      items,
    };
  },
  methods: {
    sendLoad() {
      this.loadAnswer = false;
    },
    async setMessageChat(body) {
      this.timeout = setTimeout(this.sendLoad, 1800);
      this.items.push({ ...body });
    },
    async sendQuestion(textUser) {
      clearTimeout(this.timeout);
      const now = Date.now();
      this.parserTypeFlow(this.stepflow.toString(), textUser);
      const query = {
        question: textUser,
        stepflow: this.stepflow.toString(),
        user: {
          name: this.name,
          age: this.age,
          height: this.height,
          weight: this.weight,
        },
      };
      this.setMessageChat({
        sender: this.name,
        sent: true,
        bgcolor: "green-5",
        message: [textUser],
        stamp: date.formatDate(now, "DD/MM/YY HH:mm"),
      });
      // const diff = date.getDateDiff(date1, date2, unit)

      await ChatService.QuestionBot(query)
        .then((res) => {
          this.loadAnswer = true;
          let filterAnswer;
          if (res.stepFlow === "F") {
            const txtSplit = res.answerDescription.split("/n");
            filterAnswer = [res.answerMain].concat(txtSplit);
          } else filterAnswer = [res.answerMain];
          this.setMessageChat({
            sender: "ANA-BOT",
            sent: false,
            bgcolor: "amber-5",
            avatar: "https://cdn.quasar.dev/img/avatar2.jpg",
            message: filterAnswer,
            stamp: date.formatDate(res.createdAt, "DD/MM/YY HH:mm"),
          });
          this.jumpNextStep(res.stepFlow);
        })
        .catch((err) => {
          const now = Date.now();
          console.error(err);
          this.setMessageChat({
            sender: "ANA-BOT",
            sent: false,
            bgcolor: "amber-5",
            avatar: "https://cdn.quasar.dev/img/avatar2.jpg",
            message: [
              "desculpe, estou aprendendo:/",
              " não conseguir entende oque vc falou!",
              "Tente pergunta de uma outra forma rs",
            ],
            stamp: date.formatDate(now, "DD/MM/YY HH:mm"),
          });
        })
        .finally(() => {
          this.message = "";
        });
    },
    jumpNextStep(stepflow) {
      if (this.stepflow === "F") {
        console.log("final");
      } else {
        const stepflowParsed = Number.parseInt(stepflow);
        this.stepflow = stepflowParsed + 1;
      }
    },
    parserTypeFlow(stepflow, textUser) {
      switch (stepflow) {
        case "4":
          this.age = textUser;
          break;
        case "5":
          this.height = textUser;
          break;
        case "6":
          this.weight = textUser;
          this.stepflow = "F";
          break;
      }
    },
  },
});
</script>
