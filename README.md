# @kenan/eslint-config

My eslint config.

## Install

``` bash
$ npm install @kenan/eslint-config
```

## Usage

``` js
module.exports = {
  extends: ['@kenan']
};
```

### React

``` js
module.exports = {
  extends: ['@kenan', '@kenan/eslint-config/react'],
  env: {
    browser: true
  }
};
```

### React + TypeScript

``` js
module.exports = {
  extends: ['@kenan', '@kenan/eslint-config/react', '@kenan/eslint-config/ts'],
  env: {
    browser: true
  },
  parserOptions: {
    project: true
  }
};
```
