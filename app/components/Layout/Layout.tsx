import Head from "next/head";
import GlobalStyle from "./GlobalStyle";

const Layout: React.FC<React.ReactNode> = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <meta name="description" content="Crowdfunding product page" />
        <title>Frontend Mentor | Crowdfunding product page</title>
      </Head>
      {children}
    </>
  );
};

export default Layout;
