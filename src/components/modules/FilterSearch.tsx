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
  const disabled = totalPassengers !== null;

  const { reset, setValue, getValues } =
    useForm<FilterFormValues>();

  const uniqueCapacities = Array.from(
    new Set(cars?.map((car: ICars) => car.mcp_capacity))
  ).sort((a, b) => (a as number) - (b as number));

  const uniqueRentTypes = Array.from(
    new Set(cars?.map((car: ICars) => car.mcp_rent_type))
  ).sort();
  console.log(uniqueRentTypes);

  // const onSubmit = (data: FilterFormValues) => {
  //   const newParams = new URLSearchParams();
  //   Object.entries(data).forEach(([key, value]) => {
  //     if (value) {
  //       newParams.set(key, value);
  //     }
  //   });
  //   setSearchParams(newParams);
  // };

  const updateSearchParams = () => {
    const data = getValues();
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
      // onSubmit={handleSubmit(onSubmit)}
      className={`grid grid-cols-1 ${existingParams ? "md:grid-cols-3" : "md:grid-cols-4"} items-center gap-4`}
    >
      <Select 
        onValueChange={(value) => {
          setValue("driverType", value);
          updateSearchParams();
        }} 
        disabled={disabled}
      >
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

      <DatePickerWithRange disabled={disabled} />

      <Select
        onValueChange={(value) => {
          setValue("totalPassengers", value);
          updateSearchParams();
        }}
        disabled={disabled}
      >
        <SelectTrigger>
          <SelectValue placeholder="Jumlah Penumpang">
            {totalPassengers ? `${totalPassengers} Penumpang` : "Jumlah Penumpang"}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
          {uniqueCapacities.map((capacity) => (
            <SelectItem
              key={capacity?.toString()}
              value={capacity as string}
            >
              {capacity as string} Penumpang
            </SelectItem>
          ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      {existingParams ? null : (
        <Button type="button" onClick={handleReset} variant="destructive">
          Reset
        </Button>
      )}
    </form>
  );
};

export default FilterSearch;
