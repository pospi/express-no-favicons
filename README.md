# express-no-favicons

Express middleware to ignore all `favicon` and iOS `touch-icon` requests.

Fork of original `no-favicon` module by Ricardo Ferro https://github.com/rferro/no-favicon with extra URL exclusions for mobile devices and the modern web.

## Install

```shell
npm install --save express-no-favicons
```

## Example

```js
var express   = require("express")
var nofavicon = require("express-no-favicons")
var app       = express();

app.use(nofavicon());

app.listen(process.env.PORT)
```

## License

MIT
