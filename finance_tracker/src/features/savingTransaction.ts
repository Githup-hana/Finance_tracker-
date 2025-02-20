import { getTransactions, Transaction } from "../main";


function savingTransaction() {
  const form = document.getElementById("transaction-form") as HTMLFormElement;
  const typeInput = document.getElementById(
    "type-of-transactions"
  ) as HTMLSelectElement;
  const amountInput = document.getElementById("amount") as HTMLInputElement;
  const descInput = document.getElementById("description") as HTMLInputElement;

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

export { savingTransaction };
