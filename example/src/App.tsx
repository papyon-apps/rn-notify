import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { NotifyProvider, useNotify } from 'rn-notify';
import { useRef } from 'react';

function Page() {
  const renderCount = useRef(0);
  const notify = useNotify();
  console.log('render', renderCount.current++);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          notify.success({
            message: 'Good Job',
            duration: 1000,
            options: {
              containerStyle: { width: '50%', alignSelf: 'flex-end' },
            },
          })
        }
      >
        <Text>Show success</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          notify.info({
            message: 'Loading... 🧑‍💻',
            duration: -1,
            onPress: (remove) => {
              notify.success({
                message: 'Helal kardaşşıım',
              });
              remove();
            },
            options: {
              containerStyle: { width: '50%', alignSelf: 'flex-start' },
            },
          })
        }
      >
        <Text>Show info</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          notify.error({ message: 'Something went wrong 👎', duration: 3000 })
        }
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
