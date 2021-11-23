import { ReactNode } from 'react';
import { ThemeProvider } from '@/contextProviders/themes/theme.context';
import { applyCustomTheme } from 'themes/theme.utils';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <ThemeProvider value={{ switchTheme: applyCustomTheme }}>
        <div id="AppLayout">
          <div>{children}</div>
        </div>
      </ThemeProvider>
    </>
  );
}
