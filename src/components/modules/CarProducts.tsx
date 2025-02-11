import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import { ICars } from "@/types/res";
import { Users, Settings, Calendar } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";

const CarProducts = ({ data }: { data: ICars[] }) => {
  const navigate = useNavigate();

  return (
    <>
      {data?.map((car: ICars) => (
        <Card key={car.mcp_uuid}>
          <div className="flex justify-center p-4">
            <img
              src={car.mcp_image_url}
              alt={car.mcp_model}
              className="object-cover max-w-[300px] w-full h-[160px]"
            />
          </div>
          <CardHeader>
            <CardTitle className="text-sm font-light">
              {car.mcp_manufacture}
            </CardTitle>
            <CardTitle className="text-md">{car.mcp_model}</CardTitle>
            <CardTitle className="text-md">
              Rp. {car.mcp_rent_per_day.toLocaleString("id-ID")} / Hari
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <CardDescription className="flex items-center gap-2">
              <Users size={18} />
              {car.mcp_capacity} Orang
            </CardDescription>
            <CardDescription className="flex items-center gap-2">
              <Settings size={18} />
              {car.mcp_transmission}
            </CardDescription>
            <CardDescription className="flex items-center gap-2">
              <Calendar size={18} />
              Tahun {car.mcp_year}
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full rounded-none"
              onClick={() => {
                navigate(
                  `/detail-mobil/${car.mcp_manufacture}/${car.mcp_model}/${car.mcp_uuid}`
                );
              }}
            >
              Detail Mobil
            </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default CarProducts;
