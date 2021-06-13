import Image from "next/image";
import { Section, Header, Title, Button, Text } from "@/Elements/Main/ModalContent";
import React, { SetStateAction } from "react";
import { bodyScroll } from "components/Utility/scroll";

interface IProps {
  setShowModal: React.Dispatch<SetStateAction<boolean>>;
  children?: React.ReactNode;
}

export const ModalContent: React.FC<IProps> = ({ setShowModal, children }) => {
  return (
    <Section>
      <Header>
        <Title>Back this project</Title>
        <Button
          onClick={() => {
            setShowModal((prev) => !prev);
            bodyScroll("auto");
          }}
        >
          <Image src="/images/icon-close-modal.svg" height={15} width={15} layout="fixed" />
        </Button>
      </Header>
      <Text>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</Text>
      {children}
    </Section>
  );
};
