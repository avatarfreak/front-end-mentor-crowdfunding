import Header from "@/Elements/Header";
import {
  Avatar,
  Card,
  Title,
  Text,
  Footer,
  Bookmark,
  Button,
  Body,
  Btn,
  Logo,
} from "@/Elements/Main/Monitor";
import { prefix } from "@/Utility/prefix";
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
            <Logo>
              <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <circle fill="#2F2F2F" cx="28" cy="28" r="28" />
                  <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
                </g>
              </svg>
            </Logo>
            <Btn>Bookmark</Btn>
          </Bookmark>
        </Footer>
      </Card>
    </>
  );
};
