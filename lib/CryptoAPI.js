const axios = require('axios');
const colors = require('colors');
require('dotenv').config();

class CryptoAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = process.env.BASEURL || 'https://api.nomics.com/v1/currencies/ticker';
  }


  async getPriceData(coinOption, curOption) {
    try {
      // Formatter for currency
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: curOption
      });

      const res = await axios.get(
        `${this.baseUrl}?key=${this.apiKey}&ids=${coinOption}&convert=${curOption}`
      );

      let output = '';

      res.data.forEach(coin => {
        output += `Coin: ${coin.symbol.yellow} (${coin.name}) | Price: ${
          formatter.format(coin.price).green
        } | Crypto-Rank: ${coin.rank.bold.cyan}\n`;
      });

      return output;
    } catch (err) {
      handleAPIError(err);
    }
  }
}

function handleAPIError(err) {
  if (err.response.status === 401) {
    throw new Error('Your API key is invalid - Go to https://nomics.com'.red);
  } else if (err.response.status === 404) {
    throw new Error('Your API is not responding'.red);
  } else {
    throw new Error('Something is not working'.red);
  }
}

module.exports = CryptoAPI;
