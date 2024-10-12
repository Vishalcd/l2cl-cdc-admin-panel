import axios from "axios";
import { API_URL, PAGE_SIZE } from "../utils/helper";

// get token from localstorage
const { token } = JSON.parse(localStorage.getItem("user"));
const headers = { Authorization: `Bearer ${token}` };

export async function getEmployees({ filter, sort, page }) {
  let query = `${API_URL}api/v1/users?fields=name,email,photo,phoneNumber,enrollId,fatherName,fatherPhoneNumber,_id,active,cources,createdAt&role=employee&sort=${sort}${
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

export async function getEmployee(id) {
  const { data } = await axios.get(`${API_URL}api/v1/users/${id}`, {
    headers,
    withCredentials: true,
  });

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data.data;
}

export async function updateEmployee(id, employeeData) {
  const { data } = await axios.patch(`${API_URL}api/v1/users/${id}`, employeeData, {
    headers,
    withCredentials: true,
  });

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data.data;
}

export async function deactivateEmployee(id) {
  const { data } = await axios.delete(`${API_URL}api/v1/users/${id}`, {
    headers,
    withCredentials: true,
  });

  return data;
}
