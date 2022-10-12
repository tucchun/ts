module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
//   extends: ['standard'],
  extends: ['standard', 'eslint-config-standard-with-typescript', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.eslint.json'
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error'
  }
}
