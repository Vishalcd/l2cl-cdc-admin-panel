import axios from "axios";
import { BASE_URL } from "../utils/helper";

export async function getNotes() {
  const { data } = await axios.get(`${BASE_URL}api/v1/notes`);

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data.data;
}

export async function createNote(note) {
  const { data } = await axios.post(`${BASE_URL}api/v1/notes`, note, {
    withCredentials: true,
  });

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data.data;
}

export async function updateNote(id, noteData) {
  const { data } = await axios.patch(`${BASE_URL}api/v1/notes/${id}`, noteData, {
    withCredentials: true,
  });

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data.data;
}

export async function deleteNote(id) {
  const { data } = await axios.delete(`${BASE_URL}api/v1/notes/${id}`, {
    withCredentials: true,
  });

  return data;
}
