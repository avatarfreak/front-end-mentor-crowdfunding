import { ButtonWrapper, CardWrapper, TextWrapper, TitleWrapper } from "@/Elements/Card/style";
import styled from "styled-components";

export const Card = styled(CardWrapper)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  max-width: 542px;
  max-height: 448px;
  width: 85%;
  transform: translateY(5rem);
  text-align: center;
  z-index: 20;
  & > * {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`;

export const Success = styled.div``;

export const Title = styled(TitleWrapper)`
  font-size: clamp(1.27rem, 3vw, 1.714rem);
`;

export const Text = styled(TextWrapper)`
  font-size: clamp(1rem, 3vw, 1.143rem);
  font-weight: var(--regular);
`;

export const Button = styled(ButtonWrapper)`
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 7.64rem;
  height: 3.5rem;
  border-radius: 2rem;
  font-size: 1rem;
  font-weight: var(--bold);
`;
