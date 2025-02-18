import callApiUrl from "@/lib/axios";
import { AxiosError } from "axios";

export const getCars = async (filters: {
  driverType?: string;
  totalPassengers?: string;
  transmission?: string;
}) => {
  try {
    const params = new URLSearchParams();
    if (filters.driverType) params.append("driverType", filters.driverType);
    if (filters.totalPassengers) params.append("totalPassengers", filters.totalPassengers);
    if (filters.transmission) params.append("transmission", filters.transmission);

    const response = await callApiUrl.get(`/cars/get-all-cars?${params.toString()}`);
    return response.data.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      if (error.response) {
        throw error.response.data.message;
      } else {
        throw error;
      }
    } else {
      throw error;
    }
  }
};

export const getCarByUUID = async (uuid: string) => {
  const response = await callApiUrl.get(`/cars/get-car/${uuid}`);
  return response.data;
};
