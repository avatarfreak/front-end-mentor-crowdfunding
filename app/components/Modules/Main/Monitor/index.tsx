import Header from "@/Elements/Header";
import { Avatar, Card, Title, Text, Footer, Bookmark, Button, Body } from "@/Elements/Main/Monitor";
import Image from "next/image";
import { SetStateAction } from "react";

interface IProps {
  setShowModal: React.Dispatch<SetStateAction<boolean>>;
}

export const Monitor: React.FC<IProps> = ({ setShowModal }) => {
  return (
    <>
      <Card>
        <Header>
          <Avatar>
            <Image
              src="/images/logo-mastercraft.svg"
              height={56}
              width={56}
              alt="mastercraft icon"
              layout="fixed"
            />
          </Avatar>
          <Title>Mastercraft Bamboo Monitor Riser</Title>
        </Header>
        <Body>
          <Text>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</Text>
        </Body>
        <Footer>
          <Button onClick={() => setShowModal((prev) => !prev)}>Back this project</Button>
          <Bookmark>
            <Image
              src="/images/icon-bookmark.svg"
              width="56"
              height="56"
              alt="bookmark icon"
              layout="fixed"
            />
          </Bookmark>
        </Footer>
      </Card>
    </>
  );
};
