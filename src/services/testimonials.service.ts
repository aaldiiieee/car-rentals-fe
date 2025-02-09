import callApiUrl from "@/lib/axios";
import { ITestimonialsPayload } from "@/types/payload";

export const getTestimonials = async () => {
  const response = await callApiUrl.get("/testimonials/get-all-testimonials");
  return response.data.data;
};

export const addTestimonial = async (data: ITestimonialsPayload) => {
  const response = await callApiUrl.post("/testimonials/add-testimonial", data);
  return response.data.data;
}