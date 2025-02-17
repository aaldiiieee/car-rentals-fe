import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useSession } from "@/context/AuthContext";
import { IAuthContext } from "@/types/context";
import { useNavigate } from "react-router";
import { ILoginPayload } from "@/types/payload";

const LoginForm = () => {
  const { loginMutation } = useAuth();
  const { signIn } = useSession() as IAuthContext;
  const navigate = useNavigate();
  
  const form = useForm<ILoginPayload>({
    defaultValues: {
      mu_email: "",
      mu_password: "",
    },
  });

  const onSubmit = (data: ILoginPayload) => {
    loginMutation.mutate(data, {
      onSuccess: (response) => {
        signIn?.(response.data, response.token);
        navigate("/");
      },
      
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onError: (error: any) => {
        if (error.response?.data) {
          const errorData = error.response.data;
          alert(errorData.message);
        } else {
          alert('Terjadi kesalahan saat login');
        }
      },
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-5">
        <FormField
          control={form.control}
          name="mu_email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Masukan email anda" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="mu_password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Masukan password anda" {...field} type="password" />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" variant="secondary" disabled={loginMutation.status === "pending"}>Submit</Button>
      </form>
    </Form>
  );
};

export default LoginForm;
