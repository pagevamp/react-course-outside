import { ReactNode, useState } from 'react';
import { ThemeProvider } from '@/contextProviders/themes/theme.context';
import { applyCustomTheme } from 'themes/theme.utils';
import { INotificationContext, NotificationProvider } from '@/contextProviders/notifications/notification.context';
//import { SideBar } from 'components/_layouts/SideBar';
//import { UserRole } from 'schemas/user.schema';
import Notifications from '@/components/_layouts/Notifications';

export default function AppLayout({ children }: { children: ReactNode }) {
  const [notifications, setNotifications] = useState([] as string[]);
  const [notify, setNotify] = useState(false);
  const [color, setColor] = useState('');

  return (
    <>
      <ThemeProvider value={{ switchTheme: applyCustomTheme }}>
        <NotificationProvider
          value={{
            showError: (msg) => {
              setNotifications([msg]);
              setColor('red');
              setNotify(true);
              setInterval(() => {
                setNotify(false);
              }, 3000);
            },
            showSuccess: (msg) => {
              setNotifications([msg]);
              setColor('green');
              setNotify(true);
              setInterval(() => {
                setNotify(false);
              }, 3000);
            },
            notify: notify,
            setNotify: setNotify as any as INotificationContext['setNotify'],
            notifications: notifications,
            setNotifications: setNotifications as any as INotificationContext['setNotifications'],
            color: color,
            setColor: setColor as any as INotificationContext['setColor'],
          }}
        >
          <Notifications />
          <div id="AppLayout">
            <div>{children}</div>
          </div>
        </NotificationProvider>
      </ThemeProvider>
    </>
  );
}
