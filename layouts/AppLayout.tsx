import { ReactNode, useState } from 'react';
import { ThemeProvider } from '@/contextProviders/themes/theme.context';
import { applyCustomTheme } from 'themes/theme.utils';
import { INotificationContext, NotificationProvider } from '@/contextProviders/notifications/notification.context';
import { SideBar } from 'components/_layouts/SideBar';
import { UserRole } from 'schemas/user.schema';

export default function AppLayout({ children }: { children: ReactNode }) {
  const [notifications, setNotifications] = useState([] as string[]);
  return (
    <>
      <ThemeProvider value={{ switchTheme: applyCustomTheme }}>
        <NotificationProvider
          value={{
            showError: () => {},
            showSuccess: () => {},
            notifications: notifications,
            setNotifications: setNotifications as any as INotificationContext['setNotifications'],
          }}
        >
          <div id="AppLayout">
            <div>{children}</div>
          </div>
        </NotificationProvider>
      </ThemeProvider>
    </>
  );
}
