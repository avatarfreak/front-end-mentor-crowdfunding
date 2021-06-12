import { CardWrapper, TextWrapper, TitleWrapper } from "@/Elements/Card/style";
import styled from "styled-components";

export const Section = styled(CardWrapper)`
  position: absolute;
  top: 0;
  max-width: 100%;
  width: 85%;
  transform: translateY(5.5rem);
  z-index: 12;
`;

export const Header = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
`;

export const Button = styled.div`
  cursor: pointer;
`;

export const Title = styled(TitleWrapper)`
  font-size: 1.428rem;
`;

export const Text = styled(TextWrapper)`
  font-size: 1rem;
  padding: 1.5rem 0;
`;
