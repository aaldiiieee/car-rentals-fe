import callApiUrl from "@/lib/axios";

export const getCars = async (filters: {
  driverType?: string;
  totalPassengers?: string;
}) => {
  const params = new URLSearchParams();
  if (filters.driverType) params.append("driverType", filters.driverType);
  if (filters.totalPassengers) params.append("totalPassengers", filters.totalPassengers);

  const response = await callApiUrl.get(`/cars/get-all-cars?${params.toString()}`);
  return response.data.data;
};

export const getCarByUUID = async (uuid: string) => {
  const response = await callApiUrl.get(`/cars/get-car/${uuid}`);
  return response.data;
};
