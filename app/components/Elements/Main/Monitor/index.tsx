import styled from "styled-components";
import { ButtonWrapper, CardWrapper, FooterWrapper, TextWrapper } from "../../Card/style";
export const Card = styled(CardWrapper)`
  position: relative;
  background: #fff;
  margin-top: -4rem;
  width: 100%;

  @media ${({ theme }) => theme.breakpoints.laptop} {
    margin-top: -7rem;
  }
`;

export const Avatar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transform: translateY(-56px);
`;

export const Header = styled.header``;

export const Title = styled.h1`
  font-size: clamp(1.43rem, 4vw, 2rem);
  padding: 1.5rem 2.5rem;
  color: var(--black);
`;

export const Body = styled.div``;

export const Text = styled(TextWrapper)`
  font-size: clamp(1rem, 2vw, 1.143rem);
  font-weight: var(--regular);
`;

export const Footer = styled(FooterWrapper)`
  padding: 1.75rem 0rem;
  flex-direction: row;
`;

export const Button = styled(ButtonWrapper)`
  width: 13rem;
  height: 4rem;
  border-radius: 2rem;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: 1.14rem;
  }
`;

export const Logo = styled.div`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    position: absolute;
  }
`;

export const Btn = styled(Button)`
  display: none;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: block;
    font-size: 1.14rem;
    height: 4rem;
    width: 12rem;
    text-indent: 2pc;
    background: #c9c5c5;
  }
`;

export const Bookmark = styled.div`
  position: relative;
  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: flex;
    &:hover {
      & ${Btn} {
        width: 13rem;
        color: var(--cyan);
        background: #ddd;
        &::after {
          content: "ed";
        }
      }
      & ${Logo} svg {
        circle {
          fill: var(--cyan);
        }
        path {
          fill: #fff;
        }
      }
    }
  }
`;
