module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv', {
        moduleName: 'react-native-dotenv',
      },
    ],
    // https://reactnative.dev/docs/typescript#using-custom-path-aliases-with-typescript
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
      },
    ],
  ],
};
