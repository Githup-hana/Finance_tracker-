import { getTransactions, Transaction } from "../main";
import { amountInput, descInput, form, typeInput } from "./data";

function savingTransaction() {
    const transactions: Transaction = {
      id: Date.now(),
      description: descInput.value,
      amount: parseFloat(amountInput.value),
      type: typeInput.value as "income" | "expense",
    };
    const existingTransactions = getTransactions();
    existingTransactions.push(transactions);
    const newTransaction = JSON.stringify(existingTransactions);
    localStorage.setItem("transactions", newTransaction);
    form.reset();
  }
  export {savingTransaction}