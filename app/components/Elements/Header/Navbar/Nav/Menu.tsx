import styled from "styled-components";

export const ImageWrapper = styled.div`
  cursor: pointer;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: none;
  }
`;

export const CollapsibleMenu = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  filter: drop-shadow(0 0 2px gray);
  margin-top: 4rem;
  z-index: 1;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    position: unset;
    margin: 0;
  }
`;

export const MenuWrapper = styled.ul`
  list-style: none;
  background: #ffffff;
  border-radius: 0.5rem;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-20%);
  transition: transform 0.5s ease;
  &.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: flex;
    visibility: visible;
    opacity: 1;
    transition: none;
    background: transparent;
    transform: translateY(0);
  }
`;

export const Item = styled.li`
  line-height: 2;
  border-bottom: 1px solid #dddddd;
  &:last-child {
    border: none;
  }

  a {
    display: block;
    padding: 1.2rem 1.24rem;
    color: var(--black);
    font-weight: var(--medium);
    &:hover {
      font-weight: var(--bold);
    }
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    border: 0;
    a {
      color: #fff;
    }
  }
`;

interface IProps {
  active?: boolean;
  children?: React.ReactNode;
}
export const Menu: React.FC<IProps> = ({ active, children }, ref) => {
  return <MenuWrapper className={active && "active"}>{children}</MenuWrapper>;
};
