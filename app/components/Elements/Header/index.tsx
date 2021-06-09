import React from "react";
import styled from "styled-components";

export const Wrapper = styled.header``;

const Header: React.FC<React.ReactNode> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Header;
