import * as React from "react";
import { FunctionComponent } from "react";
import StatusBar1 from "./status-bar1";
import QuestionInfoHeader from "./question-info-header";
import * as styles from "./window1.module.css";

export type Window1Type = {
  className?: string;
  notch?: string;
  indicator?: string;
};

const Window1: FunctionComponent<Window1Type> = ({
  className = "",
  notch,
  indicator,
}) => {
  return (
    <div className={[styles.window1, className].join(" ")}>
      <StatusBar1 notch={notch} indicator={indicator} />
      <QuestionInfoHeader />
    </div>
  );
};

export default Window1;
