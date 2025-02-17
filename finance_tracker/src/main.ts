import "./style.css";
interface Transaction {
  id: number;
  description: string;
  amount: number;
  type: "income" | "expense";
}
const form = document.getElementById("transaction-form") as HTMLFormElement;
const typeInput = document.getElementById(
  "type-of-transactions"
) as HTMLSelectElement;
const amountInput = document.getElementById("amount") as HTMLInputElement;
const descInput = document.getElementById("description") as HTMLInputElement;
const transactionList = document.getElementById("transaction-list");
const balanceDisplay = document.getElementById("balance");
const displayButton = document.getElementById("display-button");
const transactions: Transaction[] = JSON.parse(
  localStorage.getItem("transactions") || "[]"
);

function getTransactions(): Transaction[] {
  const data = localStorage.getItem("transactions");
  return data ? JSON.parse(data) : [];
}

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

function displayData(): void {
  if (transactionList) {
    transactionList.innerHTML = transactions
      .map((transaction) => {
        return `
            <li class="p-4 border rounded-lg shadow-md ${
              transaction.type === "income"
                ? "bg-green-100 border-green-500"
                : "bg-red-100 border-red-500"
            }">
              <h3 class="font-semibold text-lg">${transaction.description}</h3>
              <p class="text-sm"><strong>Type:</strong> ${transaction.type}</p>
              <p class="text-sm"><strong>Amount:</strong> ${
                transaction.amount
              }€</p>
              <p class="text-sm"><strong>Amount:</strong> ${transaction.id}</p>
            </li>`;
      })
      .join("");
  }
}
function displayBalance() {
  const balance = transactions.reduce(
    (sum, t) => (t.type === "income" ? sum + t.amount : sum - t.amount),
    0
  );
  if (balanceDisplay) {
    balanceDisplay.textContent = `${balance.toFixed(2)} €`;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  savingTransaction();
});
displayButton?.addEventListener("click", (e) => {
  e.preventDefault();
  displayData();
});

displayBalance();
