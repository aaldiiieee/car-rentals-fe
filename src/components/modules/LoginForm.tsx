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

type LoginFormValues = {
  mu_email: string;
  mu_password: string;
};

const LoginForm = () => {
  const { loginMutation } = useAuth();
  const { signIn } = useSession() as IAuthContext;
  
  const form = useForm<LoginFormValues>({
    defaultValues: {
      mu_email: "",
      mu_password: "",
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    loginMutation.mutate(data, {
      onSuccess: (response) => {
        console.log(response.data)
        console.log(response.token)
        signIn?.(response.data, response.token);
      }
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-[370px] w-full flex flex-col gap-5">
        <FormField
          control={form.control}
          name="mu_email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
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
                <Input placeholder="shadcn" {...field} type="password" />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" variant="secondary">Submit</Button>
      </form>
    </Form>
  );
};

export default LoginForm;
