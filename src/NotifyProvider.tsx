import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { StyleSheet, View } from 'react-native';

import NotifyItem from './NotifyItem';
import type { NotifyContextType, NotifyItemType, NotifyOptions } from './index';
import generateUUID from './generateRandomId';

export const NotifyContext = createContext<NotifyContextType | null>(null);

export const NotifyProviderBase = ({ children }: PropsWithChildren<{}>) => {
  const [items, setItems] = useState<NotifyItemType[]>([]);

  const success = useCallback((options: Omit<NotifyOptions, 'level'>) => {
    fire({ ...options, level: 'success' });
  }, []);

  const error = useCallback((options: Omit<NotifyOptions, 'level'>) => {
    fire({ ...options, level: 'error' });
  }, []);

  const info = useCallback((options: Omit<NotifyOptions, 'level'>) => {
    fire({ ...options, level: 'info' });
  }, []);

  const fire = useCallback(
    ({
      message,
      duration,
      level,
      options,
      onPress,
      noTimeoutBar = false,
      limit = null,
    }: NotifyOptions) => {
      setItems((prev) => {
        if (limit) {
          const count = prev.filter((i) => i.level === level).length;
          if (count >= limit) return prev;
        }
        return [
          ...prev,
          {
            id: generateUUID(10),
            message,
            duration,
            level,
            options,
            onPress,
            noTimeoutBar,
            limit,
          },
        ];
      });
    },
    []
  );

  const contextValue = useMemo(() => {
    return {
      error,
      success,
      info,
    };
  }, [error, success, info]);

  return (
    <NotifyContext.Provider value={contextValue}>
      {children}
      <View pointerEvents={'box-none'} style={[styles.container]}>
        {items.map((item) => (
          <NotifyItem
            item={item}
            onRemoved={(id) => {
              setItems((prev) => prev.filter((i) => i.id !== id));
            }}
            key={item.id}
          />
        ))}
      </View>
    </NotifyContext.Provider>
  );
};

export const NotifyProvider = ({ children }: PropsWithChildren<{}>) => {
  return <NotifyProviderBase>{children}</NotifyProviderBase>;
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    zIndex: 10,
    alignSelf: 'center',
    padding: 30,
  },
});
