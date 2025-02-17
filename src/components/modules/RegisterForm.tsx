import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router";
import { IRegisterPayload } from "@/types/payload";
import Stepper from "@/components/ui/stepper";

const steps = ["Account", "Data Diri", "Summary"];

const RegisterForm = () => {
  const { registerMutation } = useAuth();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const form = useForm<IRegisterPayload>({
    defaultValues: {
      mu_phone_number: "",
      mu_email: "",
      mu_password: "",
      mu_address: "",
      mu_province: "",
      mu_city: "",
      mu_district: "",
      mu_full_name: "",
    },
  });
  console.log(form.getValues());

  const onSubmit = (data: IRegisterPayload) => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      registerMutation.mutate(data, {
        onSuccess: () => navigate("/login"),
      });
    }
  };

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-5"
      >
        <Stepper steps={steps} currentStep={currentStep} />

        {currentStep === 0 && (
          <>
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
                    <Input
                      placeholder="Masukan password anda"
                      {...field}
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        {currentStep === 1 && (
          <>
            <FormField
              control={form.control}
              name="mu_full_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Lengkap</FormLabel>
                  <FormControl>
                    <Input placeholder="Masukan nama lengkap anda" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="mu_phone_number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nomor Telepon</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Masukan nomor telepon anda"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="mu_address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Alamat</FormLabel>
                  <FormControl>
                    <Input placeholder="Masukan alamat anda" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        {currentStep === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>Summary</CardTitle>
              <CardDescription>
                Nama Lengkap: {form.getValues("mu_full_name")}
              </CardDescription>
              <CardDescription>
                Nomor Telepon: {form.getValues("mu_phone_number")}
              </CardDescription>
              <CardDescription>Email: {form.getValues("mu_email")}</CardDescription>
              <CardDescription>
                Alamat: {form.getValues("mu_address")}
              </CardDescription>
            </CardHeader>
          </Card>
        )}

        <div className="flex justify-between gap-2">
          {currentStep > 0 && (
            <Button
              type="button"
              onClick={goBack}
              variant="secondary"
              className="w-full"
            >
              Back
            </Button>
          )}
          <Button type="submit" variant="secondary" className="w-full">
            {currentStep === steps.length - 1 ? "Submit" : "Next"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default RegisterForm;
