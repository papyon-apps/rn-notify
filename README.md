# rn-notify

https://user-images.githubusercontent.com/22038798/164993645-bd2b6942-92c2-45c6-b8f1-4286b66bdcd8.mov

A utility that displays notifications to user ✏️

## Installation ⚙️

```sh
# for reanimated 2 users
yarn add rn-notify@2.0.11

# for reanimated 3 users
yarn add rn-notify@latest
```

`rn-notify` needs `react-native-reanimated` package 💎

```sh
yarn add react-native-reanimated
```

👇 You also need to complete installations of these packages for more information use the links below 👇

- [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation)

## Usage 🧑‍💻

```tsx
import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { NotifyProvider, useNotify } from 'rn-notify';

function Page() {
  const notify = useNotify();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          notify.success({
            message: 'Good Job 👍',
            duration: 1000,
          })
        }
      >
        <Text>Show alert</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <NotifyProvider>
      <Page />
    </NotifyProvider>
  );
}
```

For more examples check out the [example](https://github.com/Papyon-Apps/rn-notify/blob/feat/reanimated/example/src/App.tsx) folder 📂

## Usage 🎚️

#### `notify.<type>(options: NotifyOptions)`

Used to show a message. can take 3 types:

- `notify.success` - Shows the message in a green box
- `notify.info` - Shows the message in a yellow box
- `notify.error` - Shows the message in a red box

`NotifyOptions` is an object with the following properties:

```ts
export type NotifyOptions = {
  /**
   * The text of the notification.
   */
  message: string;
  /**
   * The level of the notification. Can be 'info', 'success' or 'error'.
   */
  level: NotifyLevel;
  /**
   * The duration of the notification. Defaults to `3000`.
   */
  duration?: number;
  /**
   * Show the timeout bar
   */
  noTimeoutBar?: boolean;
  /**
   * Limit the number of notification displayed at the same time.
   */
  limit?: number | null;
  /**
   * the function to call when the notification is clicked
   * @param remove - the function to remove the notification that was clicked
   */
  onPress?: (remove: () => void) => void;
  /**
   * The style of the notification.
   */
  options?: {
    containerStyle?: ViewStyle;
    textStyle?: TextStyle;
    timeoutBarStyle?: ViewStyle;
  };
};
```

## Contributing 🔖

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License 📰

[MIT](https://github.com/Papyon-Apps/rn-notify/blob/master/LICENSE)
