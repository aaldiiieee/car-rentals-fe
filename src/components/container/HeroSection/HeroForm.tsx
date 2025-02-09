import { useSearchParams } from "react-router";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const HeroForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFilterChange = (field: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(field, value);
    } else {
      newParams.delete(field);
    }
    setSearchParams(newParams);
  };

  return (
    <div className="bg-white rounded-[8px] shadow-heroForm p-4 absolute -bottom-8 left-1/2 lg:max-w-[1047px] max-w-[90%] w-full transform -translate-x-1/2">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
        <Select onValueChange={(value) => handleFilterChange("driverType", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Pilih Tipe Driver" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="WITH_DRIVER">Dengan Supir</SelectItem>
              <SelectItem value="WITHOUT_DRIVER">Tanpa Supir</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <div className="relative">
          <input
            type="date"
            placeholder="Pilih Tanggal"
            onChange={(e) => console.log(e.target.value)}
            className="w-full border border-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        
        <div className="relative">
          <input
            type="text"
            placeholder="Jumlah Penumpang"
            value={searchParams.get("totalPassengers") || ""}
            onChange={(e) => handleFilterChange("totalPassengers", e.target.value)}
            className="w-full border border-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroForm;
