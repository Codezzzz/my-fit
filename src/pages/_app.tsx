import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import { GlobalStyles } from "twin.macro";
import "../styles/globals.css";
const API_MOCKING = process.env.NEXT_PUBLIC_API_MOCKING === "enabled";

const mswInit = async () => {
  const { initMocks } = await import("../../mocks");
  await initMocks();
};

if (API_MOCKING) {
  mswInit();
}

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
  getHeader?: () => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const [queryClient] = useState(() => new QueryClient());
  const getLayout = Component.getLayout || (page => page);
  const getHeader = Component.getHeader || (() => null);

  const [shouldRender, setShouldRender] = useState(!API_MOCKING);
  useEffect(() => {
    async function initMocksFunc() {
      const { initMocks } = await import("../../mocks");
      await initMocks();
      setShouldRender(true);
    }

    if (API_MOCKING) {
      initMocksFunc();
    }
  }, []);

  if (!shouldRender) return null;
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          {/* <ThemeProvider attribute="class"> */}
          <ReactQueryDevtools initialIsOpen={false} />
          {getHeader()}
          {getLayout(<Component {...pageProps} />)}
          <GlobalStyles />
          {/* </ThemeProvider> */}
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}
