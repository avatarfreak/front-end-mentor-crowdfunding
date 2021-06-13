import { ButtonWrapper, TextWrapper } from "@/Elements/Card/style";
import styled from "styled-components";

export const Title = styled(TextWrapper)`
  text-align: center;
  font-size: 1rem;
  padding: 1.5rem 0;
  font-weight: var(--regular);
`;

export const Body = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 1.5rem;
`;
export const Currency = styled.span`
  position: absolute;
  top: 1.1rem;
  left: 1.8rem;
  display: inline-block;
  font-size: 1rem;
  font-weight: var(--bold);
  color: #ddd;
`;

export const Input = styled.input.attrs({ type: "number" })`
  height: 3.5rem;
  width: 7.142rem;
  border-radius: 2rem;
  border: 1px solid #ddd;
  text-align: center;
  font-weight: var(--bold);
  font-size: 1rem;
  outline: 0;
  &:focus {
    border: 1px solid var(--cyan);
    caret-color: var(--cyan);
  }

  /* Chrome, Safari, Edge, Opera */
  /*Remove Arrows/Spinners*/
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const Button = styled(ButtonWrapper)`
  width: 8.214rem;
  height: 3.5rem;
  border-radius: 2rem;
  font-size: 1rem;
`;
