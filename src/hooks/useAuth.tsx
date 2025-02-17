import { useMutation } from "@tanstack/react-query";
import { login, register } from "@/services/auth.service";
import { ILoginPayload, IRegisterPayload } from "@/types/payload";

export const useAuth = () => {
  const loginMutation = useMutation({
    mutationFn: async (data: ILoginPayload) => {
      const response = await login(data);
      return response;
    },
  });

  const registerMutation = useMutation({
    mutationFn: async (data: IRegisterPayload) => {
      const response = await register(data);
      return response;
    },
  });

  return { loginMutation, registerMutation };
};
