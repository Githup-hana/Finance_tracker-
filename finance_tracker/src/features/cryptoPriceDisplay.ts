const cryptoPriceContainer = document.querySelector(
  "#crypto-price"
) as HTMLParagraphElement;
console.log(":", cryptoPriceContainer);
export async function displayCrypto(coinData: any) {
  cryptoPriceContainer.innerHTML = `  <div class="p-4 bg-gray-100 rounded-lg shadow-md text-center">
    <img src="${coinData.image}" alt="${
    coinData.name
  }" class="w-16 h-16 mx-auto mb-4">
    <h2 class="text-2xl font-bold">${
      coinData.name
    } (${coinData.symbol.toUpperCase()})</h2>
    <p class="text-lg text-gray-700">Aktueller Preis: <span class="font-semibold">${coinData.current_price.toLocaleString()} €</span></p>
    <p class="text-sm text-gray-600">Marktkapitalisierung: ${coinData.market_cap.toLocaleString()} €</p>
    <p class="text-sm text-green-600">24h Hoch: ${coinData.high_24h.toLocaleString()} €</p>
    <p class="text-sm text-red-600">24h Tief: ${coinData.low_24h.toLocaleString()} €</p>
    <p class="text-sm ${
      coinData.price_change_24h < 0 ? "text-red-500" : "text-green-500"
    }">
      Änderung (24h): ${coinData.price_change_24h.toLocaleString()} € (${coinData.price_change_percentage_24h.toFixed(
    2
  )}%)
    </p>
    <p class="text-sm">Allzeithoch: ${coinData.ath.toLocaleString()} € (${coinData.ath_change_percentage.toFixed(
    2
  )}% vom ATH)</p>
    <p class="text-xs text-gray-500">Letzte Aktualisierung: ${new Date(
      coinData.last_updated
    ).toLocaleString()}</p>
  </div>`;
}
export { cryptoPriceContainer };
