import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center outline-2 outline-button outline-offset-1 gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0",
  {
    variants: {
      variant: {
        default: "bg-button text-text shadow-sm outline-button",
        destructive: "bg-destructive text-destructive-foreground shadow-xs hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-xl px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-2xl px-6 has-[>svg]:px-4",
        xl: "h-12 rounded-3xl px-8 has-[>svg]:px-5",
        "2xl": "h-14 rounded-3xl px-10 has-[>svg]:px-6",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size, className }),
        "relative overflow-hidden",
        "before:content-[''] before:absolute before:inset-0 before:w-full before:h-full before:bg-primary before:transform before:origin-left before:scale-x-0 before:transition-transform before:duration-300 before:ease-out",
        "transition-colors duration-300 ease-out",
        "text-[var(--color-text)]",
        "outline-[var(--color-button)]",
        "hover:text-foreground",
        "hover:outline-primary",
        "hover:bg-primary"

      )}
      {...props}
    >
      <span className="relative z-10">
        {props.children}
      </span>
    </Comp>
  );
}

export { Button, buttonVariants };