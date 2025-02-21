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
  date:string;
}

function getTransactions(): Transaction[] {
  const data = localStorage.getItem("transactions");
  return data ? JSON.parse(data) : [];
}


export { getTransactions };
