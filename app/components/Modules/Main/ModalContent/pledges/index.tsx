import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { RadioButton } from "@/Elements/Button/Radio";
import { FormContent } from "@/Modules/Main/ModalContent/Form";
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

export const ModalPledge: React.FC<{ parentId: number }> = ({ parentId }) => {
  const [pledges, setPledges] = useState<IData>(modalPledgeData);
  const [parentIdx, setParentIdx] = useState<number>(parentId);

  const cardRef = pledges.reduce((acc: {}, value) => {
    acc[value.id] = useRef();
    return acc;
  }, {});

  useEffect(() => {
    const { current } = cardRef[parentIdx];
    if (current) {
      current.addEventListener("click", setParentIdx(parentIdx));
      current.focus();
    }

    return () => current.removeEventListener("click", setParentIdx(parentIdx));
  }, []);

  useLayoutEffect(() => {
    const onPageClicked = (e: MouseEvent) => {
      const { current } = cardRef[parentIdx];
      current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      if (current && !current.contains(e.target)) {
        setParentIdx(-1);
      }
    };

    if (parentIdx > -1) {
      window.addEventListener("click", onPageClicked);
    }

    return () => window.removeEventListener("click", onPageClicked);
  }, [parentIdx]);

  return (
    <PledgeWrapper>
      {pledges.map((data) => (
        <Card
          key={data.id}
          className={data.day === 0 ? "active" : "inactive"}
          ref={cardRef[data.id]}
          tabIndex={data.id}
          onClick={() => setParentIdx(data.id)}
        >
          <Header>
            <RadioButton value={data.id} parentId={parentIdx} setParentId={setParentIdx} />
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
            <FormContent amount={data.amount} />
          </FormWrapper>
        </Card>
      ))}
    </PledgeWrapper>
  );
};
