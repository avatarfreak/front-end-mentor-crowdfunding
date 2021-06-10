import { CardWrapper } from "@/Elements/Card/style";
import styled from "styled-components";

export const StatsContainer = styled(CardWrapper)`
  text-align: center;
  width: 100%;
  height: 100%;
`;

export const Stat = styled.div`
  position: relative;
  text-align: center;
  padding: 1rem;

  &:not(:nth-child(3))::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    border-bottom: 1px solid #dddddd;
    width: 5rem;
    margin: 0.75rem auto;
  }
`;
