import { forwardRef, InputHTMLAttributes, Ref, useId } from "react";

interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "className"> {
  name: string;
  label: string;
}

const Radio = forwardRef(function Radio(
  { name, label, ...rest }: RadioProps,
  ref: Ref<HTMLInputElement>
) {
  const id = useId();

  return (
    <label className="has-[:checked]:border-primary has-[:checked]:bg-primary/15 flex flex-row border border-secondary-500 rounded-sm h-12 items-center px-200 gap-200">
      <input
        type="radio"
        id={`${id}-interest`}
        name={name}
        className="w-4 h-4 form-radio checked:bg-primary text-primary focus:ring-1 focus:ring-primary"
        ref={ref}
        {...rest}
      />
      <span className="text-preset-3 font-bold">{label}</span>
    </label>
  );
});

export default Radio;
