import { ProgressContainer } from "@/Elements/Main/ProgressBar";
import { IProps } from "@/Modules/Main/Progress/type";

const ProgressBar: React.FC<IProps> = (props) => {
  const { max = 100, value = 0, total = 100_000 } = props;
  const totalValue = (value / total) * 100;
  return (
    <ProgressContainer>
      <progress max={max} value={totalValue.toFixed(2)}></progress>
    </ProgressContainer>
  );
};

export default ProgressBar;
