import axios from "axios";
import { toast } from "react-toastify";

import { Freelancer } from "../pages/Profile";

export async function loadProfile(
  companyId: string | null
): Promise<Freelancer[]> {
  const { data } = await api.get("/profile", {
    headers: {
      Authorization: companyId,
    },
  });

  return data;
}

export async function deleteProfile(id: any, companyId: string | null) {
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

export async function createFreelancer(data: any, companyId: string | null) {
  try {
    await api.post("/freelancer", data, {
      headers: {
        Authorization: companyId,
      },
    });
    toast.success("New Freelancer created!");
  } catch (error) {
    toast.error("Error, tray Again!");
  }
}

export async function deleteCompany(
  user: string | null,
  companyId: string | null
) {
  try {
    await api.delete(`/companys/${companyId}`);
    toast.info(`Ong ${user} deleted`);
  } catch (error) {
    toast.error("Error, tray Again!");
  }
}

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export default api;
