import * as React from "react";
import { FunctionComponent } from "react";
import * as styles from "./question-progress.module.css";

export type QuestionProgressType = {
  className?: string;
};

const QuestionProgress: FunctionComponent<QuestionProgressType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.questionprogress, className].join(" ")}>
      <div className={styles.background} />
      <div className={styles.progress} />
    </div>
  );
};

export default QuestionProgress;
