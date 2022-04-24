import React, { useEffect, useMemo } from 'react';
import Animated, {
  CurvedTransition,
  FadeIn,
  FadeOut,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import type { NotifyItemType } from '../index';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../styles';
import useLayout from '../hooks/useLayout';

type Props = {
  item: NotifyItemType;
  onRemoved: (id: string) => void;
};

const DEFAULT_DURATION = 3000;

export default function NotifyItem({ item, onRemoved }: Props) {
  const { width, onLayout } = useLayout();

  const barWidth = useSharedValue(0);

  useEffect(() => {
    if (width) {
      barWidth.value = width;
      if (item.duration !== -1) {
        barWidth.value = withTiming(
          0,
          { duration: item.duration || DEFAULT_DURATION },
          () => {
            runOnJS(onRemoved)(item.id);
          }
        );
      }
    }
  }, [width]);

  const levelStyle = useMemo(() => {
    switch (item.level) {
      case 'success':
        return {
          backgroundColor: Colors.Success,
          color: Colors.White,
          barColor: Colors.SuccessDark,
        };
      case 'info':
        return {
          backgroundColor: Colors.Gold,
          color: Colors.White,
          barColor: Colors.GoldDark,
        };
      case 'error':
        return {
          backgroundColor: Colors.Danger,
          color: Colors.White,
          barColor: Colors.DangerDark,
        };
    }
  }, [item]);

  const barStyle = useAnimatedStyle(() => {
    return {
      width: barWidth.value,
      backgroundColor: levelStyle.barColor,
    };
  }, []);

  return (
    <Animated.View
      entering={FadeIn}
      exiting={FadeOut}
      layout={CurvedTransition}
      pointerEvents={item.onPress ? 'auto' : 'none'}
      onLayout={onLayout}
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
      {!item.noTimeoutBar && (
        <Animated.View
          style={[
            styles.bar,
            {
              backgroundColor: levelStyle.barColor,
            },
            item.options?.timeoutBarStyle,
            barStyle,
          ]}
        />
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 10,
    width: '100%',
    overflow: 'hidden',
  },
  wrapper: {
    width: '100%',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bar: {
    height: 5,
  },
});
