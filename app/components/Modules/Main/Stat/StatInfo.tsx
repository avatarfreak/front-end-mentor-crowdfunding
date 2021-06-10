import { TextWrapper, TitleWrapper } from "@/Elements/Card/style";
import { StatContainer } from "@/Elements/Main/Stats";
import { IStatProps } from "./type";

export const StatInfo: React.FC<IStatProps> = ({ title, pledge }) => {
  return (
    <StatContainer>
      <TitleWrapper>{title}</TitleWrapper>
      <TextWrapper>{pledge}</TextWrapper>
    </StatContainer>
  );
};
