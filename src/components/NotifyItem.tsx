import React, { useEffect, useMemo } from 'react';
import Animated, {
  CurvedTransition,
  FadeIn,
  FadeOut,
} from 'react-native-reanimated';
import type { NotifyItemType } from '../types';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors, Spacing } from '../styles';
import * as Icons from '../icons';

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
  }, [item]);

  const Icon = useMemo(() => levelStyle.icon, [levelStyle]);

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
        <Icon
          style={{ marginRight: Spacing.small }}
          height={24}
          width={24}
          color={Colors.White}
        />
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
    marginTop: Spacing.small,
    borderRadius: 10,
  },
  wrapper: {
    width: '100%',
    padding: Spacing.normal,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
