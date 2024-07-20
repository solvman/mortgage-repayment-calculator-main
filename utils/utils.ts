import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateRepayments(
  amount: number,
  term: number,
  interestRate: number,
  repayment: "repayment" | "interestOnly"
) {
  const monthlyInterestRate = interestRate / 12 / 100;
  const numberOfPayments = term * 12;
  const monthlyPayment =
    repayment === "repayment"
      ? (amount * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments))
      : amount * monthlyInterestRate;

  const totalRepayment =
    repayment === "repayment"
      ? monthlyPayment * numberOfPayments
      : monthlyPayment * numberOfPayments + amount;

  return { monthlyPayment, totalRepayment };
}
