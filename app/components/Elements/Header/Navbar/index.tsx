import React from "react";
import styled from "styled-components";

export const NavWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: calc(1rem + 2.133vw);
`;

export const Navbar: React.FC<React.ReactNode> = ({ children }) => {
  return <NavWrapper>{children}</NavWrapper>;
};
