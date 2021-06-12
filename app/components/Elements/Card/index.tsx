import { CardWrapper } from "./style";

interface IProps {
  activeStyle?: string;
  tabIndex?: number;
}
const CardContainer: React.FC<IProps> = ({ activeStyle = "inactive", children }) => {
  return <CardWrapper className={activeStyle}>{children}</CardWrapper>;
};
export default CardContainer;
