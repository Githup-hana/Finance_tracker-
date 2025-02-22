export async function checkInvestment() {
    interface InvestmentData {
      crypto: string;
      amount: number;
      investmentAmount: number;
      priceAtInvestment: number;
      currency: string;
      date: string;
    }
  
    const investments: InvestmentData[] = JSON.parse(
      localStorage.getItem("investments") || "[]"
    );
  
    if (investments.length === 0) {
      alert("Keine gespeicherten Investitionen gefunden.");
      return;
    }
  
    const investmentContainer = document.querySelector(
      "#investment-container-result"
    ) as HTMLDivElement;
    investmentContainer.innerHTML = "";
 
  

    const investmentResults = await Promise.all(
      investments.map(async (investment) => {
        const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${investment.currency}&ids=${investment.crypto}`;
  
        try {
          const response = await fetch(url);
          const data = await response.json();
  
          if (data && data[0]) {
            const coinData = data[0];
            const currentPrice = coinData.current_price;
            const currentAmount = investment.amount * currentPrice;
            const profitLoss = currentAmount - investment.investmentAmount;
            const profitLossPercentage =
              (profitLoss / investment.investmentAmount) * 100;
  
            return `
              <div class="investment-result p-4 mb-4 bg-white shadow-md rounded-md">
                <h3 class="text-xl font-semibold">${investment.crypto.toUpperCase()} Investition</h3>
                <p><strong>Investierter Betrag:</strong> ${investment.investmentAmount} ${investment.currency}</p>
                <p><strong>Investierte Menge:</strong> ${investment.amount} ${investment.crypto}</p>
                <p><strong>Preis bei Investition:</strong> ${investment.priceAtInvestment} ${investment.currency}</p>
                <p><strong>Aktueller Preis:</strong> ${currentPrice} ${investment.currency}</p>
                <p><strong>Aktueller Wert:</strong> ${currentAmount} ${investment.currency}</p>
                <p class="font-bold ${profitLoss >= 0 ? 'text-green-500' : 'text-red-500'}">
                  ${profitLoss >= 0 ? 'Gewinn' : 'Verlust'}: ${profitLoss} ${investment.currency} (${profitLossPercentage.toFixed(2)}%)
                </p>
                <p><strong>Datum der Investition:</strong> ${investment.date}</p>
              </div>
            `;
          }
        } catch (error) {
          console.error("Fehler beim Abrufen der aktuellen Krypto-Daten:", error);
          alert("Fehler beim Abrufen der aktuellen Krypto-Daten.");
        }
      })
    );
  
   
    investmentContainer.innerHTML = investmentResults.join('');
  }
  