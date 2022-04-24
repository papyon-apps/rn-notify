import type { TextStyle, ViewStyle } from 'react-native';

export type NotifyLevel = 'info' | 'success' | 'error';

export type NotifyOptions = {
  message: string;
  level: NotifyLevel;
  duration?: number;
  noTimeoutBar?: boolean;
  onPress?: (remove: () => void) => void;
  options?: {
    containerStyle?: ViewStyle;
    textStyle?: TextStyle;
    timeoutBarStyle?: ViewStyle;
  };
};

export type NotifyContextType = {
  success: (opt: Omit<NotifyOptions, 'level'>) => void;
  info: (opt: Omit<NotifyOptions, 'level'>) => void;
  error: (opt: Omit<NotifyOptions, 'level'>) => void;
};

export type NotifyItemType = {
  id: string;
} & NotifyOptions;
