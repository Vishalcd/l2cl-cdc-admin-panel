import axios from "axios";
import { BASE_URL } from "../utils/helper";

export async function getGallery() {
  const { data } = await axios.get(`${BASE_URL}api/v1/gallerys`);

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data.data;
}

export async function createGallery(image) {
  const { data } = await axios.post(`${BASE_URL}api/v1/gallerys`, image, {
    withCredentials: true,
  });

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data.data;
}

export async function downloadGallery(id) {
  const { data } = await axios.get(`${BASE_URL}api/v1/gallerys/${id}/download`, {
    withCredentials: true,
  });

  return data;
}

export async function deleteGallery(id) {
  const { data } = await axios.delete(`${BASE_URL}api/v1/gallerys/${id}`, {
    withCredentials: true,
  });

  return data;
}
