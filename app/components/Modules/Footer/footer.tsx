import Link from "next/link";
import styled from "styled-components";

export const Wrapper = styled.footer`
  text-align: center;
  a {
    color: var(--darkcyan);
  }
`;

export const Footer: React.FC = () => {
  return (
    <Wrapper>
      Challenge by{" "}
      <Link href="https://www.frontendmentor.io?ref=challenge">
        <a target="_blank">Frontend Mentor </a>
      </Link>
      . Coded by{" "}
      <Link href="https://github.com/avatarfreak">
        <a target="_blank"> avatarfreak</a>
      </Link>
      .
    </Wrapper>
  );
};
