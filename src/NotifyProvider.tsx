import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Text, StyleSheet, Animated, Easing } from 'react-native';
import {
  useSafeAreaInsets,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

import * as Icons from './icons';
import { Colors, Spacing } from './styles';

type NotifyTypes = 'info' | 'success' | 'error';

type NotifyContextType = {
  success: (arg0: string, duration?: number) => void;
  info: (arg0: string, duration?: number) => void;
  error: (arg0: string, duration?: number) => void;
};

export const NotifyContext = createContext<NotifyContextType | null>(null);
type NotifyItemType = {
  message: string;
  level: NotifyTypes;
};

export const NotifyProviderBase = ({ children }: PropsWithChildren<{}>) => {
  const { top } = useSafeAreaInsets();

  const opacity = useRef(new Animated.Value(0)).current;
  const opacityIn = Animated.timing(opacity, {
    toValue: 1,
    duration: 250,
    easing: Easing.in(Easing.ease),
    useNativeDriver: true,
  });

  const opacityOut = Animated.timing(opacity, {
    toValue: 0,
    duration: 250,
    easing: Easing.in(Easing.ease),
    useNativeDriver: true,
  });

  const [current, setCurrent] = useState<NotifyItemType | null>();

  useEffect(() => {
    if (current) {
      opacityIn.start();
    }
  }, [current]);

  const levelStyle = useMemo(() => {
    if (current) {
      switch (current.level) {
        case 'success':
          return {
            backgroundColor: Colors.Green,
            color: Colors.White,
            icon: Icons.Success,
          };
        case 'info':
          return {
            backgroundColor: Colors.Gold,
            color: Colors.White,
            icon: Icons.Information,
          };
        case 'error':
          return {
            backgroundColor: Colors.Danger,
            color: Colors.White,
            icon: Icons.Alert,
          };
      }
    } else return null;
  }, [current]);

  const success = (message: string, duration?: number) => {
    fire(message, 'success', duration);
  };
  const info = (message: string, duration?: number) => {
    fire(message, 'info', duration);
  };
  const error = (message: string, duration?: number) => {
    fire(message, 'error', duration);
  };

  const fire = (
    message: string,
    level: NotifyTypes = 'success',
    duration: number = 3000
  ) => {
    if (!current) {
      // Eğer notify varsa tekrar çalışırma
      // burayı bir liste şeklinde yapabiliriz aslında gelen
      // push olur işi bitince pop ama şimdilik böyle
      setCurrent({
        message,
        level,
      });
      setTimeout(() => {
        opacityOut.start(() => setCurrent(null));
      }, duration);
    }
  };
  return (
    <NotifyContext.Provider value={{ success, info, error }}>
      {current &&
        (() => {
          const Icon = levelStyle?.icon as React.ElementType;
          return (
            <Animated.View
              style={[
                styles.container,
                {
                  top: top + 10,
                  backgroundColor: levelStyle?.backgroundColor,
                },
                { opacity },
              ]}
            >
              <Icon
                style={{ marginRight: Spacing.small }}
                height={24}
                width={24}
                color={Colors.White}
              />
              <Text style={{ color: levelStyle?.color }}>
                {current.message}
              </Text>
            </Animated.View>
          );
        })()}
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
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red',
    width: '95%',
    zIndex: 10,
    alignSelf: 'center',
    padding: Spacing.normal,
    borderRadius: 10,
  },
});
