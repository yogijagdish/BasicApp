# Starting the New Project

## Installed Dependancies

### for navigation purpose

``` bash
npm install @react-navigation/native
```

### installing dependacies into an Expo managed project
``` bash 
npx expo install react-native-screens react-native-safe-area-context
```

### installation of native stack navigator
``` bash
npm install @react-navigation/native-stack
```

### installation of bottom tabs
``` bash 
npm install @react-navigation/bottom-tabs
```

## Installing NativeWind andCss in react native 

### Install nativewind and its peer dependacies

``` bash 
yarn add nativewind
yarn add --dev tailwindcss
```

### Setup Tailwindcss

``` bash
// tailwind.config.js

module.exports = {
content: ["./App.{js,jsx,ts,tsx}", "./<custom-folder>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Add Babel plugin
``` bash 
// babel.config.js
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: ["nativewind/babel"],
};
```

### Reset the cache
``` bash 
npm start -- --reset-cache
```
