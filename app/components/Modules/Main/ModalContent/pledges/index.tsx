import { useLayoutEffect, useRef, useState } from "react";
import { RadioButton } from "@/Elements/Button/Radio";
import CardContainer from "@/Elements/Card";
import { Form } from "@/Modules/Main/ModalContent/Form";
import {
  PledgeWrapper,
  Text,
  Header,
  Card,
  Title,
  SubTitle,
  Body,
  Footer,
  Duration,
  Day,
  Time,
  Heading,
  FormWrapper,
} from "@/Elements/Main/ModalContent/Pledges";
import { modalPledgeData } from "./data";

type IData = typeof modalPledgeData;

export const ModalPledge = () => {
  const [pledges, setPledges] = useState<IData>(modalPledgeData);
  const [parentId, setParentId] = useState<number>(1);

  const cardRef = pledges.reduce((acc: {}, value) => {
    acc[value.id] = useRef();
    return acc;
  }, {});

  useLayoutEffect(() => {
    const { current } = cardRef[parentId];
    current.scrollIntoView({
      behavior: "smooth",
    });
  }, [parentId]);

  return (
    <PledgeWrapper>
      {pledges.map((data) => (
        <CardContainer
          key={data.id}
          activeStyle={data.day === 0 ? "active" : "inactive"}
          tabIndex={data.id}
        >
          <Card ref={cardRef[data.id]} onClick={() => setParentId(data.id)}>
            <Header>
              <RadioButton value={data.id} parentId={parentId} setParentId={setParentId} />
              <Heading>
                <Title>{data.title}</Title>
                <SubTitle>{data.pledge}</SubTitle>
              </Heading>
            </Header>

            <Body>
              <Text>{data.text}</Text>
            </Body>

            <Footer>
              <Duration>
                <Day>{data.day}</Day>
                <Time>{data.left}</Time>
              </Duration>
            </Footer>
            <FormWrapper>
              <Form amount={data.amount} />
            </FormWrapper>
          </Card>
        </CardContainer>
      ))}
    </PledgeWrapper>
  );
};
