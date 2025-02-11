import CarsListLayout from "@/components/layouts/CarsListLayout";
import { useCarProducts } from "@/hooks/useCarProducts";
import CarProducts from "@/components/modules/CarProducts";

const ListCarsPage = () => {
  const { data: cars } = useCarProducts();

  return (
    <CarsListLayout>
      <CarProducts data={cars} />
    </CarsListLayout>
  );
};

export default ListCarsPage;