import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { NotifyProvider, useNotify } from 'rn-notify';

function Page() {
  const notify = useNotify();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => notify.success('Nice Work 🎉', 1000)}>
        <Text>Show success</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => notify.info('Loading... 🧑‍💻', 1000)}>
        <Text>Show info</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => notify.error('Something went wrong 👎', 3000)}
      >
        <Text>Show danger</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
