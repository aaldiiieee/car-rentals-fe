import FilterSearch from "@/components/modules/FilterSearch";
import RegisterOrder from "@/components/modules/RegisterOrder";
import { useSearchParams } from "react-router";

const HeroForm = ({ form }: { form: "filter" | "register" }) => {
  const [searchParams] = useSearchParams();

  const driverType = searchParams.get("driverType");
  const totalPassengers = searchParams.get("totalPassengers");

  return (
    <div
      className={`bg-white rounded-[8px] shadow-heroForm p-4 absolute left-1/2 lg:max-w-[1200px] md:max-w-[687px] max-w-[90%] w-full transform -translate-x-1/2 ${
        form === "register" || (driverType !== null || totalPassengers !== null) ? "md:-bottom-8 -bottom-[14rem]" : "-bottom-8"
      }`}
    >
      {(driverType !== null || totalPassengers !== null) && <h5 className="font-bold mb-3">Pencarianmu</h5>}
      {form === "filter" && <FilterSearch />}
      {form === "register" && <RegisterOrder />}
    </div>
  );
};

export default HeroForm;
