import type { TextStyle, ViewStyle } from 'react-native';

export type NotifyLevel = 'info' | 'success' | 'error';

export type NotifyOptions = {
  /**
   * The text of the notification.
   */
  message: string;
  /**
   * The level of the notification. Can be 'info', 'success' or 'error'.
   */
  level: NotifyLevel;
  /**
   * The duration of the notification. Defaults to `3000`.
   */
  duration?: number;
  /**
   * Show the timeout bar
   */
  noTimeoutBar?: boolean;
  /**
   * the function to call when the notification is clicked
   * @param remove - the function to remove the notification that was clicked
   */
  onPress?: (remove: () => void) => void;
  /**
   * The style of the notification.
   */
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

export { NotifyProvider, NotifyContext } from './NotifyProvider';
export { default as useNotify } from './hooks/useNotify';
