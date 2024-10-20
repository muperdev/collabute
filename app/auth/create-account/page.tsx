"use client";

import { useState } from "react";
import Image from "next/image";
import { useEmail } from "@/app/providers/EmailContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Toaster } from "sonner";
import { Eye, EyeOff, Building, Code2, Loader2 } from "lucide-react";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import axios from "axios";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import { setCookie } from "cookies-next";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  type: z.enum(["developer", "startup"]),
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters"),
  phoneNumber: z.string().optional().nullable(),
  developerFields: z
    .object({
      primaryRole: z
        .enum([
          "Frontend Developer",
          "Backend Developer",
          "Full Stack Developer",
          "Mobile Developer",
          "DevOps Engineer",
          "Data Scientist",
          "UI/UX Designer",
          "QA Engineer",
          "Other",
        ])
        .optional()
        .nullable(),
    })
    .optional(),
  startupFields: z
    .object({
      companyName: z
        .string()
        .min(2, "Company name must be at least 2 characters")
        .nullable(),
      teamSize: z
        .enum(["1-10", "10-50", "50-100", "100+"])
        .optional()
        .nullable(),
    })
    .optional(),
});

const CreateAccount = () => {
  const { email, setEmail } = useEmail();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: email || "",
      type: "developer",
    },
  });

  const accountType = form.watch("type");
  const router = useRouter();
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    toast.promise(
      axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/users/create`, values),
      {
        loading: "Creating your account...",
        success: (response) => {
          setEmail(values.email);
          router.push(`/auth/password`);
          setIsLoading(false);
          return "Account created successfully. Please log in.";
        },
        error: (error) => {
          setIsLoading(false);
          if (axios.isAxiosError(error) && error.response) {
            return `Error: ${
              error.response.data.message || "Failed to create account"
            }`;
          }
          return "An unexpected error occurred. Please try again.";
        },
      }
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Toaster />
      <div className="flex flex-col items-center justify-center gap-y-8 px-8 w-full max-w-2xl py-12 border border-slate-200 rounded-md text-left">
        <div className="flex flex-col items-center justify-center gap-y-2">
          <Image src="/logo.svg" alt="logo" width={66} height={66} />
          <h1 className="text-3xl font-bold">Collabute</h1>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem className="col-span-full">
                    <FormLabel>Account Type</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="grid grid-cols-2 gap-4"
                      >
                        <FormItem>
                          <FormControl>
                            <RadioGroupItem
                              value="developer"
                              className="peer sr-only"
                              id="developer"
                            />
                          </FormControl>
                          <Label
                            htmlFor="developer"
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover py-2 px-4 peer-data-[state=checked]:border-black [&:has([data-state=checked])]:border-black"
                          >
                            <Code2 className="mb-2 h-6 w-6" />
                            <div className="text-center">Developer</div>
                          </Label>
                        </FormItem>
                        <FormItem>
                          <FormControl>
                            <RadioGroupItem
                              value="startup"
                              className="peer sr-only"
                              id="startup"
                            />
                          </FormControl>
                          <Label
                            htmlFor="startup"
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover py-2 px-4 peer-data-[state=checked]:border-black [&:has([data-state=checked])]:border-black"
                          >
                            <Building className="mb-2 h-6 w-6" />
                            <div className="text-center">Startup</div>
                          </Label>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          {...field}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4 text-gray-400" />
                          ) : (
                            <Eye className="h-4 w-4 text-gray-400" />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number (Optional)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your phone number"
                        {...field}
                        value={field.value ?? ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {accountType === "developer" && (
                <>
                  <FormField
                    control={form.control}
                    name="developerFields.primaryRole"
                    render={({ field }) => (
                      <FormItem className="col-span-full">
                        <FormLabel>Primary Role (Optional)</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field?.value || ""}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your primary role" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {[
                              "Frontend Developer",
                              "Backend Developer",
                              "Full Stack Developer",
                              "Mobile Developer",
                              "DevOps Engineer",
                              "Data Scientist",
                              "UI/UX Designer",
                              "QA Engineer",
                              "Other",
                            ].map((role) => (
                              <SelectItem key={role} value={role}>
                                {role}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}
              {accountType === "startup" && (
                <>
                  <FormField
                    control={form.control}
                    name="startupFields.companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your company name"
                            {...field}
                            value={field.value ?? ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="startupFields.teamSize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Size</FormLabel>
                        <FormControl>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                            {[
                              { label: "1-10", value: "1-10" },
                              { label: "10-50", value: "10-50" },
                              { label: "50-100", value: "50-100" },
                              { label: "100+", value: "100+" },
                            ].map((option) => (
                              <div
                                key={option.value}
                                className={cn(
                                  "flex items-center justify-center px-2 py-[17px] text-sm rounded-md border cursor-pointer",
                                  field.value === option.value
                                    ? "border-black border-2"
                                    : "border-muted bg-popover"
                                )}
                                onClick={() => field.onChange(option.value)}
                              >
                                {option.label}
                              </div>
                            ))}
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}
            </div>
            <Button type="submit" className="w-full mt-6" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating Account...
                </>
              ) : (
                "Create Account"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreateAccount;
