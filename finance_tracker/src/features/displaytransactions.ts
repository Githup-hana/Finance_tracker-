import { getTransactions } from "../main";

function displayData(): void {
  const transactionList = document.getElementById("transaction-list");
  if (transactionList) {
    const transactions = getTransactions();

    transactionList.innerHTML = transactions
      .map((transaction) => {
        return `
              <li class="p-4 border rounded-lg shadow-md ${
                transaction.type === "income"
                  ? "bg-green-100 border-green-500"
                  : "bg-red-100 border-red-500"
              }">
                <h3 class="font-semibold text-lg">${
                  transaction.description
                }</h3>
                <p class="text-sm"><strong>Type:</strong> ${
                  transaction.type
                }</p>
                <p class="text-sm"><strong>Amount:</strong> ${
                  transaction.amount
                }€</p>
                <p class="text-sm"><strong>Amount:</strong> ${
                  transaction.id
                }</p>
              </li>`;
      })
      .join("");
  }
}

export { displayData };
