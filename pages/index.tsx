import Header from "@/Elements/Header";
import BackgroundImage from "@/Elements/Header/BackgroundImage";
import { Navbar } from "@/Elements/Header/Navbar";
import Logo from "@/Modules/Navbar/Brand";
import { Nav } from "@/Modules/Navbar/Nav";

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
    </>
  );
};

export default Home;
