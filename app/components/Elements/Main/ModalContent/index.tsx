import { CardWrapper, TextWrapper, TitleWrapper } from "@/Elements/Card/style";
import styled from "styled-components";

export const Section = styled(CardWrapper)`
  position: absolute;
  top: 0;
  max-width: 730px;
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
  padding: 0.5rem;
`;

export const Title = styled(TitleWrapper)`
  font-size: clamp(1.428rem, 2vw, 1.72rem);
`;

export const Text = styled(TextWrapper)`
  font-size: clamp(1rem, 2vw, 1.143rem);
  padding: 1.5rem 0;
`;
