import { cryptoPriceContainer, displayCrypto } from "./cryptoPriceDisplay";


console.log("Script geladen");
const cryptoInput = document.querySelector("#crypto-input") as HTMLInputElement;
const currencySelect = document.querySelector("#currency-select") as HTMLSelectElement;
const cryptoButton=document.querySelector("#crypto-but")as HTMLButtonElement

async function getCryptoPrice() {
  const crypto = cryptoInput.value.toLowerCase().trim();
  const currency = currencySelect.value;

  if (!crypto || !currency) {
    alert("Bitte gib eine Kryptowährung und eine Währung ein.");
    return;
  }

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${crypto}`;
  if (cryptoPriceContainer) cryptoPriceContainer.innerHTML = "";

  try {
    const response = await fetch(url);
    console.log(response);
    if (!response.ok) {
      throw new Error("Fehler beim Abrufen der API-Daten");
    }
    const data = await response.json();
    console.log(':',data);
    if (data ) {
        displayCrypto(data); 
    } else {
      cryptoPriceContainer.innerHTML = `<p class="text-red-500">Kryptowährung nicht gefunden!</p>`;
    }
  } catch (error) {
    cryptoPriceContainer.innerHTML = `<p class="text-red-500">Fehler beim Abrufen des Krypto-Preises!</p>`;
  }
}

cryptoButton.addEventListener("click", getCryptoPrice);


