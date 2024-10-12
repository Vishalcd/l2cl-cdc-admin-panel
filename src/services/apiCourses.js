import axios from "axios";
import { API_URL } from "../utils/helper";

// get token from localstorage
const { token } = JSON.parse(localStorage.getItem("user"));
const headers = { Authorization: `Bearer ${token}` };

export async function getCourses() {
  const { data } = await axios.get(`${API_URL}api/v1/courses`, {
    headers,
    withCredentials: true,
  });

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data.data;
}

export async function createCourse(course) {
  const { data } = await axios.post(`${API_URL}api/v1/courses`, course, {
    headers,
    withCredentials: true,
  });

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data.data;
}

export async function updateCourse(id, course) {
  const { data } = await axios.patch(`${API_URL}api/v1/courses/${id}`, course, {
    headers,
    withCredentials: true,
  });

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data.data;
}

export async function deleteCourse(id) {
  const { data } = await axios.delete(`${API_URL}api/v1/courses/${id}`, {
    headers,
    withCredentials: true,
  });

  return data;
}
