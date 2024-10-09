import axios from "axios";
import { API_URL } from "../utils/helper";

export async function getPlacements() {
  const { data } = await axios.get(`${API_URL}api/v1/placements`);

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data.data;
}

export async function createPlacement(placement) {
  const { data } = await axios.post(`${API_URL}api/v1/placements`, placement);

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data.data;
}

export async function updatePlacement(id, placementData) {
  console.log(id, placementData);
  const { data } = await axios.patch(`${API_URL}api/v1/placements/${id}`, placementData);

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data.data;
}

export async function deletePlacement(id) {
  const { data } = await axios.delete(`${API_URL}api/v1/placements/${id}`);

  return data;
}
