# Crypto-Dash

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity "Repo Maintained")
[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://GitHub.com/akashchouhan16/ "github.com/akashchouhan16")
[![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)](https://code.visualstudio.com/ "VSCODE")
[![GitHub issues](https://img.shields.io/github/issues/akashchouhan16/KeepNotes_API.svg)](https://GitHub.com/akashchouhan16/KeepNotes_API/issues/ "Open Issues Tab")

A **Command line tool** for fetching Cryptocurrency prices in [INR,USD,EUR](https://github.com/akashchouhan16, "currency options") and more built using [Nomics API](https://nomics.com "View API Site").

## How to run the application

- **Install dependencies**
  ```sh-session
      npm install
  ```
  OR
  ```
      npm i --save
  ```
- **Navigate to `/bin` sub-directory and run**
  ```sh-session
      node crypto.js
  ```

## CLI Parameters

```sh-session
Usage: crypto [options] [command]

Options:
  -V, --version   output the version number
  -h, --help      display help for command

Commands:
  key             Manage API Key -- https://nomics.com
  check           Check Coin Price Info
  help [command]  display help for command
```

### Key Options

**CMD : `node crypto.js key -h`**

```sh-session

Usage: crypto-key [options] [command]

Options:
  -h, --help      display help for command

Commands:
  set             Set API Key -- Get at https://nomics.com
  show            Show API Key
  remove          Remove API Key
  help [command]  display help for command
```

### Check Options

**CMD : `node crypto.js check -h`**

```sh-session

Usage: crypto-check [options] [command]

Options:
  -h, --help       display help for command

Commands:
  price [options]  Check price of coins
  help [command]   display help for command
```

### Price & Currency Options

**CMD : `node crypto.js check price -h`**

```sh-session

Usage: crypto-check price [options]

Check price of coins

Options:
  --coin <type>     Add specific coin types in CSV format (default: "BTC,ETH,XRP")
  --cur <currency>  Change the currency (default: "USD")
  -h, --help        display help for command
```

---

## Application Info

## Version

[1.0.1](https://github.com/akashchouhan16/Crypto-Dash "Version")

## License

[MIT](./LICENSE "View LICENSE")
