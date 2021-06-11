import { SetStateAction, useState } from "react";
import { pledge } from "./data";
import {
  Card,
  Header,
  Title,
  SubTitle,
  Body,
  Text,
  Footer,
  Duration,
  CTA,
  Button,
  Day,
  Time,
} from "@/Elements/Main/Project/Pledges";

interface IProps {
  setShowModal: React.Dispatch<SetStateAction<boolean>>;
}
type Pledges = typeof pledge;
const Pledge: React.FC<IProps> = ({ setShowModal }) => {
  const [pledges, setPledges] = useState<Pledges>(pledge);

  return (
    <>
      {pledges.map((data) => (
        <Card key={data.id} activeStyle={data.day === 0 ? "active" : "inactive"}>
          <Header>
            <Title>{data.title}</Title>
            <SubTitle>{data.pledge}</SubTitle>
          </Header>

          <Body>
            <Text>{data.text}</Text>
          </Body>

          <Footer>
            <Duration>
              <Day>{data.day}</Day>
              <Time>{data.left}</Time>
            </Duration>

            <CTA>
              <Button onClick={() => setShowModal((prev) => !prev)}>{data.btnText}</Button>
            </CTA>
          </Footer>
        </Card>
      ))}
    </>
  );
};

export default Pledge;
