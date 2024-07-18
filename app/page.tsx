import Input from "@/components/Input";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <h1 className="sr-only">
        Frontend mentor solution for Mortgage repayment calculator project
      </h1>
      <article>
        {/* Calculator */}
        <section className="p-300">
          <header className="flex flex-col gap-100 mb-300">
            <h2 className="text-preset-2 font-bold">Mortgage Calculator</h2>
            <button className="text-preset-4 underline text-left text-secondary-700">
              Clear All
            </button>
          </header>
          <form className="flex flex-col gap-300">
            <Input variant="amount">Mortgage Amount</Input>
            <Input variant="term">Mortgage Term</Input>
            <Input variant="rate">Interest Rate</Input>
            <fieldset className="flex flex-col gap-200">
              <legend className="block text-preset-4 text-secondary-700 mb-200">
                Mortgage Type
              </legend>
              <div className="flex flex-row border border-secondary-500 rounded-sm h-12 items-center px-200 gap-200">
                <input
                  type="radio"
                  id="repayment"
                  name="mortgage-type"
                  className="w-4 h-4"
                />
                <label htmlFor="repayment" className="text-preset-3 font-bold">
                  Repayment
                </label>
              </div>
              <div className="flex flex-row border border-secondary-500 rounded-sm h-12 items-center px-200 gap-200">
                <input
                  type="radio"
                  id="interest-only"
                  name="mortgage-type"
                  className="w-4 h-4"
                />
                <label
                  htmlFor="interest-only"
                  className="text-preset-3 font-bold"
                >
                  Interest Only
                </label>
              </div>
            </fieldset>
            <button className="mt-300 flex flex-row text-preset-3 font-bold text-secondary-900 gap-150 bg-primary h-14 rounded-full justify-center items-center px-500">
              <Image
                src="/images/icon-calculator.svg"
                width={24}
                height={24}
                alt="Calculator Icon"
              />
              Calculate Repayments
            </button>
          </form>
        </section>
        {/* Results */}
        <section className="p-300 bg-secondary-900 text-center">
          {/* Empty Results */}
          <Image
            src="/images/illustration-empty.svg"
            alt="Abstract calculator"
            width={192}
            height={192}
            priority={true}
            className="mx-auto"
          />
          <h2 className="text-preset-2 font-bold text-white">
            Results shown here
          </h2>
          <p className="text-preset-4 text-secondary-300">
            Complete the form and click “calculate repayments” to see what your
            monthly repayments would be.
          </p>
          {/* Results */}
          <h2 className="text-preset-2 font-bold text-white mb-200">
            Your results
          </h2>
          <p className="text-preset-4 text-secondary-300 mb-300">
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click “calculate
            repayments” again.
          </p>
          <div className="p-300 bg-black/25 text-left border-t-4 border-primary rounded-lg">
            <p className="text-preset-4 text-secondary-300">
              Your monthly repayments
            </p>
            <p className="text-preset-1 text-primary font-bold">$1234</p>
            <hr className="h-px bg-divider border-0 my-200" />
            <p className="text-preset-4 text-secondary-300">
              Total you&apos;ll repay over the term
            </p>
            <p className="text-preset-2 text-white font-bold mt-2">$123456</p>
          </div>
        </section>
      </article>
    </main>
  );
}
