import { cn } from "@/utils";
import { forwardRef, InputHTMLAttributes, Ref, useId } from "react";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "className"> {
  decoratorLabel?: string;
  decoratorPosition?: "left" | "right";
  label?: string;
  error?: string;
}

const Input = forwardRef(function Input(
  {
    decoratorLabel,
    decoratorPosition = "left",
    label,
    error,
    ...rest
  }: InputProps,
  ref: Ref<HTMLInputElement>
) {
  const id = useId();

  return (
    <label className="flex flex-col gap-150 text-preset-4 text-secondary-700 md:flex-1">
      <p>{label}</p>
      <div className="relative">
        <div
          className={cn(
            "group flex border border-secondary-500 rounded-sm overflow-hidden has-[:focus-visible]:border-primary transition cursor-pointer",
            {
              "flex-row-reverse": decoratorPosition === "right",
              "has-[:focus-visible]:border-error border-error": error,
            }
          )}
        >
          {decoratorLabel && (
            <span
              className={cn(
                "inline-flex items-center px-200 bg-secondary-100 text-preset-3 font-bold group-has-[:focus-visible]:bg-primary group-has-[:focus-visible]:text-secondary-900 transition",
                {
                  "group-has-[:focus-visible]:bg-error group-has-[:focus-visible]:text-white bg-error text-white":
                    error,
                }
              )}
            >
              {decoratorLabel}
            </span>
          )}
          <input
            id={id}
            className="w-full h-12 text-preset-3 font-bold text-secondary-900 px-200 border-none focus:ring-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            ref={ref}
            {...rest}
          />
        </div>
        {error && (
          <em className="absolute text-preset-5 not-italic left-0 -bottom-5 text-error">
            {error}
          </em>
        )}
      </div>
    </label>
  );
});

export default Input;
