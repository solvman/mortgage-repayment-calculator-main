import Button from "@/components/Button";
import Card from "@/components/Card";
import Header from "@/components/Header";
import Input from "@/components/Input";
import NoResults from "@/components/NoResults";
import Radio from "@/components/Radio";
import RadioGroup from "@/components/RadioGroup";
import Results from "@/components/Results";
import Section from "@/components/Section";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-secondary-100 lg:h-screen min-h-[606px] lg:flex lg:justify-center lg:items-center md:p-500">
      <h1 className="sr-only">
        Frontend mentor solution for Mortgage repayment calculator project
      </h1>
      <Card>
        {/* Calculator */}
        <Section className="bg-white">
          <Header />
          <form className="flex flex-col gap-300">
            <Input decoratorLabel="$" label="Mortgage Amount" />
            <div className="flex flex-col md:flex-row gap-6">
              <Input
                decoratorLabel="years"
                decoratorPosition="right"
                label="Mortgage Term"
              />
              <Input
                decoratorLabel="%"
                decoratorPosition="right"
                label="Interest Rate"
              />
            </div>

            <RadioGroup legendLabel="Mortgage Type">
              <Radio name="repayment" label="Repayment" />
              <Radio name="repayment" label="Interest Only" />
            </RadioGroup>
            <Button>
              <Image
                src="/images/icon-calculator.svg"
                width={24}
                height={24}
                alt="Calculator Icon"
              />
              Calculate Repayments
            </Button>
          </form>
        </Section>
        {/* Results */}
        <Section className="bg-secondary-900 lg:rounded-bl-[80px]">
          {true ? (
            <NoResults />
          ) : (
            <Results monthlyPayment={1000} totalRepayment={323000} />
          )}
        </Section>
      </Card>
    </main>
  );
}
