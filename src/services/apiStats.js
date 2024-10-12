import axios from "axios";
import { API_URL } from "../utils/helper";

// get token from localstorage
const { token } = JSON.parse(localStorage.getItem("user"));
const headers = { Authorization: `Bearer ${token}` };

export async function getStats(date) {
  const { data } = await axios.get(`${API_URL}api/v1/stats?date=${date}`, {
    headers,
    withCredentials: true,
  });

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data.stats;
}
