import * as React from "react";
import { FunctionComponent, useMemo, type CSSProperties } from "react";
import SelectCheckOff from "./select-check-off";
import * as styles from "./multiselection-card.module.css";

export type MultiselectionCardType = {
  className?: string;
  installation?: string;
  selectCheckOffName?: string;

  /** Style props */
  propMinHeight?: CSSProperties["minHeight"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propHeight?: CSSProperties["height"];
  propDisplay?: CSSProperties["display"];
};

const MultiselectionCard: FunctionComponent<MultiselectionCardType> = ({
  className = "",
  propMinHeight,
  installation,
  propAlignSelf,
  propHeight,
  propDisplay,
  selectCheckOffName,
}) => {
  const multiselectionCardStyle: CSSProperties = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  const installationStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      height: propHeight,
      display: propDisplay,
    };
  }, [propAlignSelf, propHeight, propDisplay]);

  return (
    <div
      className={[styles.multiselectionCard, className].join(" ")}
      style={multiselectionCardStyle}
    >
      <div className={styles.selectcheckoffParent}>
        <SelectCheckOff selectCheckOffName={selectCheckOffName} />
        <div className={styles.installationWrapper}>
          <div className={styles.installation} style={installationStyle}>
            {installation}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiselectionCard;
