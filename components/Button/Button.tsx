import Image from "next/image";

type ButtonProps = {
  children: React.ReactNode;
};

function Button({ children }: ButtonProps) {
  return (
    <button className="mt-300 flex flex-row text-preset-3 font-bold text-secondary-900 gap-150 bg-primary h-14 rounded-full justify-center items-center px-500 hover:bg-opacity-50 focus:bg-opacity-50 focus-visible:bg-opacity-50 focus-visible:border-primary focus-visible:border outline-none transition cursor-pointer md:max-w-[314px] md:mt-500">
      {children}
    </button>
  );
}
export default Button;
