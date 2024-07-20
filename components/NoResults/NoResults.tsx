import Image from "next/image";

function NoResults() {
  return (
    <div className="flex flex-col gap-200 text-center items-center lg:h-full lg:justify-center md:gap-500">
      <Image
        src="/images/illustration-empty.svg"
        alt="Abstract calculator"
        width={192}
        height={192}
        priority={true}
      />
      <h2 className="text-preset-2 font-bold text-white">Results shown here</h2>
      <p className="text-preset-4 text-secondary-300">
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </p>
    </div>
  );
}
export default NoResults;
