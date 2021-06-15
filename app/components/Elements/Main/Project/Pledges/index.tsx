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
  font-size: clamp(1rem, 2vw, 1.29rem);
`;

export const SubTitle = styled(SubTitleWrapper)`
  font-size: clamp(1rem, 2vw, 1.1rem);
`;

export const Body = styled(BodyWrapper)``;

export const Text = styled(TextWrapper)`
  font-size: clamp(1rem, 2vw, 1.143rem);
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
  font-size: clamp(1rem, 2vw, 1.1rem);
`;
