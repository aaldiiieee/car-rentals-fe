import CarsListLayout from "@/components/layouts/CarsListLayout";
import { useCarProducts } from "@/hooks/useCarProducts";
import CarProducts from "@/components/modules/CarProducts";

const ListCarsPage = () => {
  const { data: cars, isLoading, isError, error } = useCarProducts();

  return (
    <CarsListLayout>
      <CarProducts
        data={cars}
        isLoading={isLoading}
        isError={isError}
        errorMessage={error?.toString() ?? null}
      />
    </CarsListLayout>
  );
};

export default ListCarsPage;
