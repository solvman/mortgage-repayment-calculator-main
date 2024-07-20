"use client";

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
import { useState } from "react";
import { useForm } from "react-hook-form";
import { calculateRepayments } from "@/utils";

const ERROR_REQUIRED = "This field is required";

type FormData = {
  amount: string | null;
  term: string | null;
  interestRate: string | null;
  repayment: "repayment" | "interestOnly";
};

export default function Home() {
  const [result, setResult] = useState(false);
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [totalRepayment, setTotalRepayment] = useState("");

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      amount: "",
      term: "",
      interestRate: "",
      repayment: "repayment",
    },
  });

  function onSubmit(data: FormData) {
    const { amount, term, interestRate, repayment } = data;
    const { monthlyPayment, totalRepayment } = calculateRepayments(
      Number(amount),
      Number(term),
      Number(interestRate),
      repayment
    );

    // US currency format
    const currency = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    setMonthlyPayment(currency.format(monthlyPayment));
    setTotalRepayment(currency.format(totalRepayment));
    setResult(true);
  }

  function onClear() {
    reset();
    setResult(false);
  }

  return (
    <main className="bg-secondary-100 lg:h-screen min-h-[606px] lg:flex lg:justify-center lg:items-center md:p-500">
      <h1 className="sr-only">
        Frontend mentor solution for Mortgage repayment calculator project
      </h1>
      <Card>
        {/* Calculator */}
        <Section className="bg-white">
          <Header onClear={onClear} />
          <form
            className="flex flex-col gap-300"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              decoratorLabel="$"
              label="Mortgage Amount"
              {...register("amount", {
                required: true,
              })}
              error={errors.amount && ERROR_REQUIRED}
            />
            <div className="flex flex-col md:flex-row gap-6">
              <Input
                decoratorLabel="years"
                decoratorPosition="right"
                label="Mortgage Term"
                {...register("term", {
                  required: true,
                })}
                error={errors.term && ERROR_REQUIRED}
              />
              <Input
                decoratorLabel="%"
                decoratorPosition="right"
                label="Interest Rate"
                step={0.01}
                {...register("interestRate", { required: true })}
                error={errors.interestRate && ERROR_REQUIRED}
              />
            </div>

            <RadioGroup legendLabel="Mortgage Type">
              <Radio
                {...register("repayment")}
                value={"repayment"}
                label="Repayment"
              />
              <Radio
                {...register("repayment")}
                value={"interestOnly"}
                label="Interest Only"
              />
            </RadioGroup>
            <Button type="submit">
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
          {result ? (
            <Results
              monthlyPayment={monthlyPayment}
              totalRepayment={totalRepayment}
            />
          ) : (
            <NoResults />
          )}
        </Section>
      </Card>
    </main>
  );
}
