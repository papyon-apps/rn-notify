import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useState,
} from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import NotifyItem from './components/NotifyItem';
import type { NotifyContextType, NotifyItemType, NotifyTypes } from './types';
import generateUUID from './generateRandomId';
import { Spacing } from './styles';

export const NotifyContext = createContext<NotifyContextType | null>(null);

export const NotifyProviderBase = ({ children }: PropsWithChildren<{}>) => {
  const [items, setItems] = useState<NotifyItemType[]>([]);

  const success = useCallback((message: string, duration?: number) => {
    fire(message, 'success', duration);
  }, []);

  const error = useCallback((message: string, duration?: number) => {
    fire(message, 'error', duration);
  }, []);

  const info = useCallback((message: string, duration?: number) => {
    fire(message, 'info', duration);
  }, []);

  const fire = useCallback(
    (message: string, level: NotifyTypes = 'success', duration?: number) => {
      setItems((prev) => [
        ...prev,
        {
          id: generateUUID(10),
          level,
          message,
          duration,
        },
      ]);
    },
    []
  );
  return (
    <NotifyContext.Provider value={{ error, success, info }}>
      <SafeAreaView pointerEvents={'box-none'} style={[styles.container]}>
        {items.map((item) => (
          <NotifyItem
            item={item}
            onRemoved={(id) => {
              setItems((prev) => prev.filter((i) => i.id !== id));
            }}
            key={item.id}
          />
        ))}
      </SafeAreaView>
      {children}
    </NotifyContext.Provider>
  );
};

export const NotifyProvider = ({ children }: PropsWithChildren<{}>) => {
  return (
    <SafeAreaProvider>
      <NotifyProviderBase>{children}</NotifyProviderBase>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'column',
    alignItems: 'center',
    width: '95%',
    zIndex: 10,
    alignSelf: 'center',
    padding: Spacing.normal,
  },
});
