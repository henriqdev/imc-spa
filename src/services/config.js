import { api } from "src/boot/axios";

api.interceptors.request.use(async (config) => {
  try {
    return config;
  } catch (error) {
    console.error(error);
  }
});

export { api };
