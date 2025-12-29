const btc = document.getElementById("bitcoin");
const eth = document.getElementById("ethereum");
const doge = document.getElementById("dogecoin");

const API_URL =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd";

async function loadCryptoPrices() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch crypto prices");
    }

    const data = await response.json();

    btc.textContent = data.bitcoin.usd;
    eth.textContent = data.ethereum.usd;
    doge.textContent = data.dogecoin.usd;

  } catch (error) {
    console.error(error);
    btc.textContent = eth.textContent = doge.textContent = "Error";
  }
}

loadCryptoPrices();
