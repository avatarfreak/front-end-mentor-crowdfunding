import React from "react";
import { Monitor } from "./Monitor";
import { Statistics } from "./Stat";
import { StatInfo } from "./Stat/StatInfo";

export const Content = () => {
  return (
    <>
      <Monitor />
      <Statistics />
    </>
  );
};
