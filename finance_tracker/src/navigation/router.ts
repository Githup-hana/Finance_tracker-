import { routes } from "./routes";
import { displayBalance } from "../features/dispalybalance";

import { savingTransaction } from "../features/savingTransaction";
import { displayData } from "../features/displaytransactions";
import { getCryptoPrice } from "../features/cryptoPrice";

async function updateAppContent(appEl: HTMLDivElement) {
  const currentPath = window.location.pathname;

  let content = "";

  const route = routes.find((route) => route.path === currentPath);

  content = await route!.page();

  appEl!.innerHTML = content;
}

function initRouter(appEl: HTMLDivElement) {
  window.addEventListener("load", async () => {
    const currentPath = window.location.pathname;
    await updateAppContent(appEl!);
    if (currentPath === "/") {
      const form = document.getElementById(
        "transaction-form"
      ) as HTMLFormElement;
      console.log("🚀 ~ homePage ~ form:", form);

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        savingTransaction();

        displayBalance();
      });
    }
    if (currentPath === "/Transactions") {
      displayData();
    }
    if (currentPath === "/cryptoPrice") {
      const cryptoButton = document.querySelector(
        "#crypto-but"
      ) as HTMLButtonElement;
      cryptoButton.addEventListener("click", getCryptoPrice);
    }
  });
}
console.log("hallo");
console.log(":", displayBalance);

export { updateAppContent, initRouter };
