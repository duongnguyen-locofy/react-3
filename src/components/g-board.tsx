import * as React from "react";
import { FunctionComponent } from "react";
import HomeIndicator from "./home-indicator";
import * as styles from "./g-board.module.css";

export type GBoardType = {
  className?: string;
};

const GBoard: FunctionComponent<GBoardType> = ({ className = "" }) => {
  return (
    <div className={[styles.gBoard, className].join(" ")}>
      <HomeIndicator />
    </div>
  );
};

export default GBoard;
