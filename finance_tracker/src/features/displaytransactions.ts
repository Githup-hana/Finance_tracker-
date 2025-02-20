import { getTransactions } from "../main";

function displayData(): void {
  const transactionList = document.getElementById("transaction-list");
  const filterSelect = document.getElementById("filter-description") as HTMLSelectElement;
  document.addEventListener("DOMContentLoaded", () => {
    const filterSelect = document.getElementById("filter-description") as HTMLSelectElement;
    if (filterSelect) {
      console.log(':', filterSelect.value); // Gibt den Wert des Selects aus
    }
  });

  if (transactionList) {
    const transactions = getTransactions();
    
   
    const selectedFilter = filterSelect?.value || ""; 
  
    const filteredTransactions = selectedFilter
      ? transactions.filter((transaction) =>
          transaction.description.toLowerCase() === selectedFilter.toLowerCase()
        )
      : transactions;

    
    if (filteredTransactions.length === 0) {
      transactionList.innerHTML = `<p class="text-center text-gray-500 mt-4">Keine Transaktionen gefunden.</p>`;
      return;
    }

   
    transactionList.innerHTML = filteredTransactions
      .map((transaction) => {
        return `
          <li class="flex justify-between items-center p-4 mb-2 border-b border-gray-300">
            <div class="flex items-center space-x-3">
              <span class="text-lg">
                ${getTransactionIcon(transaction.description)}
              </span>
              <div>
                <h3 class="text-gray-800 font-medium">${transaction.description}</h3>
                <p class="text-sm text-gray-500">${transaction.type === "income" ? "Einnahme" : "Ausgabe"}</p>
              </div>
            </div>
            <p class="text-lg font-semibold ${
              transaction.type === "income" ? "text-green-500" : "text-red-500"
            }">
              ${transaction.amount} €
            </p>
          </li>`;
      })
      .join("");
  }
}

function getTransactionIcon(description: string): string {
  const icons: { [key: string]: string } = {
    "Gehalt": "💰",
    "Miete": "🏠",
    "Lebensmittel": "🛒",
    "Freizeit": "🎉",
    "Sonstiges": "🔹",
    "Transport": "🚗",
    "Shopping": "🛍️",
    "Versicherung": "🛡️",
  };
  return icons[description] || "💳";
}

export { displayData };
