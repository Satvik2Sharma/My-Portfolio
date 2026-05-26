import * as React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glow?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, glow = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "glass rounded-2xl overflow-hidden glass-hover group",
          glow && "shadow-[0_0_30px_-15px_var(--accent)]",
          className
        )}
        {...props}
      >
        <div className="p-6 relative z-10">{children}</div>
        
        {/* Subtle radial gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    );
  }
);

Card.displayName = "Card";

export { Card };
