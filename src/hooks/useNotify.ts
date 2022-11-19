import { useContext } from 'react';
import { NotifyContext } from '../NotifyProvider';

export default function useNotify() {
  const notify = useContext(NotifyContext);
  if (!notify)
    throw Error(
      'Notify is not provided. Did you forget to wrap your app with NotifyProvider?'
    );
  return notify;
}
