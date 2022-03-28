import type { AppProps } from "next/app";
import { CssBaseline } from "@mui/material";
import Head from "next/head";
import { ThemeProvider } from "@mui/system";
import { theme } from "../src/utils/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
