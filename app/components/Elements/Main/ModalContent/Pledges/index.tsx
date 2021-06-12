import styled from "styled-components";
import CardContainer from "@/Elements/Card";
import {
  BodyWrapper,
  FooterWrapper,
  HeaderWrapper,
  SubTitleWrapper,
  TextWrapper,
  TitleWrapper,
  ButtonWrapper,
  CTAWrapper,
  DurationWrapper,
  DayWrapper,
  TimeWrapper,
  CardWrapper,
} from "@/Elements/Card/style";

export const PledgeWrapper = styled.div`
  overflow-y: auto;
  height: 70vh;
  //-ms-overflow-style: none; /* IE and Edge */
  //scrollbar-width: none; Firefox
  scrollbar-color: var(--cyan) #fff;
  &::-webkit-scrollbar {
    //display: none;
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 0.5rem;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.25);
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 0.5rem;
    background: var(--cyan);
    :hover {
      background: var(--darkcyan);
    }
  }
`;

export const FormWrapper = styled.div`
  margin: 1rem 0;
  border-top: 1px solid #ddd;
`;

export const Card = styled.section`
  text-align: left;
  cursor: pointer;
`;

export const Header = styled(HeaderWrapper)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Heading = styled.div`
  padding: 0 1rem;
`;

export const Title = styled(TitleWrapper)`
  font-size: 1rem;
`;

export const SubTitle = styled(SubTitleWrapper)`
  font-size: 1rem; ;
`;

export const Body = styled(BodyWrapper)``;

export const Text = styled(TextWrapper)`
  font-size: 1rem;
`;

export const Footer = styled(FooterWrapper)``;

export const Button = styled(ButtonWrapper)``;

export const CTA = styled(CTAWrapper)``;

export const Duration = styled(DurationWrapper)``;

export const Day = styled(DayWrapper)``;

export const Time = styled(TimeWrapper)`
  font-size: 1rem;
`;
