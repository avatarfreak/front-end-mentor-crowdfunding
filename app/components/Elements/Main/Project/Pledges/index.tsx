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
import styled from "styled-components";

export const Card = styled(CardContainer)``;

export const Header = styled(HeaderWrapper)`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: flex;
    flex-direction: row;
  }
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

export const Footer = styled(FooterWrapper)`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: flex;
    flex-direction: row;
  }
`;

export const Button = styled(ButtonWrapper)``;

export const CTA = styled(CTAWrapper)``;

export const Duration = styled(DurationWrapper)``;

export const Day = styled(DayWrapper)``;

export const Time = styled(TimeWrapper)`
  font-size: 1rem;
`;
