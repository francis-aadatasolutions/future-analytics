import { GitHubBanner, Refine } from '@refinedev/core';
import { RefineKbar, RefineKbarProvider } from '@refinedev/kbar';
import routerProvider, {
  UnsavedChangesNotifier,
} from '@refinedev/nextjs-router';
import type { NextPage } from 'next';
import { AppProps } from 'next/app';

import dataProvider from '@refinedev/simple-rest';
import '@styles/global.css';

const API_URL = '/api';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  noLayout?: boolean;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout): JSX.Element {
  // const renderComponent = () => {
  //   if (Component.noLayout) {
  //     return <Component {...pageProps} />;
  //   }

  //   return (
  //     <Layout>
  //       <Component {...pageProps} />
  //     </Layout>
  //   );
  // };

  return (
    <>
      <RefineKbarProvider>
        <Refine
          routerProvider={routerProvider}
          dataProvider={dataProvider(API_URL)}
          resources={[]}
          options={{
            syncWithLocation: true,
            warnWhenUnsavedChanges: true,
          }}>
          {<Component {...pageProps} />}
          <RefineKbar />
          <UnsavedChangesNotifier />
        </Refine>
      </RefineKbarProvider>
    </>
  );
}

export default MyApp;
