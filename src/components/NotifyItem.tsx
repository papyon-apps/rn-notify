import React, { useEffect, useMemo } from 'react';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import type { NotifyItemType } from '../types';
import { StyleSheet, Text } from 'react-native';
import { Colors, Spacing } from '../styles';
import * as Icons from '../icons';

type Props = {
  item: NotifyItemType;
  onRemoved: (id: string) => void;
};

export default function NotifyItem({ item, onRemoved }: Props) {
  useEffect(() => {
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
      style={[styles.container, levelStyle]}
    >
      <Icon
        style={{ marginRight: Spacing.small }}
        height={24}
        width={24}
        color={Colors.White}
      />
      <Text>{item.message}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: Spacing.normal,
    marginTop: Spacing.small,
    borderRadius: 10,
  },
});
