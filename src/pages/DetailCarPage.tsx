import { useParams } from "react-router";
import DetailCarLayout from "@/components/layouts/DetailCarLayout";
import { useCarProducts } from "@/hooks/useCarProducts";
import DetailCarProduct from "@/components/modules/DetailCarProduct";

const DetailCarPage = () => {
  const { uuid } = useParams();

  const { useGetDetailCar } = useCarProducts();
  const { data: carData } = useGetDetailCar(uuid as string);

  return (
    <DetailCarLayout>
      <DetailCarProduct car={carData?.data} />
    </DetailCarLayout>
  );
};

export default DetailCarPage;
