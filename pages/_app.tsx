import 'scss/app.scss';
import 'scss/login.scss';
import 'windi.css';
import AppLayout from 'layouts/AppLayout';
import DefaultLayout from 'layouts/DefaultLayout';
import { AppPropsWithLayout } from 'types/app.types';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const CustomLayout = Component.layout || DefaultLayout;

  return (
    <AppLayout>
      <CustomLayout>
        <Component {...pageProps} />
      </CustomLayout>
    </AppLayout>
  );
}

export default MyApp;
