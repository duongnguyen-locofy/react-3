import * as React from "react";
import { FunctionComponent } from "react";
import * as styles from "./status-bar1.module.css";

export type StatusBar1Type = {
  className?: string;
  notch?: string;
  indicator?: string;
};

const StatusBar1: FunctionComponent<StatusBar1Type> = ({
  className = "",
  notch,
  indicator,
}) => {
  return (
    <div className={[styles.statusBar, className].join(" ")}>
      <img className={styles.notchIcon} alt="" src={notch} />
      <img
        className={styles.timeLight}
        loading="lazy"
        alt=""
        src="/time--light.svg"
      />
      <div className={styles.system}>
        <div className={styles.leftIcons}>
          <div className={styles.indicators}>
            <img
              className={styles.indicatorIcon}
              loading="lazy"
              alt=""
              src={indicator}
            />
          </div>
          <div className={styles.statusIcons}>
            <img
              className={styles.networkSignalLight}
              loading="lazy"
              alt=""
              src="/network-signal-light.svg"
            />
            <img
              className={styles.wifiSignalLight}
              loading="lazy"
              alt=""
              src="/wifi-signal--light.svg"
            />
            <img
              className={styles.batteryLight}
              loading="lazy"
              alt=""
              src="/battery--light.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusBar1;
