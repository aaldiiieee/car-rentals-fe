import { useSearchParams } from "react-router";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { DatePickerWithRange } from "@/components/ui/date";
import { useCarProducts } from "@/hooks/useCarProducts";
import { ICars } from "@/types/res";

type FilterFormValues = {
  driverType: string;
  totalPassengers: string;
  date: string;
};

const FilterSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: cars } = useCarProducts();

  const driverType = searchParams.get("driverType");
  const totalPassengers = searchParams.get("totalPassengers");

  const existingParams = driverType === null && totalPassengers === null;
  const disabled = driverType !== null || totalPassengers !== null;

  const { handleSubmit, reset, setValue } =
    useForm<FilterFormValues>();

  const onSubmit = (data: FilterFormValues) => {
    const newParams = new URLSearchParams();
    Object.entries(data).forEach(([key, value]) => {
      if (value) {
        newParams.set(key, value);
      }
    });
    setSearchParams(newParams);
  };

  const handleReset = () => {
    reset();
    setSearchParams(new URLSearchParams());
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 md:grid-cols-4 items-center gap-4"
    >
      <Select onValueChange={(value) => setValue("driverType", value)} disabled={disabled}>
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

      {/* <Input
        type="date"
        placeholder="Pilih Tanggal"
        disabled={disabled}
        {...register("date")}
        className=""
      /> */}

      <DatePickerWithRange disabled={disabled} />

      <Select onValueChange={(value) => setValue("totalPassengers", value)} disabled={disabled}>
        <SelectTrigger>
          <SelectValue placeholder="Jumlah Penumpang" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {cars?.map((car: ICars) => (
              <SelectItem
                key={car.mcp_uuid}
                value={car.mcp_capacity.toString()}
              >
                {car.mcp_capacity} Penumpang
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      {existingParams ? (
        <Button type="submit" variant="default">
          Cari
        </Button>
      ) : (
        <Button type="button" onClick={handleReset} variant="destructive">
          Reset
        </Button>
      )}
    </form>
  );
};

export default FilterSearch;
