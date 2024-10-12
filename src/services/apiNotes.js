import axios from "axios";
import { API_URL } from "../utils/helper";

// get token from localstorage
const { token } = JSON.parse(localStorage.getItem("user"));
const headers = { Authorization: `Bearer ${token}` };

export async function getNotes() {
  const { data } = await axios.get(`${API_URL}api/v1/notes`);

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data.data;
}

export async function createNote(note) {
  const { data } = await axios.post(`${API_URL}api/v1/notes`, note, {
    headers,
    withCredentials: true,
  });

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data.data;
}

export async function updateNote(id, noteData) {
  const { data } = await axios.patch(`${API_URL}api/v1/notes/${id}`, noteData, {
    headers,
    withCredentials: true,
  });

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data.data;
}

export async function deleteNote(id) {
  const { data } = await axios.delete(`${API_URL}api/v1/notes/${id}`, {
    headers,
    withCredentials: true,
  });

  return data;
}
