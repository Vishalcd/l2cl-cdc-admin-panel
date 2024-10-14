import axios from "axios";
import { BASE_URL } from "../utils/helper";

export async function login(loginDetails) {
  const { data } = await axios.post(`${BASE_URL}api/v1/users/login`, loginDetails, {
    withCredentials: true,
  });

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data;
}

export async function logout() {
  const { data } = await axios.post(`${BASE_URL}api/v1/users/logout`, {
    withCredentials: true,
  });

  if (data.status !== "success") {
    throw new Error(data.message);
  }
}
