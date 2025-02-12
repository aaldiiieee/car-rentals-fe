import { useQuery, useMutation } from "@tanstack/react-query";
import {
  getTestimonials,
  addTestimonial,
} from "@/services/testimonials.service";
import { ITestimonialsPayload } from "@/types/payload";

export const useTestimonials = () => {
  const testimonialsQuery = useQuery({
    queryKey: ["testimonials"],
    queryFn: getTestimonials,
    staleTime: 60 * 60 * 5000, // 5 hour
  });

  const addTestimonialMutation = useMutation({
    mutationFn: async (data: ITestimonialsPayload) => {
      const response = await addTestimonial(data);
      return response;
    },
  });

  return { data: testimonialsQuery.data, addTestimonialMutation };
};
