import { cn } from "@/utils";
import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

function Card({ children, className, ...rest }: CardProps) {
  return (
    <article
      className={cn(
        "bg-white max-w-[1008px] flex flex-col lg:flex-row overflow-hidden md:rounded-3xl",
        className
      )}
      {...rest}
    >
      {children}
    </article>
  );
}
export default Card;
