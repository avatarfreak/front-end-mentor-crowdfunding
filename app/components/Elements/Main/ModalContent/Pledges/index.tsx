import styled from "styled-components";
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
  margin-top: 1rem;
  border-top: 2px solid #ddd;
  padding-bottom: 1rem;
  display: none;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    padding-top: 1rem;
  }
`;

export const Card = styled.section`
  position: relative;
  text-align: left;
  border: 1px solid #ddd;
  box-shadow: 0 0 1px rgba(241, 241, 241, 0.5);
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  background: #fff;
  cursor: pointer;
  &.active {
    opacity: 0.6;
    pointer-events: none;
    & ${ButtonWrapper} {
      background: var(--darkgray);
    }
  }
  &:focus-within {
    border: 2px solid var(--cyan);
    & ${FormWrapper} {
      display: block;
    }
  }
`;

export const Header = styled(HeaderWrapper)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 1.5rem 1.5rem 0 1.5rem;
`;

export const Heading = styled.div`
  padding: 0 1rem;
  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: flex;
    flex-direction: row;
    align-items: center;
    & > * {
      margin-left: 1rem;
    }
  }
`;

export const Title = styled(TitleWrapper)`
  font-size: clamp(1rem, 2vw, 1.143rem);

  @media ${({ theme }) => theme.breakpoints.tablet} {
    &:hover {
      color: var(--cyan);
    }
  }
`;

export const SubTitle = styled(SubTitleWrapper)`
  font-size: clamp(1rem, 2vw, 1.143rem);
`;

export const Body = styled(BodyWrapper)``;

export const Text = styled(TextWrapper)`
  font-size: clamp(1rem, 2vw, 1.08rem);
  line-height: 1.9;
  padding: 0 1.5rem;
`;

export const Footer = styled(FooterWrapper)`
  padding-left: 1.5rem;
  padding-bottom: 1.5rem;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    padding: 1em;
    margin-right: 1rem;
  }
`;

export const Button = styled(ButtonWrapper)``;

export const CTA = styled(CTAWrapper)``;

export const Duration = styled(DurationWrapper)``;

export const Day = styled(DayWrapper)`
  font-size: 1.28rem;
`;

export const Time = styled(TimeWrapper)`
  font-size: clamp(1rem, 2vw, 1.0714rem);
  font-weight: var(--medium);
`;
