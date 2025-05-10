module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // TS rules
    'plugin:prettier/recommended'            // Prettier plugin + config
  ],
  rules: {
    // customize rules here if needed
    'prettier/prettier': 'error'
  },
  ignorePatterns: ['dist/', 'node_modules/']
};
