import { useState } from "react";
import { Title, Body, Input, Button, Currency } from "@/Elements/Main/ModalContent/Form";
export const Form = ({ amount }) => {
  const [value, setValue] = useState<number>(amount);
  const validatePledge = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (value < amount) {
      console.log(`you should enter more than ${amount}`);
    }
    if (value >= amount) {
      console.log("success");
    }
  };
  return (
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
  );
};
