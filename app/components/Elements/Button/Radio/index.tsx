import styled from "styled-components";

export const Radio = styled.input.attrs({ type: "radio" })`
  height: 0;
  opacity: 0;
`;
export const CheckMark = styled.span`
  position: absolute;
  display: block;
  height: calc(100% - 10px);
  width: calc(100% - 10px);
  border-radius: 50%;

  &:hover {
    background: #d1d1d1;
  }
`;

export const RadioContainer = styled.label`
  width: 1.71rem;
  height: 1.7rem;
  border: 1px solid #ddd;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;

  & ${Radio}:checked + ${CheckMark} {
    background: var(--cyan);
  }
`;

export const RadioButton = ({ parentId, setParentId, value }) => {
  return (
    <RadioContainer>
      <Radio
        name="radio"
        value={value}
        checked={value == parentId}
        onChange={(e) => setParentId(e.target.value)}
      />
      <CheckMark />
    </RadioContainer>
  );
};
