import Radio from "../Radio/Radio";

type RadioGroupProps = {
  legendLabel: string;
  children: React.ReactNode;
};

function RadioGroup({ legendLabel, children }: RadioGroupProps) {
  return (
    <fieldset className="flex flex-col gap-200">
      <legend className="block text-preset-4 text-secondary-700 mb-200">
        {legendLabel}
      </legend>
      {children}
    </fieldset>
  );
}
export default RadioGroup;
