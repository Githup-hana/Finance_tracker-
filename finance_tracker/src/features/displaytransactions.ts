import { getTransactions } from "../main";

function displayData(): void {
  const transactionList = document.getElementById("transaction-list");
  if (transactionList) {
    const transactions = getTransactions();

    transactionList.innerHTML = transactions
      .map((transaction) => {
        return `
          <li class="p-5 mb-4 border-2 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${
            transaction.type === "income"
              ? "bg-green-50 border-green-300 hover:bg-green-100"
              : "bg-red-50 border-red-300 hover:bg-red-100"
          }">
            <div class="flex justify-between items-start mb-3">
              <h3 class="font-semibold text-xl text-gray-800">${transaction.description}</h3>
              <span class="text-sm font-medium text-gray-500">${transaction.id}</span>
            </div>
            <p class="text-sm text-gray-600"><strong>Type:</strong> ${transaction.type}</p>
            <p class="text-sm text-gray-600"><strong>Amount:</strong> ${transaction.amount}€</p>
          </li>`;
      })
      .join("");
  }
}

export { displayData };
