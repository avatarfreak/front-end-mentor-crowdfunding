import { useState } from "react";
import {
  Title,
  Body,
  Input,
  Button,
  Currency,
  InputContainer,
  Wrapper,
  Error,
} from "@/Elements/Main/ModalContent/Form";
import { ModalContent } from "@/Modules/Main/ModalContent/ThankModal";
import { Modal } from "@/Modules/Modal/Modal";

export const FormContent = ({ amount }) => {
  const [value, setValue] = useState<number>(amount);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const validatePledge = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (value < amount) {
      setError(`Pledge should be equal or more than ${amount}`);
      return;
    }

    setIsActive(!isActive);
    setError("");
    setValue(amount);
  };

  return (
    <>
      <form onSubmit={validatePledge} noValidate>
        <Wrapper>
          <Title> Enter your pledge </Title>
          <Body>
            <InputContainer>
              <Currency>$</Currency>
              <Input
                min={amount}
                placeholder={amount}
                value={value}
                onChange={(e) => setValue(parseFloat(e.target.value))}
              />
            </InputContainer>
            <Button>Continue</Button>
          </Body>
        </Wrapper>
        <Error>{error}</Error>
      </form>
      <Modal showModal={isActive}>
        <ModalContent setIsActive={setIsActive} />
      </Modal>
    </>
  );
};
