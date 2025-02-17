import callApiUrl from "@/lib/axios";
import { ILoginPayload, IRegisterPayload } from "@/types/payload";

export const login = async (data: ILoginPayload) => {
  const response = await callApiUrl.post("/auth/login", data);
  return response.data;
};

export const register = async (data: IRegisterPayload) => {
  const response = await callApiUrl.post("/auth/register", data);
  return response.data;
}