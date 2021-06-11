import { CardWrapper, TextWrapper, TitleWrapper } from "@/Elements/Card/style";
import styled from "styled-components";

export const Card = styled(CardWrapper)`
  text-align: left;
`;

export const Title = styled(TitleWrapper)`
  font-size: calc(1rem + 1.06vw);
  font-weight: var(--bold);
  padding-bottom: 2rem;
  padding-top: 1rem;
`;

export const Text = styled(TextWrapper)`
  font-size: 1rem;
  font-weight: var(--regular);
  padding-bottom: 2rem;
`;
