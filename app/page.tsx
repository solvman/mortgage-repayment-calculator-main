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
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  calculateRepayments,
  formatFromCurrency,
  formatToCurrency,
} from "@/utils";

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
    control,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      amount: "",
      term: "",
      interestRate: "",
      repayment: "repayment",
    },
  });

  useEffect(() => {
    setFocus("amount");
    console.log("Focus set to amount input");
  }, [setFocus]);

  function onSubmit(data: FormData) {
    const { amount, term, interestRate, repayment } = data;
    const { monthlyPayment, totalRepayment } = calculateRepayments(
      Number(formatFromCurrency(amount as string)),
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
            <Controller
              name="amount"
              control={control}
              rules={{
                required: ERROR_REQUIRED,
                maxLength: { value: 11, message: "Maximum 9 digits allowed" },
              }}
              render={({ field: { value, onChange, ref } }) => (
                <Input
                  ref={ref}
                  decoratorLabel="$"
                  label="Mortgage Amount"
                  type="text"
                  value={value as string}
                  onChange={(event) =>
                    onChange(formatToCurrency(event.target.value))
                  }
                  error={errors.amount?.message}
                />
              )}
            />
            <div className="flex flex-col md:flex-row gap-6">
              <Input
                decoratorLabel="years"
                decoratorPosition="right"
                label="Mortgage Term"
                type="number"
                {...register("term", {
                  required: ERROR_REQUIRED,
                  min: { value: 1, message: "Minimum 1 year allowed" },
                  max: { value: 100, message: "Maximum 100 years allowed" },
                })}
                error={errors.term?.message}
              />
              <Input
                decoratorLabel="%"
                decoratorPosition="right"
                label="Interest Rate"
                type="number"
                step={0.01}
                {...register("interestRate", {
                  required: ERROR_REQUIRED,
                  min: { value: 0, message: "Minimum 0% allowed" },
                  max: { value: 100, message: "Maximum 100% allowed" },
                })}
                error={errors.interestRate?.message}
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
            <Button type="submit" disabled={isSubmitting}>
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
