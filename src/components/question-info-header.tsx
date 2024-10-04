import * as React from "react";
import { FunctionComponent } from "react";
import * as styles from "./question-info-header.module.css";

export type QuestionInfoHeaderType = {
  className?: string;
};

const QuestionInfoHeader: FunctionComponent<QuestionInfoHeaderType> = ({
  className = "",
}) => {
  return (
    <header className={[styles.questioninfoheader, className].join(" ")}>
      <div className={styles.back}>
        <img
          className={styles.arrowBackIosIcon}
          loading="lazy"
          alt=""
          src="/arrow-back-ios.svg"
        />
      </div>
      <div className={styles.faucetsFixturesParent}>
        <a className={styles.faucetsFixtures}>Doors Repair</a>
        <div className={styles.questionLabel}>
          <a className={styles.question19}>Question 1/5</a>
        </div>
      </div>
      <div className={styles.back}>
        <div className={styles.infoOutlineParent}>
          <img
            className={styles.infoOutlineIcon}
            loading="lazy"
            alt=""
            src="/info-outline.svg"
          />
          <img
            className={styles.infoOutlineIcon}
            loading="lazy"
            alt=""
            src="/close.svg"
          />
        </div>
      </div>
    </header>
  );
};

export default QuestionInfoHeader;
