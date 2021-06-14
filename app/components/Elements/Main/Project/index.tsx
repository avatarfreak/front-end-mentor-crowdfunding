import { CardWrapper, TextWrapper, TitleWrapper } from "@/Elements/Card/style";
import styled from "styled-components";

export const Card = styled(CardWrapper)`
  text-align: left;
`;

export const Title = styled(TitleWrapper)`
  font-size: 1.43rem;
  font-weight: var(--bold);
  padding-bottom: 2rem;
  padding-top: 1rem;
`;

export const Text = styled(TextWrapper)`
  font-size: clamp(1rem, 2vw, 1.143rem);
  font-weight: var(--regular);
  padding-bottom: 2rem;
`;
