module.exports = {
  parser: '@typescript-eslint/parser',  // Specifies the ESLint parser
  parserOptions: {
    project: './tsconfig.json',         // Path to your tsconfig.json
    tsconfigRootDir: __dirname,         // Ensure the correct root for TypeScript config
    sourceType: 'module',               // Allows for the use of imports
    ecmaVersion: 2020,                  // Allows for parsing modern ECMAScript features
    ecmaFeatures: {
      legacyDecorators: true,           // Enable TypeScript decorators support
    },
  },
  plugins: ['@typescript-eslint', 'prettier'],  // Use TypeScript ESLint and Prettier plugins
  extends: [
    'plugin:@typescript-eslint/recommended',   // Use recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:prettier/recommended',             // Enables eslint-plugin-prettier and displays Prettier errors as ESLint errors
  ],
  env: {
    node: true,  // Enable Node.js global variables and Node.js scoping
    jest: true,  // Enable Jest global variables for testing
  },
  ignorePatterns: ['.eslintrc.js'],  // Ignore ESLint config file itself
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',  // Disable prefixing interfaces with "I"
    '@typescript-eslint/explicit-function-return-type': 'off',  // Do not enforce return types on functions
    '@typescript-eslint/explicit-module-boundary-types': 'off',  // Do not enforce return types for module boundaries
    '@typescript-eslint/no-explicit-any': 'off',  // Allow usage of "any" type
    'prettier/prettier': ['error', { endOfLine: 'auto' }],  // Fix the 'CR' issue by auto-detecting line endings
  },
};
