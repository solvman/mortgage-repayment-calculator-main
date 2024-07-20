import { cn } from "@/utils";
import { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

function Section({ children, className, ...rest }: SectionProps) {
  return (
    <section className={cn("p-300 lg:w-1/2 md:p-500", className)} {...rest}>
      {children}
    </section>
  );
}
export default Section;
