import { ButtonHTMLAttributes } from "react";
import { cn } from "@/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      className={cn(
        "mt-300 flex flex-row text-preset-3 font-bold text-secondary-900 gap-150 bg-primary h-14 rounded-full justify-center items-center px-500 hover:bg-opacity-50 transition cursor-pointer md:max-w-[314px] md:mt-500",
        className
      )}
    >
      {children}
    </button>
  );
}
export default Button;
