// import {  form, } from "./features/data";
import { displayBalance } from "./features/dispalybalance";

import { savingTransaction } from "./features/savingTransaction";
import { navigation } from "./navigation/navigation";
import { initRouter } from "./navigation/router";
import "./style.css";

const appEl = document.querySelector<HTMLDivElement>("#app");

initRouter(appEl!);
navigation(appEl!);

export interface Transaction {
  id: number;
  description: string;
  amount: number;
  type: "income" | "expense";
}
const transactions: Transaction[] = JSON.parse(
  localStorage.getItem("transactions") || "[]"
);

function getTransactions(): Transaction[] {
  const data = localStorage.getItem("transactions");
  return data ? JSON.parse(data) : [];
}




const form = document.getElementById("transaction-form") as HTMLFormElement;
console.log(':',form);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  savingTransaction();

  displayBalance();
});


export {transactions,getTransactions}
