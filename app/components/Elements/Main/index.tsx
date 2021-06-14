import styled from "styled-components";

export const Main = styled.main`
  display: grid;
  margin: auto 7.5vw;
  text-align: center;
  justify-content: center;
  align-items: center;
  position: relative;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 0 auto;
    width: 52.14rem;
  }
`;
