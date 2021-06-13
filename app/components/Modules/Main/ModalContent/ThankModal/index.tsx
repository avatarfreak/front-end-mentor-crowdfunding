import Image from "next/image";
import { Card, Success, Title, Text, Button } from "@/Elements/Main/ModalContent/ThankModal";

export const ModalContent = () => {
  return (
    <Card>
      <Success>
        <Image height="64" width="64" src="/images/icon-check.svg" alt="success logo" />
      </Success>
      <Title> Thanks for your support!</Title>
      <Text>
        Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide.
        You will get an email once our campaign is completed.
      </Text>
      <Button>Got it!</Button>
    </Card>
  );
};
