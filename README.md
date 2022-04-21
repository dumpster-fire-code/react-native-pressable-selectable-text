# React Native Pressable + Selectable Text

A selectable and pressable text component for React Native.

## :package: Installation

### Using Yarn
```shell
yarn add @dumpster-fire-code/react-native-pressable-selectable-text
```

### Using NPM
```shell
npm install --save @dumpster-fire-code/react-native-pressable-selectable-text
```

## :rocket: Usage

```typescript
import { SelectableText } from '@dumpster-fire-code/react-native-pressable-selectable-text';

function MyComponent {
  return (
    <SelectableText onPress={() => alert('pressed')}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </SelectableText>
  );
}
```

## :hammer: Development

### Installing dependencies

After installing [Node](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/), run `yarn install` from the project root to install package dependencies.

### Starting example app

To start the example [Expo](https://expo.dev/) app:

```shell
cd example
yarn start
```

### Syncing the package

To have [Watchman](https://facebook.github.io/watchman/)) watch for changes to the package, then synchronize the example app using [Yalc](https://github.com/wclr/yalc), run `yarn watch` from the project root.