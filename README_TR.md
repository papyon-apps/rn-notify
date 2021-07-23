
# rn-notify

A notify utility that show notification in app UI for lazy react native developers

![Jul-23-2021 19-14-42](https://user-images.githubusercontent.com/22038798/126811336-a5426fc3-0873-403f-a575-ec02af0b89fc.gif)


## Installation

```sh
$ yarn add rn-notify
```

`rn-notify` iki adet native bağımlılığa ihtiyaç duyar

```sh
$ yarn add react-native-safe-area-context react-native-svg
```

Bu paketlerin tam kurulumu için şuraya bakın

- [react-native-svg](https://github.com/react-native-svg/react-native-svg#installation)
- [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context#getting-started)

## Usage

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

#### Methods
##### `notify.<type>(msg: string, duration: number)`

istenilen mesajı ekrana göstermek için kullanılır. 3 tip alabilir: 

- `notify.success` - Mesajı yeşil kutu içinde gösterir
- `notify.info` - Mesajı sarı kutu içinde gösterir
- `notify.error `- Mesajı kırmızı kutu içinde gösterir



## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
