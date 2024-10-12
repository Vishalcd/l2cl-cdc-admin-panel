import axios from "axios";
import { API_URL, PAGE_SIZE } from "../utils/helper";

export async function getPlacements(page, sort, filter) {
  const { data } = await axios.get(
    `${API_URL}api/v1/placements?${page ? `page=${page}&limit=${PAGE_SIZE}` : ""}&sort=${sort}${
      filter ? `&${filter}` : ""
    }`
  );

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data;
}

export async function createPlacement(placement) {
  const { data } = await axios.post(`${API_URL}api/v1/placements`, placement, {
    withCredentials: true,
  });

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data.data;
}

export async function updatePlacement(id, placementData) {
  console.log(id, placementData);
  const { data } = await axios.patch(`${API_URL}api/v1/placements/${id}`, placementData, {
    withCredentials: true,
  });

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data.data;
}

export async function deletePlacement(id) {
  const { data } = await axios.delete(`${API_URL}api/v1/placements/${id}`, {
    withCredentials: true,
  });

  return data;
}
