import callApiUrl from "@/lib/axios";

export const getCars = async () => {
  const response = await callApiUrl.get("/cars/get-all-cars");
  return response.data.data;
};
