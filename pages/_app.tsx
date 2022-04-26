import type { AppProps } from "next/app";
import { CssBaseline } from "@mui/material";
import Head from "next/head";
import { ThemeProvider } from "@mui/system";
import { theme } from "../src/utils/theme";
import { SnackbarProvider } from "notistack";
import { AuthenticationProvider } from "../src/providers/authentication-provider";
import HomesProvider from "../src/providers/homes-provider";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <SnackbarProvider>
        <ThemeProvider theme={theme}>
          <AuthenticationProvider>
            <HomesProvider>
              <CssBaseline />
              <Component {...pageProps} />
            </HomesProvider>
          </AuthenticationProvider>
        </ThemeProvider>
      </SnackbarProvider>
    </>
  );
}

export default MyApp;
