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
      <input
        type="number"
        id={id}
        className="w-full border border-secondary-500 rounded-sm h-12"
      />
    </div>
  );
}
export default Input;
