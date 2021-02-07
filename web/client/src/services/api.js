import axios from "axios";
import { toast } from "react-toastify";

export async function loadProfile(companyId) {
  const { data } = await api.get("/profile", {
    headers: {
      Authorization: companyId,
    },
  });

  return data;
}

export async function deleteProfile(id, companyId) {
  try {
    await api.delete(`/freelancer/${id}`, {
      headers: {
        Authorization: companyId,
      },
    });
    toast.success("Freelancer Deleted!");
  } catch (error) {
    toast.error("error deleting freelancer, try again");
  }
}

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export default api;
