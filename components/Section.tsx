import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  container?: boolean;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, container = true, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("py-20 md:py-32 outline-none", className)}
        {...props}
      >
        <div className={cn(container && "container")}>{children}</div>
      </section>
    );
  }
);

Section.displayName = "Section";

export { Section };
