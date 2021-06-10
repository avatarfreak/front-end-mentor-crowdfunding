import { Statistic } from "@/Elements/Main/Stats";
import { StatsContainer } from "@/Elements/Main/Stats/style";
import { useState } from "react";
import { stats } from "./data";
import { StatInfo } from "./StatInfo";

type Stats = typeof stats;

export const Statistics: React.FC = () => {
  const [data] = useState<Stats>(stats);
  return (
    <Statistic>
      {data.map(({ title, pledge }, idx) => (
        <StatInfo key={idx} title={title} pledge={pledge} />
      ))}
    </Statistic>
  );
};
