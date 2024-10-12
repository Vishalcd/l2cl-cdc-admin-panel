import axios from "axios";
import { API_URL, PAGE_SIZE } from "../utils/helper";

// get token from localstorage
const { token } = JSON.parse(localStorage.getItem("user"));
const headers = { Authorization: `Bearer ${token}` };

export async function getCertificates({ filter, sort, page }) {
  const { data } = await axios.get(
    `${API_URL}api/v1/certificates?sort=${sort}${filter ? `&${filter}` : ""}${
      page ? `&page=${page}&limit=${PAGE_SIZE}` : ""
    }`,
    {
      headers,
      withCredentials: true,
    }
  );

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data.data;
}

export async function createCertificate(certificate) {
  const { data } = await axios.post(`${API_URL}api/v1/certificates`, certificate, {
    headers,
    withCredentials: true,
  });

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data.data;
}

export async function updateCertificate(id, certificateData) {
  const { data } = await axios.patch(`${API_URL}api/v1/certificates/${id}`, certificateData, {
    headers,
    withCredentials: true,
  });

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data.data;
}

export async function deleteCertificate(id) {
  const { data } = await axios.delete(`${API_URL}api/v1/certificates/${id}`, {
    headers,
    withCredentials: true,
  });

  return data;
}
