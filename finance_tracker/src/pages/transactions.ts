import { displayData } from "../features/displaytransactions";

async function transactionPage() {
  const response = await fetch("/src/pages/html/transaction.html");
  const html = await response.text();
  displayData();
  console.log(":", displayData);
  return html;
}

export default transactionPage;
