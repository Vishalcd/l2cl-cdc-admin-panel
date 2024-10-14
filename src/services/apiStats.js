import axios from "axios";
import { BASE_URL } from "../utils/helper";

export async function getStats(date) {
  const { data } = await axios.get(`${BASE_URL}api/v1/stats?date=${date}`, {
    withCredentials: true,
  });

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data.stats;
}
