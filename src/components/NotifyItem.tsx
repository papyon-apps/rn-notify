import React, { useEffect, useMemo } from 'react';
import Animated, {
  CurvedTransition,
  FadeIn,
  FadeOut,
} from 'react-native-reanimated';
import type { NotifyItemType } from '../types';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../styles';

type Props = {
  item: NotifyItemType;
  onRemoved: (id: string) => void;
};

export default function NotifyItem({ item, onRemoved }: Props) {
  useEffect(() => {
    if (item.duration !== -1)
      setTimeout(() => {
        onRemoved(item.id);
      }, item.duration || 3000);
  }, []);

  const levelStyle = useMemo(() => {
    switch (item.level) {
      case 'success':
        return {
          backgroundColor: Colors.Green,
          color: Colors.White,
        };
      case 'info':
        return {
          backgroundColor: Colors.Gold,
          color: Colors.White,
        };
      case 'error':
        return {
          backgroundColor: Colors.Danger,
          color: Colors.White,
        };
    }
  }, [item]);

  return (
    <Animated.View
      entering={FadeIn}
      exiting={FadeOut}
      layout={CurvedTransition}
      pointerEvents={item.onPress ? 'auto' : 'none'}
      style={[styles.container, levelStyle, item.options?.containerStyle]}
    >
      <TouchableOpacity
        style={styles.wrapper}
        onPress={() => {
          item.onPress?.(() => {
            onRemoved(item.id);
          });
        }}
      >
        <Text style={[{ color: levelStyle.color }, item.options?.textStyle]}>
          {item.message}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 10,
  },
  wrapper: {
    width: '100%',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
