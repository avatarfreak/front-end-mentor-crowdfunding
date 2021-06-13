import styled from "styled-components";
import {
  ButtonWrapper,
  CardWrapper,
  FooterWrapper,
  TextWrapper,
  TitleWrapper,
} from "../../Card/style";

export const Card = styled(CardWrapper)`
  position: relative;
  background: #fff;
  margin-top: -4rem;
  width: 100%;
`;

export const Avatar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transform: translateY(-56px);
`;

export const Header = styled.header``;

export const Title = styled.h1`
  font-size: calc(1rem + 1.6vw);
  padding: 1.5rem 2.5rem;
  color: var(--black);
`;
export const Body = styled.div``;

export const Text = styled(TextWrapper)`
  font-size: 1rem;
  font-weight: var(--regular);
`;

export const Footer = styled(FooterWrapper)`
  padding: 1.75rem 0rem;
  flex-direction: row;
`;

export const Button = styled(ButtonWrapper)`
  width: 13rem;
  height: 3.5rem;
  border-radius: 2rem;
`;
export const Bookmark = styled.div``;
