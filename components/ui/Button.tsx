import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary: "bg-accent text-zinc-950 font-semibold hover:bg-accent/90 shadow-[0_0_15px_-5px_var(--accent)]",
      secondary: "bg-surface text-foreground border border-border-subtle hover:bg-white/5",
      ghost: "bg-transparent text-foreground/80 hover:bg-white/5 hover:text-foreground",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-xs",
      md: "px-5 py-2.5 text-sm",
      lg: "px-8 py-3.5 text-base font-medium",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-xl transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none font-sans",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
