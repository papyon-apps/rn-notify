export type NotifyTypes = 'info' | 'success' | 'error';

export type NotifyContextType = {
  success: (arg0: string, duration?: number) => void;
  info: (arg0: string, duration?: number) => void;
  error: (arg0: string, duration?: number) => void;
};

export type NotifyItemType = {
  message: string;
  level: NotifyTypes;
  duration?: number;
  id: string;
};
