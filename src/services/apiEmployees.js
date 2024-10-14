import axios from "axios";
import { BASE_URL, PAGE_SIZE } from "../utils/helper";

export async function getEmployees({ filter, sort, page }) {
  let query = `${BASE_URL}api/v1/users?fields=name,email,photo,phoneNumber,enrollId,fatherName,fatherPhoneNumber,_id,active,cources,createdAt&role=employee&sort=${sort}${
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

export async function getEmployee(id) {
  const { data } = await axios.get(`${BASE_URL}api/v1/users/${id}`, {
    withCredentials: true,
  });

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data.data;
}

export async function updateEmployee(id, employeeData) {
  const { data } = await axios.patch(`${BASE_URL}api/v1/users/${id}`, employeeData, {
    withCredentials: true,
  });

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data.data;
}

export async function deactivateEmployee(id) {
  const { data } = await axios.delete(`${BASE_URL}api/v1/users/${id}`, {
    withCredentials: true,
  });

  return data;
}
