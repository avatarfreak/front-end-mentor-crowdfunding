import React from "react";
import { Project } from "./Project";
import { Monitor } from "./Monitor";
import { Statistics } from "./Stat";

export const Content = () => {
  return (
    <>
      <Monitor />
      <Statistics />
      <Project />
    </>
  );
};
