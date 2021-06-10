import React from "react";
import styled from "styled-components";

export const ImageWrapper = styled.div`
  cursor: pointer;
`;

export const Brand: React.FC<React.ReactNode> = ({ children }) => {
  return <ImageWrapper>{children}</ImageWrapper>;
};
