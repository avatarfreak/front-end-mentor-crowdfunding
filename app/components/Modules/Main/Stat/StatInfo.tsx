import { Text, Title } from "@/Elements/Main/Stats/style";
import { StatContainer } from "@/Elements/Main/Stats";
import { IStatProps } from "./type";

export const StatInfo: React.FC<IStatProps> = ({ title, pledge }) => {
  return (
    <StatContainer>
      <Title>{title}</Title>
      <Text>{pledge}</Text>
    </StatContainer>
  );
};
