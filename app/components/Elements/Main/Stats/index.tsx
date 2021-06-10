import { Stat, StatsContainer } from "./style";

export const Statistic: React.FC = ({ children }) => {
  return <StatsContainer>{children}</StatsContainer>;
};

export const StatContainer: React.FC = ({ children }) => {
  return <Stat>{children}</Stat>;
};
