import { useId } from "react";

interface InputProps {
  variant?: "amount" | "term" | "rate";
  children?: string;
}

function Input({ variant = "amount", children }: InputProps) {
  const id = useId();

  return (
    <div className="flex flex-col gap-150 text-preset-4 text-secondary-700">
      <label htmlFor={id}>{children}</label>
      <div className="flex border border-secondary-500 rounded-sm overflow-hidden">
        <span className="inline-flex items-center px-200 bg-secondary-100 text-preset-3 font-bold">
          $
        </span>
        <input
          type="number"
          id={id}
          className="flex-1 border-secondary-500 h-12 text-preset-3 font-bold text-secondary-900 px-200"
        />
      </div>
    </div>
  );
}
export default Input;
