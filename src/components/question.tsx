import * as React from "react";
import { FunctionComponent } from "react";
import * as styles from "./question.module.css";

export type QuestionType = {
  className?: string;
  whatTypeOfServiceDoYouNeed?: string;
};

const Question: FunctionComponent<QuestionType> = ({
  className = "",
  whatTypeOfServiceDoYouNeed,
}) => {
  return (
    <div className={[styles.question, className].join(" ")}>
      <h1 className={styles.whatTypeOf}>{whatTypeOfServiceDoYouNeed}</h1>
      <div className={styles.selectTheAdequated}>Select all that applies</div>
    </div>
  );
};

export default Question;
