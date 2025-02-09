import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import { ICars } from "@/types/res";
import { Button } from "@/components/ui/button";
import { Users, Settings, Calendar } from "lucide-react";

const CarProducts = ({ data }: { data: ICars[] }) => {
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
            <Button className="w-full rounded-none">Sewa Mobil</Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default CarProducts;
