export async function handleInvestment() {
  const cryptoSelect = document.querySelector(
    "#crypto-invest-input"
  ) as HTMLInputElement;
  const currencySelect = document.querySelector(
    "#currency-invest-select"
  ) as HTMLSelectElement;
  const investmentAmountInput = document.querySelector(
    "#amount-invest-input"
  ) as HTMLInputElement;

  const crypto = cryptoSelect.value;
  const currency = currencySelect.value;
  const investmentAmount = parseFloat(investmentAmountInput.value);

   interface InvestmentData {
    crypto: string;
    amount: number;
    investmentAmount: number;
    priceAtInvestment: number;
    currency: string;
    date: string;
  }

  if (!crypto || !currency || isNaN(investmentAmount)) {
    alert(
      "Bitte gib eine gültige Kryptowährung, Währung und Investitionsbetrag ein."
    );
    return;
  }

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${crypto}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data && data[0]) {
      const coinData = data[0];
      const amountOfCrypto = investmentAmount / coinData.current_price;

      const investmentData:InvestmentData = {
        crypto,
        amount: amountOfCrypto,
        investmentAmount,
        priceAtInvestment: coinData.current_price,
        currency,
        date: new Date().toLocaleDateString(),
      };

     let investments: InvestmentData[] = JSON.parse(localStorage.getItem("investments") || "[]");
      investments.push(investmentData);
      localStorage.setItem("investments", JSON.stringify(investments));

      alert("Investment erfolgreich gespeichert!");
    } else {
      alert("Kryptowährung nicht gefunden!");
    }
  } catch (error) {
    alert("Fehler beim Abrufen der Krypto-Preise.");
  }
}
