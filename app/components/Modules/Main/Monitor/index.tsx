import { CardWrapper } from "@/Elements/Card/style";
import Header from "@/Elements/Header";
import { Avatar, Card, Title, Text, Footer, Bookmark, Button, Body } from "@/Elements/Main/Monitor";
import Image from "next/image";

export const Monitor: React.FC = () => {
  return (
    <>
      <Card>
        <Header>
          <Avatar>
            <Image src="/images/logo-mastercraft.svg" height={56} width={56} layout="fixed" />
          </Avatar>
          <Title>Mastercraft Bamboo Monitor Riser</Title>
        </Header>
        <Body>
          <Text>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</Text>
        </Body>
        <Footer>
          <Button onClick={(): void => console.log("Back this project")}>Back this project</Button>
          <Bookmark>
            <Image src="/images/icon-bookmark.svg" width="56" height="56" layout="fixed" />
          </Bookmark>
        </Footer>
      </Card>
    </>
  );
};
