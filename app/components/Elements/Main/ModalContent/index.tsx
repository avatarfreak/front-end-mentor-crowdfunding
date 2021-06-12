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

export const PledgeWrapper = styled.div`
  overflow-y: auto;
  height: 54vh;
  //-ms-overflow-style: none; /* IE and Edge */
  //scrollbar-width: none; Firefox

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
