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
  margin-top: clamp(27px, 4.5vh, 47px);
  margin-left: clamp(24px, 6vw, 166px);
  margin-right: clamp(24px, 6vw, 166px);

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin-top: clamp(27px, 6vh, 47px);
    margin-left: clamp(24px, 12vw, 166px);
    margin-right: clamp(24px, 12vw, 166px);
  }
`;

export const Navbar: React.FC<React.ReactNode> = ({ children }) => {
  return <NavWrapper>{children}</NavWrapper>;
};
