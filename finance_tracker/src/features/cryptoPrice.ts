import { displayCrypto } from "./cryptoPriceDisplay";

export async function getCryptoPrice() {
  const cryptoPriceContainer = document.querySelector(
    "#crypto-price"
  ) as HTMLParagraphElement;
 
  const cryptoInput = document.querySelector(
    "#crypto-input"
  ) as HTMLInputElement;
  console.log(':',cryptoInput);
  const currencySelect = document.querySelector(
    "#currency-select"
  ) as HTMLSelectElement;
  console.log(':',currencySelect);
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
    
    if (!response.ok) {
      throw new Error("Fehler beim Abrufen der API-Daten");
    }
    const data = await response.json();
    console.log(":", data);
    if (data) {
      displayCrypto(data[0]);
    } else {
      cryptoPriceContainer.innerHTML = `<p class="text-red-500">Kryptowährung nicht gefunden!</p>`;
    }
  } catch (error) {
    cryptoPriceContainer.innerHTML = `<p class="text-red-500">Fehler beim Abrufen des Krypto-Preises!</p>`;
  }
}
