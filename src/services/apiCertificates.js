import axios from "axios";
import { BASE_URL, PAGE_SIZE } from "../utils/helper";

export async function getCertificates({ filter, sort, page }) {
  const { data } = await axios.get(
    `${BASE_URL}api/v1/certificates?sort=${sort}${filter ? `&${filter}` : ""}${
      page ? `&page=${page}&limit=${PAGE_SIZE}` : ""
    }`,
    {
      withCredentials: true,
    }
  );

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data.data;
}

export async function createCertificate(certificate) {
  const { data } = await axios.post(`${BASE_URL}api/v1/certificates`, certificate, {
    withCredentials: true,
  });

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data.data;
}

export async function updateCertificate(id, certificateData) {
  const { data } = await axios.patch(`${BASE_URL}api/v1/certificates/${id}`, certificateData, {
    withCredentials: true,
  });

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data.data;
}

export async function deleteCertificate(id) {
  const { data } = await axios.delete(`${BASE_URL}api/v1/certificates/${id}`, {
    withCredentials: true,
  });

  return data;
}
