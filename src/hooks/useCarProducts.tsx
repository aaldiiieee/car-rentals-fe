import { useQuery } from "@tanstack/react-query";
import { getCars, getCarByUUID } from "@/services/cars.service";
import { useSearchParams } from "react-router";

export const useCarProducts = () => {
  const [searchParams] = useSearchParams();

  const driverType = searchParams.get("driverType") || "";
  const totalPassengers = searchParams.get("totalPassengers") || "";

  const carsQuery = useQuery({
    queryKey: ["cars", { driverType, totalPassengers }],
    queryFn: () => getCars({ driverType, totalPassengers }),
    staleTime: 60 * 60 * 1000,
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
    useGetDetailCar
  };
};
