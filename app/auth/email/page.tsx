"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react"; // Add this import

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  // password: z
  //   .string()
  //   .min(8, { message: "Password must be at least 8 characters" }),
});

const AuthEmail = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  const [showPassword, setShowPassword] = useState(false);

  function onSubmit(values: z.infer<typeof formSchema>) {
    const promise = () =>
      axios
        .post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/users/validation`,
          values,
          {
            headers: {
              'Access-Control-Allow-Origin': 'http://localhost:3000',
            },
          }
        )
        .then((res) => res.data)
        .catch((err) => {
          throw err.response?.data || new Error("Sign-up failed");
        });

    toast.promise(promise, {
      loading: "Checking account...",
      success: () => {
        toast.success("Account found!");
        return "Account found!";
      },
      error: (err) => `Error: ${err.message || "Something went wrong"}`,
    });
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Toaster />
      <div className="flex flex-col items-center justify-center gap-y-16 px-[80px] w-[500px] py-[90px] text-center border border-slate-200 rounded-md">
        <div className="flex flex-col items-center justify-center gap-y-2">
          <p className="text-black font-light">Welcome to</p>
          <h1 className="text-3xl font-bold">Collabute</h1>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-3 w-full"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex flex-col items-start justify-center">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="flex flex-col items-start justify-center">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative w-full">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        {...field}
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
            <Button variant="secondary" type="submit" className="w-full">
              Continue
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AuthEmail;
