/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { Skeleton } from "@/components/ui/skeleton"

const CarProducts = ({ data, isLoading }: { data: ICars[], isLoading: boolean }) => {
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <>
        {[...Array(3)].map((_: any, index: number) => (
          <div className="flex flex-col space-y-3" key={index}>
            <Skeleton className="h-[125px] w-full rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>
          </div>
        ))}
      </>
    )
  }

  return (
    <>
      {data?.map((car: ICars) => (
        <Card key={car.mcp_uuid}>
          <div className="flex justify-center p-4">
            <img
              src={car.mcp_image_url}
              alt={car.mcp_model}
              className="max-w-[250px] max-h-[138px] w-full object-contain"
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
