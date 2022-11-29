import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { Themes } from "@/styles/themes";

export default function App({ Component, pageProps }: AppProps) {
  const theme = Themes["dark"];
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
