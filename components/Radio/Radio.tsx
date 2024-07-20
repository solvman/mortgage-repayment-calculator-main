import { useId } from "react";

type RadioProps = {
  name: string;
  label: string;
};

function Radio({ name, label }: RadioProps) {
  const id = useId();

  return (
    <label className="has-[:checked]:border-primary has-[:checked]:bg-primary/15 flex flex-row border border-secondary-500 rounded-sm h-12 items-center px-200 gap-200">
      <input
        type="radio"
        id={`${id}-interest`}
        name={name}
        className="w-4 h-4 form-radio checked:bg-primary text-primary focus:ring-1 focus:ring-primary"
      />
      <span className="text-preset-3 font-bold">{label}</span>
    </label>
  );
}
export default Radio;
