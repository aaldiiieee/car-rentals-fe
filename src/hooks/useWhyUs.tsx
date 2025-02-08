import { useQuery } from "@tanstack/react-query";
import { getWhyUs } from "@/services/whyUs.service";

export const useWhyUs = () => {
  const whyUsQuery = useQuery({
    queryKey: ["whyUs"],
    queryFn: getWhyUs,
    staleTime: 60 * 60 * 1000, // 1 hour
  });

  return whyUsQuery;
};
