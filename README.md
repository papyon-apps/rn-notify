# rn-notify

![Jul-23-2021 19-14-42](https://user-images.githubusercontent.com/22038798/126811336-a5426fc3-0873-403f-a575-ec02af0b89fc.gif)

A utility that displays notifications to user ✏️

## Installation ⚙️

```sh
yarn add rn-notify
```

`rn-notify` needs `react-native-safe-area-context` 💎

```sh
yarn add react-native-safe-area-context
```

👇 You also need to complete installations of `react-native-safe-area-context` for more information use the links below 👇

- [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context#getting-started)

## Usage 🧑‍💻

```tsx
import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { NotifyProvider, useNotify } from 'rn-notify';

function Page() {
  const notify = useNotify();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => notify.success('Hello World', 3000)}>
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

## Methods 🎚️

---

#### `notify.<type>(msg: string, duration: number)`

Used to show a message. can take 3 types:

- `notify.success` - Shows the message in a green box
- `notify.info` - Shows the message in a yellow box
- `notify.error` - Shows the message in a red box

## Contributing 🔖

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License 📰

[MIT](https://github.com/Papyon-Apps/rn-notify/blob/master/LICENSE)
