import { createContext } from 'react';
import { boolean, string } from 'yup/lib/locale';

export type INotificationContext = {
  showError: (msg: string) => unknown;
  showSuccess: (msg: string) => unknown;
  notifications: string[];
  setNotifications: (msg: string[]) => unknown;
  notify: boolean;
  setNotify: (msg: boolean) => unknown;
  color: string;
  setColor: (msg: string) => unknown;
};

export const notificationContext = createContext({
  showError: (_msg: string) => {},
  showSuccess: (_msg: string) => {},
  setNotifications: (_msg: string[]) => {},
  notify: boolean,
  setNotify: (_msg: boolean) => {},

  setColor: (_msg: string) => {},
} as INotificationContext);

notificationContext.displayName = 'Notification';

export const NotificationProvider = notificationContext.Provider;
