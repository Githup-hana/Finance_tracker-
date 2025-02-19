
  const form = document.getElementById("transaction-form") as HTMLFormElement;
  const typeInput = document.getElementById(
    "type-of-transactions"
  ) as HTMLSelectElement;
  const amountInput = document.getElementById("amount") as HTMLInputElement;
  const descInput = document.getElementById("description") as HTMLInputElement;
  const transactionList = document.getElementById("transaction-list");
  const balanceDisplay = document.getElementById("balance");
  const displayButton = document.getElementById("display-button");
  
  export {form,typeInput,amountInput,descInput,transactionList,balanceDisplay,displayButton}
  