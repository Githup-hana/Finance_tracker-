

import { transactions } from "../main";
import { balanceDisplay } from "./data";

interface Transaction {
  type: "income" | "expense";
  amount: number;
}

function displayBalance() {
  const balance = transactions.reduce(
    (sum: number, t: Transaction) => (t.type === "income" ? sum + t.amount : sum - t.amount),
    0
  );
  if (balanceDisplay) {
    balanceDisplay.textContent = `${balance.toFixed(2)} €`;
  }
}

export { displayBalance };