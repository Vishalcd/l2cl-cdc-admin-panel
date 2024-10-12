import axios from "axios";
import { API_URL, PAGE_SIZE } from "../utils/helper";

// get token from localstorage
const { token } = JSON.parse(localStorage.getItem("user"));
const headers = { Authorization: `Bearer ${token}` };

export async function getStudents({ filter, sort, page }) {
  let query = `${API_URL}api/v1/users?fields=name,email,photo,enrollId,phoneNumber,_id,active,cources,createdAt&role=student&sort=${sort}${
    filter ? `&${filter}` : ""
  }${page ? `&page=${page}&limit=${PAGE_SIZE}` : ""}`;

  const { data } = await axios.get(query, {
    headers,
    withCredentials: true,
  });

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data;
}

export async function getStudent(id) {
  const { data } = await axios.get(`${API_URL}api/v1/users/${id}`, {
    headers,
    withCredentials: true,
  });

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data.data;
}

export async function getStudentTranscations(id) {
  const { data } = await axios.get(`${API_URL}api/v1/users/${id}/transactions`, {
    headers,
    withCredentials: true,
  });

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data;
}

export async function createTranscations(id, transactionData) {
  const { data } = await axios.post(`${API_URL}api/v1/users/${id}/transactions`, transactionData, {
    headers,
    withCredentials: true,
  });

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data;
}

export async function updateStudent(id, studentData) {
  const { data } = await axios.patch(`${API_URL}api/v1/users/${id}`, studentData, {
    headers,
    withCredentials: true,
  });

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data.data;
}

export async function deactivateStudent(id) {
  const { data } = await axios.delete(`${API_URL}api/v1/users/${id}`, {
    headers,
    withCredentials: true,
  });

  return data;
}
