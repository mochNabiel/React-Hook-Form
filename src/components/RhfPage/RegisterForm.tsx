"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form";

import RegistrationFormSchema from "@/models/RegistrationFormSchema";

const RegisterForm = () => {
  const form = useForm<z.infer<typeof RegistrationFormSchema>>({
    resolver: zodResolver(RegistrationFormSchema),
  });
  const { errors } = form.formState;

  const onSubmit = (data: z.infer<typeof RegistrationFormSchema>) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col w-full items-center justify-center gap-10">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-w-md w-full grow flex flex-col gap-5"
        >
          <FormField
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="name" className="text-slate-200">
                  Name
                </FormLabel>
                <FormControl>
                  <Input type="text" id="name" {...field} />
                </FormControl>
                {errors.name && (
                  <FormMessage className="text-red-600">
                    {errors.name?.message}
                  </FormMessage>
                )}
              </FormItem>
            )}
          />
          <FormField
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="email" className="text-slate-200">
                  Email
                </FormLabel>
                <FormControl>
                  <Input type="email" id="email" {...field} />
                </FormControl>
                {errors.email && (
                  <FormMessage className="text-red-600">
                    {errors.email?.message}
                  </FormMessage>
                )}
              </FormItem>
            )}
          />
          <FormField
            name="dob"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="dob" className="text-slate-200">
                  Date of Birth
                </FormLabel>
                <FormControl>
                  <Input type="date" id="dob" {...field} />
                </FormControl>
                {errors.dob && (
                  <FormMessage className="text-red-600">
                    {errors.dob?.message}
                  </FormMessage>
                )}
              </FormItem>
            )}
          />
          <FormField
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="age" className="text-slate-200">
                  Age
                </FormLabel>
                <FormControl>
                  <Input type="number" id="age" {...field} />
                </FormControl>
                {errors.age && (
                  <FormMessage className="text-red-600">
                    {errors.age?.message}
                  </FormMessage>
                )}
              </FormItem>
            )}
          />
          <FormField
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="phoneNumber" className="text-slate-200">
                  Phone Number
                </FormLabel>
                <FormControl>
                  <Input type="number" id="phoneNumber" {...field} />
                </FormControl>
                {errors.phoneNumber && (
                  <FormMessage className="text-red-600">
                    {errors.phoneNumber?.message}
                  </FormMessage>
                )}
              </FormItem>
            )}
          />
          <FormField
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="password" className="text-slate-200">
                  Password
                </FormLabel>
                <FormControl>
                  <Input type="password" id="password" {...field} />
                </FormControl>
                {errors.password && (
                  <FormMessage className="text-red-600">
                    {errors.password?.message}
                  </FormMessage>
                )}
              </FormItem>
            )}
          />
          
          <FormField
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="confirmPassword" className="text-slate-200">
                  confirmPassword
                </FormLabel>
                <FormControl>
                  <Input type="confirmPassword" id="confirmPassword" {...field} />
                </FormControl>
                {errors.confirmPassword && (
                  <FormMessage className="text-red-600">
                    {errors.confirmPassword?.message}
                  </FormMessage>
                )}
              </FormItem>
            )}
          />
          
          <Button type="submit" className="mt-2">
            Register
          </Button>
        </form>
      </Form>
      <h2 className="text-slate-200">
        Watched Value : {JSON.stringify(form.watch())}
      </h2>
    </div>
  );
};

export default RegisterForm;
