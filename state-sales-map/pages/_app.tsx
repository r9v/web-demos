import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import BasicLayout from "../layout/BasicLayout";

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BasicLayout>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </BasicLayout>
  );
}

export default MyApp;
