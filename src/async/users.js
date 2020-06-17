import axios from "axios";

function getUsers() {
  return axios.get("/users.json").then((response) => response.data);
}

export { getUsers };
