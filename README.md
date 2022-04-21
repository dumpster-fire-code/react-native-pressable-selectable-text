# React Native Pressable + Selectable Text

A selectable and pressable text component for React Native.

https://user-images.githubusercontent.com/103694056/164523570-5cbf94e6-78d8-4958-ac73-9bd02a32b9d5.mov

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

The `SelectableText` component is a thin wrapper around React Native's [`TextInput`](https://reactnative.dev/docs/textinput) and accepts all the same properties, other than `value` – which is instead expected as `children`.

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
