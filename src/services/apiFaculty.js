import axios from "axios";
import { BASE_URL } from "../utils/helper";

export async function getFaculty() {
  const { data } = await axios.get(`${BASE_URL}api/v1/faculty`, {
    withCredentials: true,
  });

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data.data;
}

export async function createFaculty(faculty) {
  const { data } = await axios.post(`${BASE_URL}api/v1/faculty`, faculty, {
    withCredentials: true,
  });

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data.data;
}

export async function updateFaculty(id, facultyData) {
  const { data } = await axios.patch(`${BASE_URL}api/v1/faculty/${id}`, facultyData, {
    withCredentials: true,
  });

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data.data;
}

export async function deleteFaculty(id) {
  const { data } = await axios.delete(`${BASE_URL}api/v1/faculty/${id}`, {
    withCredentials: true,
  });

  return data;
}
