import { api } from "./config.js";

const sangria = {
  async QuestionBot(body) {
    const res = await api.post("chatbot/answer", body);
    return res.data.response;
  },
};

export default sangria;
