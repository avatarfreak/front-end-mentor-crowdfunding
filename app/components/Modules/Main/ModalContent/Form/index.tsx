import { useState } from "react";
import { Title, Body, Input, Button, Currency } from "@/Elements/Main/ModalContent/Form";
import { ModalContent } from "@/Modules/Main/ModalContent/ThankModal";
import { Modal } from "@/Modules/Modal/Modal";

export const Form = ({ amount }) => {
  const [value, setValue] = useState<number>(amount);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const validatePledge = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (value < amount) {
      console.log(`you should enter more than ${amount}`);
    }
    if (value >= amount) {
      console.log("success");
    }
    setIsActive(!isActive);
  };
  return (
    <>
      <form onSubmit={validatePledge} noValidate>
        <Title> Enter your pledge </Title>
        <Body>
          <Currency>$</Currency>
          <Input
            min={amount}
            placeholder={amount}
            value={value}
            onChange={(e) => setValue(parseFloat(e.target.value))}
          />
          <Button>Continue</Button>
        </Body>
      </form>
      <Modal showModal={isActive}>
        <ModalContent setIsActive={setIsActive} />
      </Modal>
    </>
  );
};
