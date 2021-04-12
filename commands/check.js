// require('dotenv').config();

const KeyManager = require('../lib/KeyManager');
const CryptoAPI = require('../lib/CryptoAPI');


const check = {
  async price(cmd) {
    try {
      let keyManager = new KeyManager();
      const key = keyManager.getKey();

      const api = new CryptoAPI(key);

      const priceOutputData = await api.getPriceData(cmd.coin, cmd.cur);

      console.log(priceOutputData);
    } catch (err) {
      console.error(err.message.bold.red);
    }
  }
};

module.exports = check;
