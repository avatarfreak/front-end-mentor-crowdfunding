import React from "react";
import { Project } from "./Details";
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
