import callApiUrl from "@/lib/axios";
import { ILoginPayload } from "@/types/payload";

export const login = async (data: ILoginPayload) => {
  const response = await callApiUrl.post("/auth/login", data);
  return response.data;
};
