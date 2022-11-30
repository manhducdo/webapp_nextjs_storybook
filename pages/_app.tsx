import "@/styles/globals.css";
import { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { Themes } from "@/styles/themes";
import { Layout } from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  const [isDark, setIsDark] = useState<boolean>(false);
  const theme = Themes[isDark ? "dark" : "light"];

  const toggleDark = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    setIsDark(window.matchMedia("prefers-color-schema: dark").matches);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Layout isDark={isDark} onThemeToggle={toggleDark}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
