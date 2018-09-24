module.exports = {
    "parser": 'babel-eslint',
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true,
        "jest/globals": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": ["react", "jest"],
    "rules": {
        //"indent": ["error", "tab"],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        "no-console": ["warn", {"allow": ["info", "error"]}],
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error"
    }
};