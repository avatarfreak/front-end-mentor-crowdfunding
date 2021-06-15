import { SetStateAction } from "react";
import Image from "next/image";
import { Card, Success, Title, Text, Button } from "@/Elements/Main/ModalContent/ThankModal";
import { prefix } from "@/Utility/prefix";

interface IProps {
  setIsActive: React.Dispatch<SetStateAction<boolean>>;
}

export const ModalContent = ({ setIsActive }) => {
  return (
    <Card>
      <Success>
        <Image height="64" width="64" src={prefix + "/images/icon-check.svg"} alt="success logo" />
      </Success>
      <Title> Thanks for your support!</Title>
      <Text>
        Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide.
        You will get an email once our campaign is completed.
      </Text>
      <Button onClick={() => setIsActive((prev) => !prev)}>Got it!</Button>
    </Card>
  );
};
