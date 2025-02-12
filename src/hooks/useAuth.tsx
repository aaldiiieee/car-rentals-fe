import { useMutation } from "@tanstack/react-query";
import { login } from "@/services/auth.service";
import { ILoginPayload } from "@/types/payload";

export const useAuth = () => {
  const loginMutation = useMutation({
    mutationFn: async (data: ILoginPayload) => {
      const response = await login(data);
      return response;
    },
  });

  return { loginMutation };
};
