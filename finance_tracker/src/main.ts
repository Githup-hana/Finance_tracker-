import './style.css'
interface Transaction {
   
    description: string;
    amount: number;
    type: "income"|"expense";
  }
  const form = document.querySelector("#transaction-form") as HTMLFormElement;
  const typeInput = document.querySelector("#type-of-transactions") as HTMLSelectElement;
  const amountInput = document.querySelector("#amount") as HTMLInputElement;
  const descInput = document.querySelector("#description") as HTMLInputElement;


  function getTransactions(): Transaction[] {
    const data = localStorage.getItem("transactions");
    return data ? JSON.parse(data) : [];
  }

  function savingTransaction() { 
    const transactions: Transaction = {
      description: descInput.value,
      amount: parseFloat(amountInput.value),
      type: typeInput.value as "income" | "expense"
    };
    const existingTransactions = getTransactions();
    existingTransactions.push(transactions); 
    const newTransaction=JSON.stringify(existingTransactions)
    localStorage.setItem("transactions", newTransaction)
    form.reset()
  }


  form.addEventListener("submit", (e) => {
    e.preventDefault();
    savingTransaction();
});