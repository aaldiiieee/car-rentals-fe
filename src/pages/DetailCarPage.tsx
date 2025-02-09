import { useParams } from "react-router";
import DetailCarLayout from "@/components/layouts/DetailCarLayout";
import { useCarProducts } from "@/hooks/useCarProducts";

const DetailCarPage = () => {
  const { uuid } = useParams();

  const { useGetDetailCar } = useCarProducts();
  const { data: carDetail } = useGetDetailCar(uuid as string);

  return (
    <DetailCarLayout>
      <div className="mt-10">
        <p>{carDetail?.mcp_model}</p>
      </div>
    </DetailCarLayout>
  );
};

export default DetailCarPage;
