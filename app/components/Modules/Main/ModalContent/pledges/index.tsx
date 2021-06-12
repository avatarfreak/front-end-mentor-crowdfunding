import { useState } from "react";
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
} from "@/Elements/Main/ModalContent/Pledges";
import { modalPledgeData } from "./data";

type IData = typeof modalPledgeData;

import React from "react";
import { RadioButton } from "@/Elements/Button/Radio";

export const ModalPledge = () => {
  const [pledges, setPledges] = useState<IData>(modalPledgeData);
  return (
    <PledgeWrapper>
      {pledges.map((data) => (
        <Card key={data.id} activeStyle={data.day === 0 ? "active" : "inactive"}>
          <Header>
            <RadioButton />
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
        </Card>
      ))}
    </PledgeWrapper>
  );
};
