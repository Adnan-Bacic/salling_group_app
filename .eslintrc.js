module.exports = {
  root: true,
  extends: [
    // '@react-native',
    'eslint:recommended',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:react-hooks/recommended',
    'plugin:react-redux/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      // for eslint-plugin-react-native
      jsx: true,
    },
    // for eslint-config-airbnb-typescript
    project: './tsconfig.eslint.json',
  },
  env: {
  // for eslint-plugin-react-native
    'react-native/react-native': true,
  },
  // for @typescript-eslint/eslint-plugin
  parser: '@typescript-eslint/parser',
  rules: {
    // we use custom path alias
    'import/no-unresolved': [0, 'always'],
    // no need for proptypes in ts
    'react/prop-types': [0, 'always'],
    'react/require-default-props': [0, 'always'],
    // in rn usually styles are at the bottom of the file
    '@typescript-eslint/no-use-before-define': ['error', { variables: false }],
    // error when using any kind of text components where the name isent "Text"
    'react-native/no-raw-text': [0, 'always'],

    // syntax
    'arrow-body-style': [2, 'always'],
    'import/prefer-default-export': 'off',
    'object-shorthand': ['warn', 'never'],
    'react/jsx-first-prop-new-line': [2, 'always'],
    'react/jsx-max-props-per-line': [2, { maximum: 1, when: 'always' }],
    'react/jsx-one-expression-per-line': [2, { allow: 'none' }],

    // for easier finding other linter errors
    '@typescript-eslint/no-explicit-any': [0, 'always'],
    '@typescript-eslint/explicit-module-boundary-types': [0, 'always'],
  },
};
