import { useLayoutEffect, useRef, useState } from "react";
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
  Button,
  CTA,
  Heading,
  FormWrapper,
} from "@/Elements/Main/ModalContent/Pledges";
import { modalPledgeData } from "./data";

type IData = typeof modalPledgeData;

import React from "react";
import { RadioButton } from "@/Elements/Button/Radio";
import CardContainer from "@/Elements/Card";

export const ModalPledge = () => {
  const [pledges, setPledges] = useState<IData>(modalPledgeData);
  const [parentId, setParentId] = useState<Number>(0);
  useLayoutEffect(() => {}, []);

  return (
    <PledgeWrapper>
      {pledges.map((data) => (
        <CardContainer
          activeStyle={data.day === 0 ? "active" : "inactive"}
          key={data.id}
          tabIndex={data.id}
        >
          <Card>
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
