import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.EXPO_PUBLIC_API_URL}`,
});

api.interceptors.request.use(
  async (request) => {
    const auth = await AsyncStorage.getItem("auth");
    if (auth) {
      const parsed = JSON.parse(auth);
      request.headers.Authorization = `Bearer ${parsed.access_token}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
