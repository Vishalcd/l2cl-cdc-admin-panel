import axios from "axios";
import { API_URL } from "../utils/helper";

// get token from localstorage
const { token } = JSON.parse(localStorage.getItem("user"));
const headers = { Authorization: `Bearer ${token}` };

export async function getFaculty() {
  const { data } = await axios.get(`${API_URL}api/v1/faculty`, {
    headers,
    withCredentials: true,
  });

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data.data;
}

export async function createFaculty(faculty) {
  const { data } = await axios.post(`${API_URL}api/v1/faculty`, faculty, {
    headers,
    withCredentials: true,
  });

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data.data;
}

export async function updateFaculty(id, facultyData) {
  const { data } = await axios.patch(`${API_URL}api/v1/faculty/${id}`, facultyData, {
    headers,
    withCredentials: true,
  });

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data.data;
}

export async function deleteFaculty(id) {
  const { data } = await axios.delete(`${API_URL}api/v1/faculty/${id}`, {
    headers,
    withCredentials: true,
  });

  return data;
}
