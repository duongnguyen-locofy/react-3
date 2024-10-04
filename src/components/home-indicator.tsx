import * as React from "react";
import { FunctionComponent } from "react";
import * as styles from "./home-indicator.module.css";

export type HomeIndicatorType = {
  className?: string;
};

const HomeIndicator: FunctionComponent<HomeIndicatorType> = ({
  className = "",
}) => {
  return (
    <footer className={[styles.homeIndicator, className].join(" ")}>
      <div className={styles.iconTasks}>
        <div className={styles.fill} />
      </div>
      <img
        className={styles.iconTasks}
        loading="lazy"
        alt=""
        src="/icon--home.svg"
      />
      <img
        className={styles.iconTasks}
        loading="lazy"
        alt=""
        src="/icon--back.svg"
      />
    </footer>
  );
};

export default HomeIndicator;
