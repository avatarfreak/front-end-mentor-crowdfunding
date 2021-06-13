import { ButtonWrapper, CardWrapper, TextWrapper, TitleWrapper } from "@/Elements/Card/style";
import styled from "styled-components";

export const Card = styled(CardWrapper)`
  text-align: center;
  width: 100%;
  height: 100%;
  background: salmon;
  & > * {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`;

export const Success = styled.div``;

export const Title = styled(TitleWrapper)`
  font-size: 1.3rem;
`;

export const Text = styled(TextWrapper)`
  font-size: 1rem;
  font-weight: var(--medium);
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
