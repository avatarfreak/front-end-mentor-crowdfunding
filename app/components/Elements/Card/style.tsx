import styled from "styled-components";

export const HeaderWrapper = styled.div<{ direction?: string }>`
  display: flex;
  justify-content: space-between;
  flex-direction: ${({ direction }) => (direction ? "row" : "column")};
`;

export const FooterWrapper = styled.div<{ direction?: string }>`
  display: flex;
  justify-content: space-between;
  flex-direction: ${({ direction }) => (direction ? "row" : "column")};
`;
export const BodyWrapper = styled.div`
  padding: 1.5rem 0;
`;

export const DurationWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const DayWrapper = styled.h4<{ fsz?: string }>`
  font-size: ${({ fsz }) => (fsz ? fsz : "2.3")}rem;
  margin-right: 0.5rem;
`;

export const TimeWrapper = styled.p`
  font-size: 1rem;
  font-weight: var(--regular);
  color: var(--darkgray);
`;

export const TitleWrapper = styled.h2`
  font-size: 0.875rem;
  font-family: "commissioner", sans-serif;
`;

export const SubTitleWrapper = styled.h3<{ clr?: string }>`
  font-size: 0.875rem;
  font-family: "commissioner", sans-serif;
  line-height: 2;
  font-weight: var(--medium);
  color: ${({ clr }) => (clr ? clr : "var(--cyan)")};
`;

export const TextWrapper = styled.p<{ clr?: string }>`
  font-size: 0.875rem;
  line-height: 1.7;
  color: ${({ clr }) => (clr ? clr : "var(--darkgray)")};
`;

export const CTAWrapper = styled.div`
  padding: 1.5rem 0 0 0;
`;

export const ButtonWrapper = styled.button<{ bg?: string; clr?: string }>`
  height: 3rem;
  width: 9.8rem;
  border-radius: 1.5rem;
  margin: 0;
  border: 0;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  color: ${({ clr }) => (clr ? clr : "#fff")};
  background: ${({ bg }) => (bg ? bg : "var(--cyan)")};

  &:hover {
    background: var(--darkcyan);
  }
`;

export const CardWrapper = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  padding-left: clamp(1.5rem, 4vw, 2.9rem);
  padding-right: clamp(1.5rem, 4vw, 2.9rem);

  border: 1px solid #ddd;
  box-shadow: 0 0 1px rgba(241, 241, 241, 0.5);
  border-radius: 0.5rem;
  margin: 2rem auto;
  background: #fff;
  &.active {
    opacity: 0.6;
    pointer-events: none;
    & ${ButtonWrapper} {
      background: var(--darkgray);
    }
  }
  &:focus-within {
    border-color: var(--cyan);
  }
  @media ${({ theme }) => theme.breakpoints.laptop} {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;
