const inquirer = require('inquirer');
const colors = require('colors');
const KeyManager = require('../lib/KeyManager');
const { isRequired } = require('../utils/validation');

const key = {
  async set() {
    const keyManager = new KeyManager();
    const input = await inquirer.prompt([
      {
        type: 'input',
        name: 'key',
        message: 'visit ( https://nomics.com ) For API Key '.bgBrightGreen + '\nEnter API Key '.underline.red,
        validate: isRequired
      }
    ]);

    const key = keyManager.setKey(input.key);

    if (key) {
      console.log('API Key is Set'.bold.blue);
    }
  },
  show() {
    try {
      const keyManager = new KeyManager();
      const key = keyManager.getKey();

      console.log('Current API Key: ', key.bold.yellow.bgGray);

      return key;
    } catch (err) {
      console.error(err.message.bold.red);
    }
  },
  remove() {
    try {
      const keyManager = new KeyManager();
      keyManager.deleteKey();

      console.log('Key Removed'.bold.blue);

      return;
    } catch (err) {
      console.error(err.message.bold.red);
    }
  }
};

module.exports = key;
