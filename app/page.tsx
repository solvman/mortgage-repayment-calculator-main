import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <h1 className="sr-only">
        Frontend mentor solution for Mortgage repayment calculator project
      </h1>
      <article>
        {/* Calculator */}
        <section>
          <header>
            <h2>Mortgage Calculator</h2>
            <button>Clear All</button>
          </header>
          <form>
            <div>
              <label htmlFor="amount">Mortgage Amount</label>
              <input type="number" id="amount" />
            </div>
            <div>
              <label htmlFor="term">Mortgage Term</label>
              <input type="number" id="term" />
            </div>
            <div>
              <label htmlFor="interest">Interest Rate</label>
              <input type="number" id="interest" />
            </div>
            <div>
              <div>
                <label htmlFor="repayment">Repayment</label>
                <input type="radio" id="repayment" name="mortgage-type" />
              </div>
              <div>
                <label htmlFor="interest-only">Interest Only</label>
                <input type="radio" id="interest-only" name="mortgage-type" />
              </div>
            </div>
            <button>
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
        <section>
          {/* Empty Results */}
          <Image
            src="/images/illustration-empty.svg"
            alt="Abstract calculator"
            width={192}
            height={192}
          />
          <h2>Results shown here</h2>
          <p>
            Complete the form and click “calculate repayments” to see what your
            monthly repayments would be.
          </p>
          {/* Results */}
          <h2>Your results</h2>
          <p>
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click “calculate
            repayments” again.
          </p>
          <div>
            <p>Your monthly repayments</p>
            <p>$1234</p>
            {/* Divider */}
            <p>Total you`&apos;`ll repay over the term</p>
            <p>$123456</p>
          </div>
        </section>
      </article>
    </main>
  );
}
