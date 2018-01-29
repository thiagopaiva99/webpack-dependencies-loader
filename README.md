# webpack-dependencies-loader

## Whats the purpose?
A simple webpack plugin to load the project dependencies and optimize the final bundle

## How to install?
```
    $ npm install --save-dev webpack-dependencies-loader
```

## How to use?

In your webpack.config.js you put this:

```
    const dependencies = require('webpack-dependencies-loader')    

    const VENDOR_LIBS = dependencies()

    module.exports = {
        entry: {
            // Your other files
            vendor: VENDOR_LIBS
        }
        ...
```