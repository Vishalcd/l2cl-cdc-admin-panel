import axios from "axios";
import { BASE_URL, PAGE_SIZE } from "../utils/helper";

export async function getStudents({ filter, sort, page }) {
  let query = `${BASE_URL}api/v1/users?fields=name,email,photo,enrollId,phoneNumber,_id,active,cources,createdAt&role=student&sort=${sort}${
    filter ? `&${filter}` : ""
  }${page ? `&page=${page}&limit=${PAGE_SIZE}` : ""}`;

  const { data } = await axios.get(query, {
    withCredentials: true,
  });

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data;
}

export async function getStudent(id) {
  const { data } = await axios.get(`${BASE_URL}api/v1/users/${id}`, {
    withCredentials: true,
  });

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data.data;
}

export async function getStudentTranscations(id) {
  const { data } = await axios.get(`${BASE_URL}api/v1/users/${id}/transactions`, {
    withCredentials: true,
  });

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data;
}

export async function createTranscations(id, transactionData) {
  const { data } = await axios.post(`${BASE_URL}api/v1/users/${id}/transactions`, transactionData, {
    withCredentials: true,
  });

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data;
}

export async function updateStudent(id, studentData) {
  const { data } = await axios.patch(`${BASE_URL}api/v1/users/${id}`, studentData, {
    withCredentials: true,
  });

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data.data;
}

export async function deactivateStudent(id) {
  const { data } = await axios.delete(`${BASE_URL}api/v1/users/${id}`, {
    withCredentials: true,
  });

  return data;
}
