import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
`;

export const ModalContainer: React.FC<React.ReactNode> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};