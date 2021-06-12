import { ButtonWrapper, TextWrapper } from "@/Elements/Card/style";
import styled from "styled-components";

export const Title = styled(TextWrapper)`
  text-align: center;
  font-size: 1rem;
  padding: 1.5rem 0;
`;

export const Body = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Currency = styled.span`
  position: absolute;
  top: 0.8rem;
  left: 1.5rem;
  display: inline-block;
  font-size: 1rem;
  font-weight: var(--bold);
  color: #ddd;
`;

export const Input = styled.input.attrs({ type: "number" })`
  height: 3rem;
  width: 6.28rem;
  border-radius: 1.5rem;
  border: 1px solid #ddd;
  text-align: center;
  font-weight: var(--bold);
  font-size: 1rem;
  outline: 0;
  &:focus {
    border: 1px solid var(--cyan);
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
  width: 7.18rem;
  height: 3rem;
`;
