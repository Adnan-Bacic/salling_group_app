module.exports = {
  root: true,
  extends: [
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
  "parserOptions": {
    "ecmaFeatures": {
        //for eslint-plugin-react-native
        "jsx": true
    },
    //for eslint-config-airbnb-typescript
    "project": './tsconfig.eslint.json'
},
"env": {
  //for eslint-plugin-react-native
  "react-native/react-native": true
},
//for @typescript-eslint/eslint-plugin
"parser": "@typescript-eslint/parser",

};
