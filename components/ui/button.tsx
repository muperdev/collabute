"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        default: "bg-slate-900 text-slate-50 dark:bg-slate-50 dark:text-slate-900",
        destructive:
          "bg-red-500 text-slate-50 dark:bg-red-900 dark:text-slate-50",
        outline:
          "border border-slate-900 bg-transparent text-slate-900 hover:bg-slate-900 hover:text-white dark:border-slate-50 dark:text-slate-50 dark:hover:bg-slate-50 dark:hover:text-slate-900",
        secondary:
          "bg-slate-900 text-white hover:bg-slate-700 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200",
        link: "text-slate-900 underline-offset-4 dark:text-slate-50",
      },
      size: {
        default: "px-4 py-4",
        sm: "rounded-md px-3 py-4",
        lg: "rounded-md px-8 py-4",
        icon: "h-10 w-10 py-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
