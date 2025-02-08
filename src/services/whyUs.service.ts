import callApiUrl from "@/lib/axios";

export const getWhyUs = async () => {
  const response = await callApiUrl.get("/why-us/get-all-why-us");
  return response.data.data;
};
