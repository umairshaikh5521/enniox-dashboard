"use client";

import * as z from "zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { RegisterSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import { toast } from "@/components/ui/use-toast";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { register } from "@/actions/register";

export const RegisterForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
      companyName: "",
      contactNumber: "",
      industry: "",
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      register(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };

  return (
    <CardWrapper
      headerLabel="Create an account"
      backButtonLabel="Already have an account?"
      backButtonHref="/auth/login"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="Your Name"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Comapny</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="Company Name"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="john.doe@example.com"
                        type="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="******"
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <FormField
                control={form.control}
                name="contactNumber"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Contact Number</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="Phone Number"
                        type="contactNumber"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="industry"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Industry</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Aerospace">Aerospace</SelectItem>
                        <SelectItem value="Agriculture">Agriculture</SelectItem>
                        <SelectItem value="Automotive">Automotive</SelectItem>
                        <SelectItem value="Aviation & Aerospace">
                          Aviation & Aerospace
                        </SelectItem>
                        <SelectItem value="Construction">
                          Construction
                        </SelectItem>
                        <SelectItem value="Consulting">Consulting</SelectItem>
                        <SelectItem value="Consumer Electronics">
                          Consumer Electronics
                        </SelectItem>
                        <SelectItem value="Consumer Products">
                          Consumer Products
                        </SelectItem>
                        <SelectItem value="Defense">Defense</SelectItem>
                        <SelectItem value="Design">Design</SelectItem>
                        <SelectItem value="Electrical/Electronic Manufacturing">
                          Electrical/Electronic Manufacturing
                        </SelectItem>
                        <SelectItem value="Energy">Energy</SelectItem>
                        <SelectItem value="EV">EV</SelectItem>
                        <SelectItem value="FMCG">FMCG</SelectItem>
                        <SelectItem value="General Engineering">
                          General Engineering
                        </SelectItem>
                        <SelectItem value="Health Care">Health Care</SelectItem>
                        <SelectItem value="HVAC">HVAC</SelectItem>
                        <SelectItem value="Import and Export">
                          Import and Export
                        </SelectItem>
                        <SelectItem value="Industrial Automation">
                          Industrial Automation
                        </SelectItem>
                        <SelectItem value="Logistics and Supply Chain">
                          Logistics and Supply Chain
                        </SelectItem>
                        <SelectItem value="Machinery">Machinery</SelectItem>
                        <SelectItem value="Mechanical or Industrial Engineering">
                          Mechanical or Industrial Engineering
                        </SelectItem>
                        <SelectItem value="Medical Devices">
                          Medical Devices
                        </SelectItem>
                        <SelectItem value="Nuclear">Nuclear</SelectItem>
                        <SelectItem value="Oil & Energy">
                          Oil & Energy
                        </SelectItem>
                        <SelectItem value="Outsourcing/Offshoring">
                          Outsourcing/Offshoring
                        </SelectItem>
                        <SelectItem value="Packaging and Containers">
                          Packaging and Containers
                        </SelectItem>
                        <SelectItem value="Pharmaceuticals">
                          Pharmaceuticals
                        </SelectItem>
                        <SelectItem value="Power">Power</SelectItem>
                        <SelectItem value="Railways">Railways</SelectItem>
                        <SelectItem value="Research">Research</SelectItem>
                        <SelectItem value="Solar">Solar</SelectItem>
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button
            disabled={isPending}
            type="submit"
            size={"lg"}
            className="w-full"
          >
            Create an account
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
