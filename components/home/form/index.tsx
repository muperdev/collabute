"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Toaster, toast } from "sonner";
import axios from "axios";

const UserTypes = [
  {
    value: "iam",
    label: "I am ...",
  },
  {
    value: "developer",
    label: "Developer",
  },
  {
    value: "startup",
    label: "Startup",
  },
];

const formSchema = z.object({
  email: z
    .string()
    .min(2, { message: "you need to fill this field champ." })
    .email("This is not a valid email hommie."),
  fullName: z
    .string()
    .min(2, { message: "your name isn't that short is it? :-)." }),
  userType: z.enum(["iam", "developer", "startup"]),
});

const EarlyBirdForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      fullName: "",
      userType: "iam",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const promise = () =>
      axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/api/waitlists`, values)
        .then((res) => res.data)
        .catch((err) => {
          throw err.response.data;
        });

    toast.promise(promise, {
      loading: "Loading...",
      success: (data) => {
        return "your information has been submited";
      },
      error: "Error",
    });
  }

  return (
    <div className="rounded-xl p-3 shadow text-white w-[350px] z-10 mt-10">
      <Toaster />
      <h2 className="text-white text-4xl font-semibold w-full flex justify-center items-center mb-10">
        Join the Early Bird
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="userType"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="I am ..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent defaultValue={"iam"}>
                      {UserTypes.map(({ value, label }) => (
                        <SelectItem key={value} value={value}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            variant={"secondary"}
            className="hover:bg-blue-400 bg-white text-blue-400 hover:text-white w-full"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default EarlyBirdForm;
