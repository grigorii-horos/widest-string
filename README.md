# Welcome to widest-string 👋
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/horosgrisa/widest-string#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/horosgrisa/widest-string/graphs/commit-activity)
[![License: GPL-3.0-or-later](https://img.shields.io/badge/License-GPL-3.0-or-later-yellow.svg)](https://github.com/horosgrisa/widest-string/blob/master/LICENSE)

> Get the visual width of the widest line in a array of strings - the number of columns required to display it

### 🏠 [Homepage](https://github.com/horosgrisa/widest-string#readme)

## Install

```sh
npm install
```

## Usage

```js
const widestString = require('widest-string');

console.log(widestString([
'Hello',
'Hello World',
'Hello\nWorld'
])) // 11, because 'Hello World' has 11 symols
```

## Run tests

```sh
npm run test
```

## Author

👤 **Grigorii Horos**

* Github: [@horosgrisa](https://github.com/horosgrisa)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/horosgrisa/widest-string/issues).

## Show your support

Give a ⭐️ if this project helped you!


## 📝 License

Copyright © 2019 [Grigorii Horos](https://github.com/horosgrisa).

This project is [GPL-3.0-or-later](https://github.com/horosgrisa/widest-string/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
