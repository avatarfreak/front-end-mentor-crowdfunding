import { Statistic } from "@/Elements/Main/Stats";
import { Container } from "@/Elements/Main/Stats/style";
import { getPledge } from "@/Utility/getValue";
import { useState } from "react";
import ProgressBar from "../Progress";
import { stats } from "./data";
import { StatInfo } from "./StatInfo";

type Stats = typeof stats;

export const Statistics: React.FC = () => {
  const [data] = useState<Stats>(stats);
  const value = getPledge() + 89_914;
  console.log(value);
  return (
    <>
      <Statistic>
        <Container>
          {data.map(({ title, pledge }, idx) => (
            <StatInfo key={idx} title={title} pledge={pledge} />
          ))}
        </Container>
        <ProgressBar value={value} />
      </Statistic>
    </>
  );
};
