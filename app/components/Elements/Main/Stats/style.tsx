import { CardWrapper, TextWrapper, TitleWrapper } from "@/Elements/Card/style";
import styled from "styled-components";

export const StatsContainer = styled(CardWrapper)`
  text-align: center;
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: flex;
    padding-top: 1rem;
    padding-bottom: 1rem;
    & > * {
      flex: 1 1 100%;
    }
  }
`;

export const Title = styled(TitleWrapper)`
  font-size: 2.28rem;
  font-weight: var(--bold);
`;
export const Text = styled(TextWrapper)`
  font-size: 1rem;
  font-weight: var(--medium);
  line-height: 2.5;
`;

export const Stat = styled.div`
  position: relative;
  text-align: center;
  padding: 1.5rem;

  &:not(:nth-child(3))::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    border-bottom: 1px solid #dddddd;
    width: 5rem;
    margin: 0.75rem auto;

    @media ${({ theme }) => theme.breakpoints.tablet} {
      margin: 0;
      border-bottom: 0;
      top: 1.2rem;
      left: 12rem;
      height: 5rem;
      border-right: 1px solid #dddddd;
    }
  }
`;
