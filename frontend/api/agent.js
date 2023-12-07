import axios from "axios";
import { API_URL } from "@env";

axios.defaults.baseURL = `http://${API_URL}:8000/api`;

const responseBody = (response) => response.data;

const requests = {
  get: (url) => axios.get(url).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
};

const Info = {
  profile: () => requests.get("/profile"),
};

const Profile = {
  update: (profile) => requests.put("/profile", profile),
};

const Interest = {
  update: (id, interest) => requests.put(`/interest/${id}`, interest),
};

const Tool = {
  update: (id, tool) => requests.put(`/tool/${id}`, tool),
};

const agent = { Info, Profile, Interest, Tool };

export default agent;
