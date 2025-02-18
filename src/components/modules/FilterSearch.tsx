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
import { useCarProducts } from "@/hooks/useCarProducts";
import getUniqueSortedValues from "@/utils/getUniqueSortedValues";

type FilterFormValues = {
  driverType: string;
  totalPassengers: string;
  transmission: string;
};

const FilterSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: cars } = useCarProducts();

  const driverType = searchParams.get("driverType");
  const totalPassengers = searchParams.get("totalPassengers");
  const transmission = searchParams.get("transmission");

  const existingParams =
    driverType === null && totalPassengers === null && transmission === null;
  const disabled = totalPassengers !== null;

  const { reset, setValue, getValues } = useForm<FilterFormValues>();

  const uniqueCapacities = getUniqueSortedValues(cars, "mcp_capacity");

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
      className={`grid grid-cols-1 ${
        existingParams ? "md:grid-cols-3" : "md:grid-cols-4"
      } items-center gap-4`}
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

      <Select
        onValueChange={(value) => {
          setValue("transmission", value);
          updateSearchParams();
        }}
        disabled={disabled}
      >
        <SelectTrigger>
          <SelectValue placeholder="Pilih Tipe Transmisi" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="MANUAL">Manual</SelectItem>
            <SelectItem value="MATIC">Matic</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select
        onValueChange={(value) => {
          setValue("totalPassengers", value);
          updateSearchParams();
        }}
        disabled={disabled}
      >
        <SelectTrigger>
          <SelectValue placeholder="Jumlah Penumpang">
            {totalPassengers
              ? `${totalPassengers} Penumpang`
              : "Jumlah Penumpang"}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {uniqueCapacities.map((capacity) => (
              <SelectItem key={capacity?.toString()} value={capacity as string}>
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
