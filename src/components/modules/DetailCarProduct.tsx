import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ICars } from "@/types/res";
import { Calendar, Settings, Users } from "lucide-react";

const DetailCarProduct = ({ car }: { car: ICars }) => {
  return (
    <div className="flex md:flex-row flex-col gap-4 md:pb-0 pb-10">
      <div className="w-full border shadow rounded-xl p-6 border-zinc-200 h-full">
        <h4 className="font-bold mb-4">Deskripsi Mobil</h4>
        <p className="text-sm text-[#8A8A8A]">{car?.mcp_description}</p>
      </div>
      <Card className="max-w-[405px] w-full">
        <div className="flex justify-center p-4">
          <img
            src={car?.mcp_image_url}
            alt={car?.mcp_model}
            className="object-cover max-w-[300px] w-full h-[160px]"
          />
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-light">
            {car?.mcp_manufacture}
          </CardTitle>
          <CardTitle className="text-md">{car?.mcp_model}</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-2">
          <CardDescription className="flex items-center gap-2">
            <Users size={18} />
            {car?.mcp_capacity} Orang
          </CardDescription>
          <CardDescription className="flex items-center gap-2">
            <Settings size={18} />
            {car?.mcp_transmission}
          </CardDescription>
          <CardDescription className="flex items-center gap-2">
            <Calendar size={18} />
            Tahun {car?.mcp_year}
          </CardDescription>
        </CardContent>
        <CardFooter className="justify-between items-center text-sm">
          <p className="font-light">Total</p>
          <p className="font-bold">
            Rp {car?.mcp_rent_per_day.toLocaleString("id-ID")}
          </p>
        </CardFooter>
        <CardFooter>
          <Button variant="default" className="w-full rounded-[2px]">
            Lanjutkan Pembayaran
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DetailCarProduct;
