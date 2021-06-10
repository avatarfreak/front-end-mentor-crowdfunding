import styled from "styled-components";
export const CollapsibleMenu = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  filter: drop-shadow(0 0 2px gray);
  margin-top: 4rem;
  z-index: 1;
`;

export const MenuWrapper = styled.ul`
  list-style: none;
  background: #ffffff;
  border-radius: 0.5rem;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-20%);
  transition: all 0.8s ease;
  &.active {
    opacity: 1;
    visibility: visible;
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
  }
`;

interface IProps {
  active?: boolean;
  children?: React.ReactNode;
}
export const Menu: React.FC<IProps> = ({ active, children }, ref) => {
  return <MenuWrapper className={active && "active"}>{children}</MenuWrapper>;
};
