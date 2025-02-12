import CarsListLayout from "@/components/layouts/CarsListLayout";
import { useCarProducts } from "@/hooks/useCarProducts";
import CarProducts from "@/components/modules/CarProducts";

const ListCarsPage = () => {
  const { data: cars, isLoading } = useCarProducts();

  return (
    <CarsListLayout>
      <CarProducts data={cars} isLoading={isLoading} />
    </CarsListLayout>
  );
};

export default ListCarsPage;