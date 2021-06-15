import Header from "@/Elements/Header";
import BackgroundImage from "@/Elements/Header/BackgroundImage";
import { Navbar } from "@/Elements/Header/Navbar";
import Logo from "@/Modules/Navbar/Brand";
import { Nav } from "@/Modules/Navbar/Nav";
import { Main } from "@/Elements/Main";
import { Content } from "@/Modules/Main";
import { Footer } from "@/Modules/Footer/footer";

const Home: React.FC = () => {
  return (
    <>
      <Header>
        <BackgroundImage />
        <Navbar>
          <Logo />
          <Nav />
        </Navbar>
      </Header>
      <Main>
        <Content />
      </Main>
      <Footer />
    </>
  );
};

export default Home;
