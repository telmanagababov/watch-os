module.exports = {
    extends: "eslint:recommended",
    parserOptions: {
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    globals: {
        module: true,
        angular: true,
        inject: true,
        Promise: true
    },
    env: {
        browser: true,
        jasmine: true
    },
    rules: {
        "indent": ["error", 4],
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "no-cond-assign": ["error", "always"],
        "no-console": "off",
    }
};