import axios from "axios";
import { BASE_URL } from "../utils/helper";

export async function getCourses() {
  const { data } = await axios.get(`${BASE_URL}api/v1/courses`, {
    withCredentials: true,
  });

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data.data;
}

export async function createCourse(course) {
  const { data } = await axios.post(`${BASE_URL}api/v1/courses`, course, {
    withCredentials: true,
  });

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data.data;
}

export async function updateCourse(id, course) {
  const { data } = await axios.patch(`${BASE_URL}api/v1/courses/${id}`, course, {
    withCredentials: true,
  });

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data.data;
}

export async function deleteCourse(id) {
  const { data } = await axios.delete(`${BASE_URL}api/v1/courses/${id}`, {
    withCredentials: true,
  });

  return data;
}
