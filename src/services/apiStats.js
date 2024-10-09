import axios from "axios";
import { API_URL } from "../utils/helper";

export async function getStats(date) {
  const { data } = await axios.get(`${API_URL}api/v1/stats?date=${date}`);

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data.stats;
}
