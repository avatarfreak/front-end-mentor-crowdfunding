import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Theme from "@/Theme/theme";
import GlobalStyle from "@/Layout/GlobalStyle";

const Layout: React.FC<React.ReactNode> = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Head>
        <meta name="description" content="Crowdfunding product page" />
        <title>Frontend Mentor | Crowdfunding product page</title>
      </Head>
      {children}
    </ThemeProvider>
  );
};

export default Layout;
