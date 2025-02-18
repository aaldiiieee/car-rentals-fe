import { useQuery } from "@tanstack/react-query";
import { getCars, getCarByUUID } from "@/services/cars.service";
import { useSearchParams } from "react-router";

export const useCarProducts = () => {
  const [searchParams] = useSearchParams();

  const params = {
    driverType: searchParams.get("driverType") || "",
    totalPassengers: searchParams.get("totalPassengers") || "",
    transmission: searchParams.get("transmission") || "",
  };

  const carsQuery = useQuery({
    queryKey: ["cars", { ...params }],
    queryFn: () => getCars({ ...params }),
    staleTime: 60 * 60 * 1000,
    retry: false
  });

  const useGetDetailCar = (uuid: string) => {
    return useQuery({
      queryKey: ["carDetail", uuid],
      queryFn: () => getCarByUUID(uuid),
      enabled: !!uuid,
    });
  };

  return {
    data: carsQuery.data, 
    isLoading: carsQuery.isLoading,
    isError: carsQuery.isError,
    error: carsQuery.error,
    useGetDetailCar
  };
};
