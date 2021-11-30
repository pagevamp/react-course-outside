import { createContext } from 'react';

export type INotificationContext = {
  showError: (msg: string) => void;
  showSuccess: (msg: string) => void;
  notifications: string[];
  setNotifications: (msg: string[]) => unknown;
};

export const notificationContext = createContext({
  showError: (_msg: string) => {},
  showSuccess: (_msg: string) => {},
  setNotifications: (_msg: string[]) => {},
} as INotificationContext);

notificationContext.displayName = 'Notification';

export const NotificationProvider = notificationContext.Provider;
